import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddSupplier: React.FC = () => {
  const navigate = useNavigate();

  const [supplier, setSupplier] = useState({
    name: "",
    idNumber: "",
    phone: "",
    registeredBusiness: false,
    accountNumber: "",
    totalDebt: 0,
  });

  const [errors, setErrors] = useState({
    name: false,
    idNumber: false,
    phone: false,
    accountNumber: false,
  });

  const [openConfirmSave, setOpenConfirmSave] = useState(false);
  const [openConfirmCancel, setOpenConfirmCancel] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSupplier({
      ...supplier,
      [name]: type === "checkbox" ? checked : value,
    });
    // Remove error once user starts typing
    setErrors({ ...errors, [name]: false });
  };

  const validateForm = () => {
    let newErrors = {
      name: !supplier.name.trim(),
      idNumber: !supplier.idNumber.trim(),
      phone: !supplier.phone.trim(),
      accountNumber: !supplier.accountNumber.trim(),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).includes(true); // Returns true if all fields are valid
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // Prevents opening the confirmation dialog if fields are empty
    }
    setOpenConfirmSave(true);
  };

  const confirmSubmit = async () => {
    setOpenConfirmSave(false);

    const response = await fetch("https://your-api.com/suppliers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(supplier),
    });

    if (response.ok) {
      alert("✅ ספק נוסף בהצלחה!");
      navigate("/");
    } else {
      alert("❌ שגיאה בהוספת ספק");
    }
  };

  const handleCancel = () => {
    setOpenConfirmCancel(true);
  };

  const confirmCancel = () => {
    setOpenConfirmCancel(false);
    navigate("/");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
      <Typography variant="h5" gutterBottom align="center">
        הוספת ספק חדש
      </Typography>

      <TextField
        fullWidth
        label="שם מלא"
        name="name"
        onChange={handleChange}
        margin="normal"
        error={errors.name}
        helperText={errors.name ? "שדה חובה" : ""}
      />
      <TextField
        fullWidth
        label="תעודת זהות"
        name="idNumber"
        onChange={handleChange}
        margin="normal"
        error={errors.idNumber}
        helperText={errors.idNumber ? "שדה חובה" : ""}
      />
      <TextField
        fullWidth
        label="טלפון"
        name="phone"
        onChange={handleChange}
        margin="normal"
        error={errors.phone}
        helperText={errors.phone ? "שדה חובה" : ""}
      />
      <TextField
        fullWidth
        label="מספר חשבון בנק"
        name="accountNumber"
        onChange={handleChange}
        margin="normal"
        error={errors.accountNumber}
        helperText={errors.accountNumber ? "שדה חובה" : ""}
      />

      <FormControlLabel
        control={<Checkbox name="registeredBusiness" checked={supplier.registeredBusiness} onChange={handleChange} />}
        label="עסק מורשה?"
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="contained" color="error" onClick={handleCancel}>
          ביטול
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          שמור
        </Button>
      </Box>

      {/* Confirm Save Dialog */}
      <Dialog open={openConfirmSave} onClose={() => setOpenConfirmSave(false)}>
        <DialogTitle>אישור</DialogTitle>
        <DialogContent>האם אתה בטוח שברצונך להוסיף ספק חדש?</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmSave(false)} color="secondary">
            ביטול
          </Button>
          <Button onClick={confirmSubmit} color="primary">
            כן, הוסף ספק
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirm Cancel Dialog */}
      <Dialog open={openConfirmCancel} onClose={() => setOpenConfirmCancel(false)}>
  <DialogTitle>אישור ביטול</DialogTitle>
  <DialogContent>השינויים שלך לא יישמרו. האם אתה בטוח שברצונך לצאת?</DialogContent>
  <DialogActions>
    {/* Cancel Button - Closes the dialog */}
    <Button onClick={() => setOpenConfirmCancel(false)} color="secondary">
      ביטול
    </Button>

    {/* Confirm Button - Proceeds with cancel and navigation */}
    <Button
      onClick={() => {
        confirmCancel();
        navigate("/SupplierTable"); // Ensure this is the correct path
      }}
      color="error"
    >
      כן, בטוח
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default AddSupplier;
