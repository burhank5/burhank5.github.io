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
  qardanForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

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

// const fhno_form = document.getElementById("add-its-fnho-form");
// if(fhno_form) {
//   document.querySelector(".btn-qardan-save").addEventListener("click", function(e) {
//     console.log('clicked')
//     e.preventDefault();

//     let valid = true;

//     // Get values
//     let itsid = document.getElementById("itsid").value.trim();
//     let tenure = document.getElementById("tenure").value.trim();
//     let amount = document.getElementById("amount").value.trim();
//     let relationship = document.getElementById("relationship").value.trim();

//     if (itsid === "") {
//       document.getElementById("itsidError").textContent = "ITS ID is required";
//       valid = false;
//     } else if(parseInt(itsid) > 8) {
//       document.getElementById("itsidError").textContent = "ITS ID is incorrect";
//       valid = false;
//     }

//     if (tenure === "") {
//       document.getElementById("tenureError").textContent = "Tenure is required";
//       valid = false;
//     }

//     if (amount === "") {
//       document.getElementById("amountError").textContent = "Amount is required";
//       valid = false;
//     }

//     if (relationship === "") {
//       document.getElementById("relationshipError").textContent = "Relationship is required";
//       valid = false;
//     }

//     if (valid) {
//       // Show Bootstrap success modal
//       const successModal = new bootstrap.Modal(document.getElementById('successModal'));
//       successModal.show();

//       // Optionally reset form
//       fhno_form.reset();
//     }


//   })
// }

document.querySelector(".add-its-fhno-btn").addEventListener("click", function() {
  console.log('clicked')
  // validate inner block fields
  let itsid = document.getElementById("itsid").value.trim();
  let tenure2 = document.getElementById("tenure2").value.trim();
  let amount2 = document.getElementById("amount2").value.trim();

  if (itsid === "" || tenure2 === "" || amount2 === "") {
    alert("Please fill all ITS block fields");
  } else {
    alert("ITS block saved successfully!");
  }
});