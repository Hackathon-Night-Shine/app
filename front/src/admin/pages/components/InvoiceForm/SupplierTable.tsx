import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, Button, TextField
} from "@mui/material";
import { Delete, Edit, Save, Cancel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


interface Supplier {
  id: number;
  name: string;
  idNumber: string;
  phone: string;
  registered: boolean;
  invoiceNumber: string;
  debt: number;
}

const initialSuppliers: Supplier[] = [
  { id: 1, name: "רוני גז", idNumber: "123456789", phone: "055-5555555", registered: true, invoiceNumber: "126-456456", debt: 500 }
];

const SupplierTable: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers);
  const [editId, setEditId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<Supplier | null>(null);

  // Handle Edit Click
  const handleEdit = (supplier: Supplier) => {
    setEditId(supplier.id);
    setEditedData({ ...supplier });
  };

  // Handle Save
  const handleSave = () => {
    if (editedData) {
      setSuppliers(suppliers.map(s => (s.id === editId ? editedData : s)));
      setEditId(null);
      setEditedData(null);
    }
  };

  // Handle Cancel
  const handleCancel = () => {
    setEditId(null);
    setEditedData(null);
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק ספק זה?")) {
      setSuppliers(suppliers.filter(s => s.id !== id));
    }
  };
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} style={{ maxWidth: 900, margin: "auto", marginTop: 20 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>שם</TableCell>
            <TableCell>תעודת זהות</TableCell>
            <TableCell>מספר טלפון</TableCell>
            <TableCell>עוסק מורשה?</TableCell>
            <TableCell>מספר חשבונית</TableCell>
            <TableCell>סכום חוב כולל</TableCell>
            <TableCell>פעולות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              {editId === supplier.id ? (
                <>
                  <TableCell>
                    <TextField value={editedData?.name} onChange={e => setEditedData({ ...editedData!, name: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <TextField value={editedData?.idNumber} onChange={e => setEditedData({ ...editedData!, idNumber: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <TextField value={editedData?.phone} onChange={e => setEditedData({ ...editedData!, phone: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <TextField value={editedData?.registered ? "כן" : "לא"} onChange={e => setEditedData({ ...editedData!, registered: e.target.value === "כן" })} />
                  </TableCell>
                  <TableCell>
                    <TextField value={editedData?.invoiceNumber} onChange={e => setEditedData({ ...editedData!, invoiceNumber: e.target.value })} />
                  </TableCell>
                  <TableCell>
                    <TextField value={editedData?.debt} onChange={e => setEditedData({ ...editedData!, debt: parseFloat(e.target.value) })} />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={handleSave}><Save /></IconButton>
                    <IconButton color="secondary" onClick={handleCancel}><Cancel /></IconButton>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.idNumber}</TableCell>
                  <TableCell>{supplier.phone}</TableCell>
                  <TableCell>{supplier.registered ? "כן" : "לא"}</TableCell>
                  <TableCell>{supplier.invoiceNumber}</TableCell>
                  <TableCell>{supplier.debt}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(supplier)}><Edit /></IconButton>
                    <IconButton color="error" onClick={() => handleDelete(supplier.id)}><Delete /></IconButton>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Supplier & Invoice Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 20, padding: 20 }}>
        <Button variant="contained" color="primary" onClick={()=>navigate("/AddSupplier")}>הוסף ספק</Button>
        <Button variant="contained" color="secondary" onClick={() => navigate("/InvoiceForm")}>לחץ להוספת חשבונית חדשה </Button>
      </div>
    </TableContainer>
  );
};

export default SupplierTable;
