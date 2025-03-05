import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Receiptfer;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdTs: Date;
    
    @Column({ type: 'text', nullable: true })
    description: string;
    
    @Column({ type: 'boolean', nullable: true })
    is_payed: boolean;
}