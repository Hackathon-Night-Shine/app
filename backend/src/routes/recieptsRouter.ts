import { Router } from "express";
import { dataSource } from "../connection";
import { Receipt } from "../entities/Receipt";
import { SupplierReceipt } from "../entities/SupplierReceipt";

export const receiptsRouter = Router();

receiptsRouter.get("/:supplierId", async (req, res) => {
    const supplierId = req.params.supplierId;

    try {
        const receipts = await dataSource.getRepository(SupplierReceipt)
            .createQueryBuilder("supplierReceipt")
            .innerJoinAndSelect("supplierReceipt.receipt", "receipt")
            .where("supplierReceipt.supplierId = :supplierId", { supplierId })
            .getMany();
        res.json(receipts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch receipts", error });
    }
});

// get supplier dept
receiptsRouter.get("/:supplierId", async (req, res) => {
    const supplierId = req.params.supplierId;

    try {
        const receiptsNotPaidSum = await dataSource.getRepository(Receipt)
            .createQueryBuilder("receipt")
            .innerJoin("supplier_receipt", "sr", "receipt.id = sr.receiptId")
            .where("sr.supplierId = :supplierId", { supplierId })
            .andWhere("receipt.isPayed = false")
            .select("SUM(receipt.cost)", "total").getRawOne();
        res.json(receiptsNotPaidSum);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch receipts", error });
    }
});

receiptsRouter.post("/create/:supplierId", async (req, res) => {
    const supplierId = +req.params.supplierId;
    const receipt = req.body as Receipt;
    if (!Receipt) {
        return res.status(400).json({ error: "Receipt wasn't provided" });
    }

    try {
        const receiptRepository = dataSource.getRepository(Receipt);
        const supplierReceiptRepository = dataSource.getRepository(SupplierReceipt);

        const newReceipt = receiptRepository.create(receipt);
        await receiptRepository.save(newReceipt);

        const newRelation = supplierReceiptRepository.create({ receipt, supplierId })
        await supplierReceiptRepository.save(newRelation);

        res.status(201).json(newReceipt);
    } catch (error) {
        res.status(500).json({ message: "Failed to add receipt", error });
    }
});

receiptsRouter.put("/update/:id", async (req, res) => {
    const receipt = req.body as Partial<Receipt>;
    const id = req.params.id;

    if (!receipt) {
        return res.status(400).json({ error: "receipt detaild weren't provided" });
    }

    const receiptRepository = dataSource.getRepository(Receipt);
    const newReceipt = await receiptRepository.update(id, receipt);

    res.status(201).json(newReceipt);
});

receiptsRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    const supplierRepository = dataSource.getRepository(Receipt);
    await supplierRepository.delete(id);

    res.status(201).send(`receipt id ${id} was deleted`);
});