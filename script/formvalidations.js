//Qardan Form Edit Details validation
const qardanEditForm = document.getElementById("qardanEditDetails");
if(qardanEditForm) {
  document.querySelector(".btn-success").addEventListener("click", function(e) {
    console.log('hiii');
    e.preventDefault();
    let valid = true;

    // Get values
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let amount = document.getElementById("amount").value.trim();
    let tenure = document.getElementById("tenure").value.trim();
    let office = document.getElementById("office").value.trim();
    let address = document.getElementById("address").value.trim();

    // Reset errors
    document.querySelectorAll(".text-danger[id]").forEach(el => el.textContent = "");

    // Mobile Validation
    let mobileRegex =  /^\+?\d{10,15}$/;
    if (mobile === "") {
      document.getElementById("mobileError").textContent = "Mobile is required";
      valid = false;
    } else if (!mobileRegex.test(mobile)) {
      document.getElementById("mobileError").textContent = "Enter valid mobile (10-15 digits)";
      valid = false;
    }

    // Email Validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Enter valid email";
      valid = false;
    }

    // Amount Validation
    if (amount === "") {
      document.getElementById("amountError").textContent = "Amount is required";
      valid = false;
    } else if (parseInt(amount) > 300000) {
      document.getElementById("amountError").textContent = "Amount must not exceed 300000";
      valid = false;
    }

    // Tenure Validation
    if (tenure === "") {
      document.getElementById("tenureError").textContent = "Tenure is required";
      valid = false;
    } else if (parseInt(tenure) > 6) {
      document.getElementById("tenureError").textContent = "Tenure must not exceed 6";
      valid = false;
    }

    // Office Validation
    if (office === "") {
      document.getElementById("officeError").textContent = "Office is required";
      valid = false;
    }

    // Address Validation
    if (address === "") {
      document.getElementById("addressError").textContent = "Address is required";
      valid = false;
    }

    // --- Disclaimer Validation ---
    const disclaimerCheck = document.getElementById("disclaimerCheck");
    const disclaimerError = document.getElementById("disclaimerError");

    if (!disclaimerCheck.checked) {
        disclaimerError.textContent = "You must accept the disclaimer before continuing.";
        valid = false;
    } else {
        disclaimerError.textContent = "";
    }

    if (valid) {
      alert("Form submitted successfully!");
      // Here you can send data via AJAX
    }
  });
}

//Qardan Form Edit Details validation
const qardanForm = document.getElementById("qardanDetails");
if(qardanForm) {
  document.querySelector(".btn-qardan-apply").addEventListener("click", function(e) {
    e.preventDefault();
    let valid = true;
    console.log('clicked up')
    // Get values
    let fhid = document.getElementById("fhid").value.trim();
    let amount = document.getElementById("amount").value.trim();
    let tenure = document.getElementById("tenure").value.trim();
    let address = document.getElementById("address").value.trim();

    // Reset errors
    document.querySelectorAll(".text-danger[id]").forEach(el => el.textContent = "");

    // Amount Validation
    if (fhid === "") {
      document.getElementById("fhidError").textContent = "fhid is required";
      valid = false;
    }

    // Amount Validation
    if (amount === "") {
      document.getElementById("amountError").textContent = "Amount is required";
      valid = false;
    } else if (parseInt(amount) > 300000) {
      document.getElementById("amountError").textContent = "Amount must not exceed 300000";
      valid = false;
    }

    // Tenure Validation
    if (tenure === "") {
      document.getElementById("tenureError").textContent = "Tenure is required";
      valid = false;
    } else if (parseInt(tenure) > 6) {
      document.getElementById("tenureError").textContent = "Tenure must not exceed 6";
      valid = false;
    }

    // Address Validation
    if (address === "") {
      document.getElementById("addressError").textContent = "Address is required";
      valid = false;
    }

    // --- AutoDebit Validation ---
    const autoDebitCheck = document.getElementById("autoDebitCheck");
    const autoDebitError = document.getElementById("autoDebitError");

    if (!autoDebitCheck.checked) {
        autoDebitError.textContent = "You must accept the AutoDebit before continuing.";
        valid = false;
    } else {
        autoDebitError.textContent = "";
    }

    // --- Disclaimer Validation ---
    const disclaimerCheck = document.getElementById("disclaimerCheck");
    const disclaimerError = document.getElementById("disclaimerError");

    if (!disclaimerCheck.checked) {
        disclaimerError.textContent = "You must accept the Disclaimer before continuing.";
        valid = false;
    } else {
        disclaimerError.textContent = "";
    }

    if (valid) {
      // Show Bootstrap success modal
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();

      // Optionally reset form
      qardanForm.reset();
    }
  });
}


