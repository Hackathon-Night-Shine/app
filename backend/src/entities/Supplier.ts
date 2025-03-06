import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    social_id: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ type: 'boolean', nullable: true })
    is_verified: boolean;

    @Column()
    bank_account_number: string;
}