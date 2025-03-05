import * as yup from 'yup';
import { UserFormKeys } from './UserFormKeys';

export const genderRadioRadioLabels = [
    { value: 'female', label: 'נקבה' },
    { value: 'male', label: 'זכר' },
    { value: 'other', label: 'אחר' },
];

export const octoberLocationSelectLabels = [
    {
        value: 'south parties',
        label: 'מסיבות הדרום',
    },
    {
        value: 'Otef settelments',
        label: 'יישובי העוטף',
    },
    {
        value: 'security forces',
        label: 'כוחות הבטחון',
    },
    {
        value: 'medical teams',
        label: 'צוותי רפואה',
    },
    {
        value: 'other',
        label: 'אחר',
    },
];

export const getUserDefaultValues = (firstName: string, lastName: string, email: string) => ({
    firstName,
    lastName,
    email,
    octoberLocation: '',
});

export const createUserSchema = yup.object().shape({
    [UserFormKeys.FIRST_NAME]: yup.string().trim().required('חובה להזין שם פרטי'),
    [UserFormKeys.LAST_NAME]: yup.string().trim().required('חובה להזין שם משפחה'),
    [UserFormKeys.EMAIL]: yup.string().trim().required('חובה להזין אימייל'),
    [UserFormKeys.BIRTH_DATE]: yup.date().required('חובה להזין תאריך לידה'),
    [UserFormKeys.GENDER]: yup.string().trim().required('חובה להזין מגדר'),
    [UserFormKeys.OCTOBER_LOCATION]: yup
        .string()
        .trim()
        .required('חובה להזין איפה היית ב7 באוקטובר'),
});
