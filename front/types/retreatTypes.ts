type RetreatStatus = 'PENDING' | 'APPROVED' | 'DENIED' | 'PROCESSING';

type Retreat = {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    destination: string;
    maximumParticipantsAmount: number;
    avilableParticipantsAmount: number;
    status: RetreatStatus;
};

type LocallyCreatedRetreat = Omit<Retreat, 'id' | 'avilableParticipantsAmount'>;

export type { LocallyCreatedRetreat, Retreat, RetreatStatus };