// document.querySelector(".add-its-fhno-btn").addEventListener("click", function(e) {
//   e.preventDefault();
//   // validate inner block fields
//   let itsid = document.getElementById("itsid").value.trim();
//   let tenureAdd = document.getElementById("tenure-add").value.trim();
//   let amountAdd = document.getElementById("amount-add").value.trim();
//   let relationshipAdd = document.getElementById("relationship-add").value.trim();

//   if(itsid === "") {
//     document.getElementById("itsidError").textContent = "ITS ID is required";
//     valid = false;
//   } else if(parseInt(itsid) > 8) {
//     document.getElementById("itsidError").textContent = "ITS ID is incorrect";
//     valid = false;
//   }

//   if (tenureAdd === "") {
//     document.getElementById("tenureAddError").textContent = "Tenure is required";
//     valid = false;
//   } else if (parseInt(tenure) > 6) {
//     document.getElementById("tenureAddError").textContent = "Tenure must not exceed 6";
//     valid = false;
//   }

//   if (amountAdd === "") {
//     document.getElementById("amountAddError").textContent = "Amount is required";
//     valid = false;
//   } else if (parseInt(amountAdd) > 300000) {
//     document.getElementById("amounAddtError").textContent = "Amount must not exceed 300000";
//     valid = false;
//   }

//   if (relationshipAdd === "") {
//     document.getElementById("relationshipAddError").textContent = "Relationship is required";
//     valid = false;
//   }

// });

// document.querySelector(".add-its-fhno-btn").addEventListener("click", function(e) {
//   e.preventDefault();

//   let valid = true;

//   // get values
//   let itsid = document.getElementById("itsid").value.trim();
//   let tenureAdd = document.getElementById("tenure-add").value.trim();
//   let amountAdd = document.getElementById("amount-add").value.trim();
//   let relationshipAdd = document.getElementById("relationship-add").value.trim();

//   // reset errors
//   document.getElementById("itsidError").textContent = "";
//   document.getElementById("tenureAddError").textContent = "";
//   document.getElementById("amountAddError").textContent = "";
//   document.getElementById("relationshipAddError").textContent = "";

//   // validate
//   if (itsid === "") {
//     document.getElementById("itsidError").textContent = "ITS ID is required";
//     valid = false;
//   } else if (itsid.length !== 8) {   // ✅ assuming ITS ID should be exactly 8 digits
//     document.getElementById("itsidError").textContent = "ITS ID must be 8 digits";
//     valid = false;
//   }

//   if (tenureAdd === "") {
//     document.getElementById("tenureAddError").textContent = "Tenure is required";
//     valid = false;
//   } else if (parseInt(tenureAdd) > 6) {
//     document.getElementById("tenureAddError").textContent = "Tenure must not exceed 6";
//     valid = false;
//   }

//   if (amountAdd === "") {
//     document.getElementById("amountAddError").textContent = "Amount is required";
//     valid = false;
//   } else if (parseInt(amountAdd) > 300000) {
//     document.getElementById("amountAddError").textContent = "Amount must not exceed 300000";
//     valid = false;
//   }

//   if (relationshipAdd === "") {
//     document.getElementById("relationshipAddError").textContent = "Relationship is required";
//     valid = false;
//   }

