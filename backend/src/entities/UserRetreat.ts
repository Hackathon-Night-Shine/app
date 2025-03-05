import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { User } from './User';
import { Retreat } from './Retreat';

@Entity()
export class UserRetreat {
    @PrimaryColumn()  // Primary column for user_id
    userId: number;

    @PrimaryColumn()  // Primary column for retreat_id
    retreatId: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })  // Specify the column to join with the User entity
    user: User;

    @ManyToOne(() => Retreat, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'retreatId' })  // Specify the column to join with the Retreat entity
    retreat: Retreat;
}