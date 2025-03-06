import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Supplier } from './Supplier';
import { Receipt } from './Receipt';

@Entity()
export class SupplierReceipt {
    @PrimaryColumn()
    supplierId: number;

    @PrimaryColumn()
    receiptId: number;

    @ManyToOne(() => Supplier, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'supplierId' })
    supplier: Supplier;

    @ManyToOne(() => Receipt, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'receiptId' })
    receipt: Receipt;
}