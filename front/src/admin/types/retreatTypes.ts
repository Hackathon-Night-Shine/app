type RetreatStatus = 'open' | 'closed' | 'userSigned' | 'full' | 'processing';

type Retreat = {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    destination: string;
    capacity: number;
    avilableParticipantsAmount: number;
    status: RetreatStatus;
};

type LocallyCreatedRetreat = Omit<Retreat, 'id' | 'avilableParticipantsAmount'>;

export type { LocallyCreatedRetreat, Retreat, RetreatStatus };

