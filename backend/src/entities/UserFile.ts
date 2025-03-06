import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class UserFile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    incident: string;

    @Column({ type: 'text', nullable: true })
    age: string;

    @Column({ type: 'text', nullable: true })
    family_status: string;

    @Column({ type: 'text', nullable: true })
    home_details: string;

    @Column({ type: 'text', nullable: true })
    current_treatment: string;

    @Column({ type: 'text', nullable: true })
    pescription_drugs: string;

    @Column({ type: 'text', nullable: true })
    drugs_usage: string;

    @Column({ type: 'text', nullable: true })
    past_treatment: string;

    @Column({ type: 'text', nullable: true })
    daily_routine: string;

    @Column({ type: 'text', nullable: true })
    retreat_request_reason: string;

    @Column({ type: 'text', nullable: true })
    addional_notes: string;

    @Column({ type: 'text', nullable: true })
    known_allergies: string;

    @Column({ type: 'text', nullable: true })
    emergency_poc: string;
}