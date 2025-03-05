import {
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { useForm, SubmitHandler, FormProvider, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
    genderRadioRadioLabels,
    getUserDefaultValues,
    octoberLocationSelectLabels,
} from './UserSignUpUtils';
import React from 'react';

interface Props {
    email: string;
    firstName: string;
    lastName: string;
}

const UserSignUp: React.FC<Props> = (props) => {
    const { email, firstName, lastName } = props;

    const methods = useForm<any>({
        //   resolver: yupResolver(schema),
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
                        name='firstName'
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                required
                                color='primary'
                                placeholder='שם פרטי'
                                error={!!error}
                            />
                        )}
                    />

                    <Controller
                        name='lastName'
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                required
                                color='primary'
                                placeholder='שם משפחה'
                                error={!!error}
                            />
                        )}
                    />

                    <Controller
                        name='email'
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                color='primary'
                                placeholder='אימייל'
                                error={!!error}
                                disabled
                            />
                        )}
                    />

                    <Controller
                        name='birthDate'
                        render={({ field, fieldState: { error } }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker {...field} label='תאריך לידה' />
                                {!!error && <Typography>error</Typography>}
                            </LocalizationProvider>
                        )}
                    />

                    <Controller
                        name='gender'
                        render={({ field }) => (
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
                        )}
                    />

                    <Controller
                        name='octoberLocation'
                        render={({ field }) => (
                            <Select {...field} label='איפה היית ב7 באוקטובר?'>
                                {octoberLocationSelectLabels.map((octoberLocation) => (
                                    <MenuItem value={octoberLocation.value}>
                                        {octoberLocation.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    ></Controller>

                    <button type='submit'>צור משתמש</button>
                </div>
            </form>
        </FormProvider>
    );
};

export default UserSignUp;
