import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { Retreat } from './Retreat';

export enum ReviewFutureParticipationStatus {
    OF_COURSE = 'ofCourse',
    HARD_TO_DESIDE = 'hardToDeside',
    FULFILLED = 'fulfilled'
}

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', nullable: true })
    postTs: Date;

    @Column({ type: 'int', nullable: true })
    moodBeforeWorkshop: number;

    @Column({ type: 'int', nullable: true })
    moodAfterWorkshop: number;

    @Column({ type: 'int', nullable: true })
    communityRating: number;

    @Column({ type: 'text', nullable: true })
    twoKeyEvents: string;

    @Column({ type: 'text', nullable: true })
    mostSignificantWorkshop: string;

    @Column({ type: 'text', nullable: true })
    leastSignificantWorkshop: string;

    @Column({ type: 'text', nullable: true })
    improvmentSuggestions: string;

    @Column({ type: 'int', nullable: true })
    hakumiWorkshopRating: number;

    @Column({ type: 'int', nullable: true })
    hakumiWorkshopGuideRating: number;

    @Column({ type: 'text', nullable: true })
    hakumiWorkshopKeyPoints: string;

    @Column({ type: 'int', nullable: true })
    emdrWorkshopRating: number;

    @Column({ type: 'int', nullable: true })
    emdrWorkshopGuideRating: number;

    @Column({ type: 'text', nullable: true })
    emdrWorkshopKeyPoints: string;

    @Column({ type: 'enum', enum: ReviewFutureParticipationStatus, nullable: true })
    futureParticipation: ReviewFutureParticipationStatus;

    @Column({ type: 'text', nullable: true })
    suggestion: string;

    @Column({ type: 'text', nullable: true })
    notes: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    reviewer: User;

    @ManyToOne(() => Retreat, { onDelete: 'CASCADE' })
    retreat: Retreat;
}