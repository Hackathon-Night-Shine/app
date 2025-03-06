import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Invoice {
  id: number;
  supplierName: string;
  amount: number;
  date: string;
}

const InvoiceManager: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch invoices from API
  useEffect(() => {
    fetch("https://your-api.com/invoices")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch invoices.");
        }
        return response.json();
      })
      .then((data) => {
        setInvoices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching invoices:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle editing an invoice
  const handleEdit = (id: number) => {
    navigate(`/edit-invoice/${id}`);
  };

  // Handle deleting an invoice
  const handleDelete = (id: number) => {
    if (window.confirm("האם אתה בטוח שאתה רוצה למחוק את החשבונית? פעולה זו אינה ניתנת לשחזור.")) {
      setInvoices(invoices.filter((invoice) => invoice.id !== id));
      alert(`✅ החשבונית מספר ${id} נמחקה בהצלחה.`);
    }
  };

  return (
    <div className="invoice-manager">
      <h2>ניהול חשבוניות</h2>

      {loading && <p>טוען חשבוניות...</p>}
      {error && <p className="error">שגיאה: {error}</p>}

      {!loading && !error && invoices.length === 0 && (
        <p className="no-invoices">אין חשבוניות להצגה.</p>
      )}

      <ul className="invoice-list">
        {invoices.map((invoice) => (
          <li key={invoice.id} className="invoice-item">
            <span>
              {invoice.supplierName} - {invoice.amount}₪ - {invoice.date}
            </span>
            <div className="actions">
              <button className="edit-btn" onClick={() => handleEdit(invoice.id)}>✏️ ערוך</button>
              <button className="delete-btn" onClick={() => handleDelete(invoice.id)}>🗑️ מחק</button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/InvoiceForm")} className="back-btn">🔙 חזרה</button>
    </div>
  );
};

export default InvoiceManager;
