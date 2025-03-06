import { yupResolver } from '@hookform/resolvers/yup';
import {
    Button,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { UserFormKeys } from './UserFormKeys';
import {
    createUserSchema,
    genderRadioRadioLabels,
    getUserDefaultValues,
    octoberLocationSelectLabels,
} from './UserSignUpUtils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { currentUserAtom } from '../../jotai/CurrentUser';

interface Props {
    email: string;
    firstName: string;
    lastName: string;
}

const UserSignUp: React.FC<Props> = (props) => {
    const { email, firstName, lastName } = props;

    const navigate = useNavigate();
    const setCurrentUser = useSetAtom(currentUserAtom);

    const methods = useForm<any>({
        resolver: yupResolver(createUserSchema),
        defaultValues: getUserDefaultValues(firstName, lastName, email),
    });

    const onSubmit: SubmitHandler<any> = async (data) => {
        const formattedData = {
            ...data,
            birthDate: data.birthDate.getTime(),
        };

        const user = await axios.post('http://localhost:3000/api/users', formattedData);

        setCurrentUser(user.data);
        navigate('/');
    };

    return (
        <>
            <Typography style={{ backgroundColor: 'white', fontWeight: 'bold', fontSize: '2rem' }}>
                שמחים שהצטרפת אלינו!
            </Typography>
            <Typography style={{ backgroundColor: 'white', fontWeight: '500', fontSize: '1.5rem' }}>
                כמה פרטים ומתחילים...
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div
                        style={{
                            color: 'black',
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <Controller
                            name={UserFormKeys.FIRST_NAME}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <TextField
                                        {...field}
                                        required
                                        color={!!error ? 'error' : 'primary'}
                                        placeholder='שם פרטי'
                                        error={!!error}
                                    />
                                    {!!error && (
                                        <Typography style={{ color: 'red' }}>
                                            {error.message}
                                        </Typography>
                                    )}
                                </>
                            )}
                        />

                        <Controller
                            name={UserFormKeys.LAST_NAME}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <TextField
                                        {...field}
                                        required
                                        color={!!error ? 'error' : 'primary'}
                                        placeholder='שם משפחה'
                                        error={!!error}
                                    />
                                    {!!error && (
                                        <Typography style={{ color: 'red' }}>
                                            {error.message}
                                        </Typography>
                                    )}
                                </>
                            )}
                        />

                        <Controller
                            name={UserFormKeys.EMAIL}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <TextField
                                        {...field}
                                        color={!!error ? 'error' : 'primary'}
                                        placeholder='אימייל'
                                        error={!!error}
                                        disabled
                                    />
                                    {!!error && (
                                        <Typography style={{ color: 'red' }}>
                                            {error.message}
                                        </Typography>
                                    )}
                                </>
                            )}
                        />

                        <Controller
                            name={UserFormKeys.BIRTH_DATE}
                            render={({ field, fieldState: { error } }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker {...field} label='תאריך לידה' format='DD/MM/YYYY' />
                                    {!!error && (
                                        <Typography style={{ color: 'red' }}>
                                            {error.message}
                                        </Typography>
                                    )}
                                </LocalizationProvider>
                            )}
                        />

                        <Controller
                            name={UserFormKeys.GENDER}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <RadioGroup {...field} row>
                                        {genderRadioRadioLabels.map(({ label, value }) => (
                                            <FormControlLabel
                                                key={value}
                                                value={value}
                                                label={label}
                                                control={<Radio />}
                                            />
                                        ))}
                                    </RadioGroup>
                                    {!!error && (
                                        <Typography style={{ color: 'red' }}>
                                            {error.message}
                                        </Typography>
                                    )}
                                </>
                            )}
                        />

                        <Controller
                            name={UserFormKeys.OCTOBER_7TH_EXPERIENCE}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Select {...field} displayEmpty sx={{ direction: 'rtl' }}>
                                        <option hidden value=''>
                                            איפה היית ב7 באוקטובר?
                                        </option>
                                        {octoberLocationSelectLabels.map((octoberLocation) => (
                                            <MenuItem
                                                key={octoberLocation.value}
                                                value={octoberLocation.value}
                                            >
                                                {octoberLocation.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {!!error && (
                                        <Typography style={{ color: 'red' }}>
                                            {error.message}
                                        </Typography>
                                    )}
                                </>
                            )}
                        />

                        <Button
                            style={{ backgroundColor: '#34A853', color: 'white' }}
                            type='submit'
                        >
                            להרשמה
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default UserSignUp;
