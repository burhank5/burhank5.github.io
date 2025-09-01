//Qardan Form Edit Details validation
const qardanEditForm = document.getElementById("qardanEditDetails");
if(qardanEditForm) {
  qardanEditForm.addEventListener("submit", function(e) {
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