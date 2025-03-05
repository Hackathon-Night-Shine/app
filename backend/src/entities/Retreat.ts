import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Retreat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 }) // TODO: Ask front what should be the max length
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ type: 'bytea', nullable: true })
    img: Buffer;

    @Column({ type: 'smallint', nullable: true })
    capacity: number;
}