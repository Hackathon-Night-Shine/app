import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Retreat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 }) // TODO: Ask front what should be the max length
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  img: string;

  @Column({ type: "smallint", nullable: true })
  capacity: number;

  @Column({ type: "timestamp", nullable: true })
  dateTs: Date;

  @Column({ type: "smallint", nullable: true })
  currentParticipants: number;

  @Column({ type: "date", nullable: true })
  startDate: Date;

  @Column({ type: "date", nullable: true })
  endDate: Date;
}
