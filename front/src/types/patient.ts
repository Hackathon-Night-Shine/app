export interface Patient {
    userId: number;
    event: string;
    status: string;
    livingPlace: string;
    livingWith: string;
    meetsPsychiatrist: string;
    usesMedications: string;
    medicationPurpose: string;
    smokes: boolean;
    usesOtherSubstances: boolean;
    treatedBefore: boolean;
    hospitalizedBefore: boolean;
    tookPsychiatricMedication: boolean;
    dailyRoutine: string;
    retreatReason: string;
    additionalInfo: string;
    allergies: string;
    emergencyPhone: string;
    openComments: string;
}