//   // if valid -> insert row
//   if (valid) {
//     let tableWrapper = document.querySelector(".table-responsive");

//     // check if table exists
//     let table = document.querySelector(".booking-details-table");
//     if (!table) {
//       tableWrapper.innerHTML = `
//         <table class="table booking-details-table add-its-fhno align-middle">
//           <thead>
//             <tr class="heading">
//               <th>SR</th>
//               <th>ITS ID</th>
//               <th>Tenure</th>
//               <th>Amount</th>
//               <th>Relationship</th>
//             </tr>
//           </thead>
//           <tbody></tbody>
//         </table>
//       `;
//       table = document.querySelector(".booking-details-table");
//     }

//     let tbody = table.querySelector("tbody");

//     // new SR number = existing rows + 1
//     let sr = tbody.querySelectorAll("tr").length + 1;

//     // insert row
//     let newRow = document.createElement("tr");
//     newRow.innerHTML = `
//       <td>${sr}</td>
//       <td>${itsid}</td>
//       <td>${tenureAdd}</td>
//       <td>${amountAdd}</td>
//       <td>${relationshipAdd}</td>
//       <td><button class="btn btn-sm btn-danger delete-row">Delete</button></td>
//     `;
//     // tbody.insertAdjacentHTML("beforeend", newRow);
//     tbody.appendChild(newRow);

//     // add delete event
//     newRow.querySelector(".delete-row").addEventListener("click", function () {
//       newRow.remove();

//       // reassign SR numbers
//       [...tbody.querySelectorAll("tr")].forEach((row, index) => {
//         row.querySelector("td").textContent = index + 1;
//       });

//       // if no rows left, remove table
//       if (tbody.querySelectorAll("tr").length === 0) {
//         table.remove();
//       }
//     });

//     // clear form fields
//     document.getElementById("itsid").value = "";
//     document.getElementById("tenure-add").value = "";
//     document.getElementById("amount-add").value = "";
//     document.getElementById("relationship-add").value = "";
//   }
// });

let rowToDelete = null;   // store row to be deleted
let rowToEdit = null;     // store row being edited
// helper function: check row count
function rowCount() {
  let table = document.querySelector(".booking-details-table");
  return table ? table.querySelectorAll("tbody tr").length : 0;
}

