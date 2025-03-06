import { Router } from "express";
import { dataSource } from "../connection";
import { Supplier } from "../entities/Supplier";

export const suppliersRouter = Router();

suppliersRouter.get("/", async (req, res) => {
  try {
    const supplierRepository = dataSource.getRepository(Supplier);
    const suppliers = await supplierRepository.find();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch suppliers", error });
  }
});

suppliersRouter.post("/create", async (req, res) => {
  const supplier = req.body as Supplier;
  if (!supplier) {
    return res.status(400).json({ error: "supplier wasn't provided" });
  }

  const supplierRepository = dataSource.getRepository(Supplier);
  const newSupplier = supplierRepository.create(supplier);
  await supplierRepository.save(newSupplier);

  res.status(201).json(newSupplier);
});

suppliersRouter.put("/update/:id", async (req, res) => {
  const supplier = req.body as Partial<Supplier>;
  const id = req.params.id;

  if (!supplier) {
    return res.status(400).json({ error: "supplier detaild weren't provided" });
  }

  const supplierRepository = dataSource.getRepository(Supplier);
  const newSupplier = await supplierRepository.update(id, supplier);

  res.status(201).json(newSupplier);
});

suppliersRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  const supplierRepository = dataSource.getRepository(Supplier);
  const newSupplier = await supplierRepository.delete(id);

  res.status(201).json(newSupplier);
});

suppliersRouter.get("/dept/:supplierId", async (req, res) => {
  const supplierId = req.params.supplierId;

  try {
    const supplierRepository = dataSource.getRepository(Supplier);
    const supplier = await supplierRepository.findOne({ where: { id: +supplierId } });

    if (!supplier) {
      res.status(404).json({ message: "supplier not found" });
      return;
    }
    res.json(supplier);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch supplier", error });
  }
});