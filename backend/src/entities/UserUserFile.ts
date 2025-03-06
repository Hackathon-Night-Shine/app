import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { User } from './User';
import { UserFile } from './UserFile';

@Entity()
export class UserUserFile {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    userFileId: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => UserFile, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userFileId' })
    user_file: UserFile;
}