// handle add new row
document.querySelector(".add-its-fhno-btn").addEventListener("click", function(e) {
  e.preventDefault();

  // check row limit before validation
  if (rowCount() >= 10) {
    let rowLimitModal = new bootstrap.Modal(document.getElementById("rowLimitModal"));
    rowLimitModal.show();
    return;
  }

  let valid = true;

  let itsid = document.getElementById("itsid").value.trim();
  let tenureAdd = document.getElementById("tenure-add").value.trim();
  let amountAdd = document.getElementById("amount-add").value.trim();
  let relationshipAdd = document.getElementById("relationship-add").value.trim();

  // reset errors
  document.getElementById("itsidError").textContent = "";
  document.getElementById("tenureAddError").textContent = "";
  document.getElementById("amountAddError").textContent = "";
  document.getElementById("relationshipAddError").textContent = "";

  // validation
  if (itsid === "" || itsid.length !== 8) {
    document.getElementById("itsidError").textContent = "ITS ID must be 8 digits";
    valid = false;
  }
  if (tenureAdd === "" || parseInt(tenureAdd) > 6) {
    document.getElementById("tenureAddError").textContent = "Tenure must be 1-6";
    valid = false;
  }
  if (amountAdd === "" || parseInt(amountAdd) > 300000) {
    document.getElementById("amountAddError").textContent = "Amount must not exceed 300000";
    valid = false;
  }
  if (relationshipAdd === "") {
    document.getElementById("relationshipAddError").textContent = "Relationship is required";
    valid = false;
  }

  if (valid) {
    let tableWrapper = document.querySelector(".table-responsive");
    let table = document.querySelector(".booking-details-table");

    // create table if not exists
    if (!table) {
      tableWrapper.innerHTML = `
        <table class="table booking-details-table add-its-fhno align-middle">
          <thead>
            <tr class="heading">
              <th>SR</th>
              <th>ITS ID</th>
              <th>Tenure</th>
              <th>Amount</th>
              <th>Relationship</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      `;
      table = document.querySelector(".booking-details-table");
    }

    let tbody = table.querySelector("tbody");
    let sr = tbody.querySelectorAll("tr").length + 1;

    let newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${sr}</td>
      <td>${itsid}</td>
      <td>${tenureAdd}</td>
      <td>${amountAdd}</td>
      <td>${relationshipAdd}</td>
      <td>
        <button type="button" class="btn btn-sm btn-primary btn-primary-edit edit-row">Edit</button>
        <button type="button" class="btn btn-sm btn-danger btn-danger-delete delete-row">Delete</button>
      </td>
    `;
    tbody.appendChild(newRow);

    // reset form
    document.getElementById("itsid").value = "";
    document.getElementById("tenure-add").value = "";
    document.getElementById("amount-add").value = "";
    document.getElementById("relationship-add").value = "";
  }
});


// Event delegation for Edit/Delete (works for both new & existing rows)
document.addEventListener("click", function(e) {
  // DELETE
  if (e.target.classList.contains("delete-row")) {
    rowToDelete = e.target.closest("tr");
    let deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
    deleteModal.show();
  }

  // EDIT
  if (e.target.classList.contains("edit-row")) {
    rowToEdit = e.target.closest("tr");
    document.getElementById("editItsid").value = rowToEdit.cells[1].textContent;
    document.getElementById("editTenure").value = rowToEdit.cells[2].textContent;
    document.getElementById("editAmount").value = rowToEdit.cells[3].textContent;
    document.getElementById("editRelationship").value = rowToEdit.cells[4].textContent;

    let editModal = new bootstrap.Modal(document.getElementById("editModal"));
    editModal.show();
  }
});

// confirm delete
document.getElementById("confirmDelete").addEventListener("click", function() {
  if (rowToDelete) {
    let tbody = rowToDelete.parentNode;
    rowToDelete.remove();

    // re-index SR
    [...tbody.querySelectorAll("tr")].forEach((row, i) => {
      row.cells[0].textContent = i + 1;
    });

    if (tbody.querySelectorAll("tr").length === 0) {
      document.querySelector(".booking-details-table").remove();
    }
    rowToDelete = null;
    bootstrap.Modal.getInstance(document.getElementById("deleteModal")).hide();
  }
});

// save edit with validation
document.getElementById("saveEdit").addEventListener("click", function() {
  if (rowToEdit) {
    let itsid = document.getElementById("editItsid").value.trim();
    let tenure = document.getElementById("editTenure").value.trim();
    let amount = document.getElementById("editAmount").value.trim();
    let relationship = document.getElementById("editRelationship").value.trim();

    // reset previous invalid styles
    document.querySelectorAll("#editForm input, #editForm select").forEach(el => {
      el.classList.remove("is-invalid");
    });

    let valid = true;

    // ITS ID
    if (itsid === "" || itsid.length !== 8) {
      document.getElementById("editItsid").classList.add("is-invalid");
      valid = false;
    }

    // Tenure
    if (tenure === "" || parseInt(tenure) > 6) {
      document.getElementById("editTenure").classList.add("is-invalid");
      valid = false;
    }

    // Amount
    if (amount === "" || parseInt(amount) > 300000) {
      document.getElementById("editAmount").classList.add("is-invalid");
      valid = false;
    }

    // Relationship
    if (relationship === "") {
      document.getElementById("editRelationship").classList.add("is-invalid");
      valid = false;
    }

    if (!valid) return; // stop if validation fails

    // update row values
    rowToEdit.cells[1].textContent = itsid;
    rowToEdit.cells[2].textContent = tenure;
    rowToEdit.cells[3].textContent = amount;
    rowToEdit.cells[4].textContent = relationship;

    rowToEdit = null;

    // close modal
    bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
  }
});