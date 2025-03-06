import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import './InvoiceForm.css';

interface Supplier {
  id: number;
  name: string;
}

export const InvoiceForm: React.FC = () => {
  const navigate = useNavigate(); // React Router navigation

  const [formData, setFormData] = useState({
    idnumber: "",
    amount: "",
    date: "",
    description: "",
    paid: "No",
    supplierId: "",
  });

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    fetch("https://your-api.com/suppliers")
      .then((response) => response.json())
      .then((data) => setSuppliers(data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("החשבונית נשמרה בהצלחה!");
  };

  const handleCancel = () => {
    if (window.confirm("האם אתה בטוח שאתה רוצה לבטל? שינויים לא יישמרו.")) {
      setFormData({
        idnumber: "",
        amount: "",
        date: "",
        description: "",
        paid: "No",
        supplierId: "",
      });
    }
  };

  return (
    <div className="invoice-page">
      <div className="form-container">
        
        <h2>חשבונית חדשה:</h2>
        <form onSubmit={handleSubmit} className="invoice-form">
          <label>מספר חשבונית:</label>
          <input type="number" name="idnumber" value={formData.idnumber} onChange={handleChange} />

          <label>סכום:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

          <label>תאריך חשבונית:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>תיאור:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />

          <label>שולם?</label>
          <select name="paid" value={formData.paid} onChange={handleChange}>
            <option value="No">לא</option>
            <option value="Yes">כן</option>
          </select>

          <label>שם ספק:</label>
          <select name="supplierId" value={formData.supplierId} onChange={handleChange}>
            <option value="">בחר ספק</option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>

          <div className="buttons">
            <button type="button" onClick={handleCancel} className="cancel-btn">
              ביטול
            </button>
            <button type="submit" className="save-btn">
              שמור
            </button>
          </div>
        </form>

        {/* Navigate to InvoiceManager page */}
        <button className="manage-invoices-btn" onClick={() => navigate("/InvoiceManager")}>
          עריכת / מחיקת חשבוניות
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;
