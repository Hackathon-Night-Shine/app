import React, { useEffect, useState } from "react";
// import { Supplier } from "../../../../../types/supplier";

// const SuppliersTable: React.FC = () => {
//   const [suppliers, setSuppliers] = useState<Supplier[]>([]);
//   const [showModal, setShowModal] = useState(false); // Controls the popup visibility
//   const [newSupplier, setNewSupplier] = useState({
//     name: "",
//     idNumber: "",
//     phone: "",
//     registeredBusiness: false,
//     accountNumber: "",
//     totalDebt: 0,
//   });

//   // useEffect(() => {
//   //   fetch("https://your-api.com/suppliers") // Update with your actual API
//   //     .then((response) => response.json())
//   //     .then((data) => setSuppliers(data))
//   //     .catch((error) => console.error("Error fetching suppliers:", error));
//   // }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     // const response = await fetch("https://your-api.com/suppliers", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(newSupplier),
//     // });

//     // if (response.ok) {
//       alert("Supplier added successfully!");
//       setShowModal(false); // Close the modal after submission
//       setNewSupplier({ name: "", idNumber: "", phone: "", registeredBusiness: false, accountNumber: "", totalDebt: 0 });
//     //   fetch("https://your-api.com/suppliers") // Refresh the supplier list
//     //     .then((response) => response.json())
//     //     .then((data) => setSuppliers(data));
//     // } else {
//     //   alert("Error adding supplier");
//     // }
//   };

//   return (
//     <div>
//       <h2>Suppliers Table</h2>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>ID Number</th>
//             <th>Phone</th>
//             <th>Registered Business?</th>
//             <th>Bank Account</th>
//             <th>Total Debt</th>
//           </tr>
//         </thead>
//         <tbody>
//           {suppliers.map((supplier) => (
//             <tr key={supplier.id}>
//               <td>{supplier.name}</td>
//               <td>{supplier.idNumber}</td>
//               <td>{supplier.phone}</td>
//               <td>{supplier.registeredBusiness ? "Yes" : "No"}</td>
//               <td>{supplier.accountNumber}</td>
//               <td>{supplier.totalDebt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={() => setShowModal(true)}>Add Supplier</button>

//       {/* Popup Modal */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>Add New Supplier</h3>
//             <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} value={newSupplier.name} />
//             <input type="text" name="idNumber" placeholder="ID Number" onChange={handleInputChange} value={newSupplier.idNumber} />
//             <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} value={newSupplier.phone} />
//             <input type="text" name="accountNumber" placeholder="Bank Account" onChange={handleInputChange} value={newSupplier.accountNumber} />
//             <button onClick={handleSubmit}>Save</button>
//             <button onClick={() => setShowModal(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SuppliersTable;

interface Supplier {
  id: number;
  name: string;
  idNumber: string;
  phone: string;
  registeredBusiness: boolean;
  accountNumber: string;
  totalDebt: number;
}

export const SuppliersTable: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editedSupplier, setEditedSupplier] = useState<Supplier | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://your-api.com/suppliers") // API call
      .then((response) => response.json())
      .then((data) => setSuppliers(data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  const handleEdit = (supplier: Supplier) => {
    setEditId(supplier.id);
    setEditedSupplier(supplier);
  };

  const handleCancelEdit = () => {
    if (window.confirm("The changes you made will not be saved. Are you sure?")) {
      setEditId(null);
      setEditedSupplier(null);
    }
  };

  const handleSaveEdit = async () => {
    if (window.confirm("Are you sure you want to save changes? This action cannot be undone.")) {
      const response = await fetch(`https://your-api.com/suppliers/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedSupplier),
      });

      if (response.ok) {
        alert("Supplier updated successfully!");
        // setSuppliers((prev) => prev.map((s) => (s.id === editId ? { ...editedSupplier } : s)));
        setEditId(null);
        setEditedSupplier(null);
      } else {
        alert("Error updating supplier.");
      }
    }
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (deleteId !== null) {
      const response = await fetch(`https://your-api.com/suppliers/${deleteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Supplier and all invoices have been deleted.");
        setSuppliers((prev) => prev.filter((s) => s.id !== deleteId));
        setShowDeleteModal(false);
      } else {
        alert("Error deleting supplier.");
      }
    }
  };

  return (
    <div>
      <h2>Suppliers Table</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Phone</th>
            <th>Registered Business?</th>
            <th>Bank Account</th>
            <th>Total Debt</th>
            <th>Actions</th> {/* Column for icons */}
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>
                {editId === supplier.id ? (
                  <input
                    type="text"
                    value={editedSupplier?.name || ""}
                    onChange={(e) =>
                      setEditedSupplier((prev) => ({ ...prev!, name: e.target.value }))
                    }
                  />
                ) : (
                  supplier.name
                )}
              </td>
              <td>{supplier.idNumber}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.registeredBusiness ? "Yes" : "No"}</td>
              <td>{supplier.accountNumber}</td>
              <td>{supplier.totalDebt}</td>
              <td>
                {editId === supplier.id ? (
                  <>
                    <button onClick={handleSaveEdit}>✔</button>
                    <button onClick={handleCancelEdit}>❌</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(supplier)}>✏️</button>
                    <button onClick={() => handleDelete(supplier.id)}>🗑️</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure?</h3>
            <p>Deleting this supplier will also delete all related invoices.</p>
            <button style={{ backgroundColor: "red", color: "white" }} onClick={confirmDelete}>
              Yes, Delete
            </button>
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

