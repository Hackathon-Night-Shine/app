import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Gender, October7thExperience, UserRole } from "../types";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: "enum", enum: UserRole, default: UserRole.CLIENT })
  role: UserRole;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdTs: Date;

  @Column({ type: "timestamp", nullable: true })
  birthDate: Date;

  @Column({ type: "enum", enum: Gender, nullable: true })
  gender: Gender;

  @Column({ type: "enum", enum: October7thExperience, nullable: true })
  october7thExperience: October7thExperience;

  @Column({ type: "bytea", nullable: true })
  img: Buffer;
}
