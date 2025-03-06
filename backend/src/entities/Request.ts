import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Retreat } from "./Retreat";
import { Status } from "../types";

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  client: User;

  @ManyToOne(() => Retreat, (retreat) => retreat.id, { onDelete: "CASCADE" })
  retreat: Retreat;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdTs: Date;

  @Column({ type: "enum", enum: Status })
  status: Status;
}
