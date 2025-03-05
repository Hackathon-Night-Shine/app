import { yupResolver } from '@hookform/resolvers/yup';
import {
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

interface Props {
    email: string;
    firstName: string;
    lastName: string;
}

const UserSignUp: React.FC<Props> = (props) => {
    const { email, firstName, lastName } = props;

    const methods = useForm<any>({
        resolver: yupResolver(createUserSchema),
        defaultValues: getUserDefaultValues(firstName, lastName, email),
    });

    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(data);
        return;
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div
                    style={{
                        color: 'black',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
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
                        name={UserFormKeys.OCTOBER_LOCATION}
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <Select
                                    {...field}
                                    displayEmpty
                                    color={!!error ? 'error' : 'primary'}
                                    style={{ direction: 'rtl' }}
                                >
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

                    <button type='submit'>צור משתמש</button>
                </div>
            </form>
        </FormProvider>
    );
};

export default UserSignUp;
