type RetreatStatus = 'open' | 'closed' | 'userSigned' | 'full';

type Retreat = {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    startDate: Date;
    endDate: Date;
    destination: string;
    maximumParticipantsAmount: number;
    avilableParticipantsAmount: number;
    status: RetreatStatus;
};

export type { Retreat, RetreatStatus };

