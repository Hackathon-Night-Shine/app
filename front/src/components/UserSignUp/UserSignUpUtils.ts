export const genderRadioRadioLabels = [
    { value: 'other', label: 'אחר' },
    { value: 'male', label: 'זכר' },
    { value: 'female', label: 'נקבה' },
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
});
