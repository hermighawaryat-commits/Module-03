import { useState } from "react";
import PropTypes from "prop-types";
import "./DeliveryForm.css";

function DeliveryForm({ totalAmount }) {
  // Form state: one object for all three inputs
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  // Update the input that the user is typing in
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check if the TeleBirr phone number is valid
  const isPhoneValid = /^09\d{8}$/.test(form.phone);

  // Check if all required fields are valid
  const isFormValid =
    form.name.trim() !== "" &&
    isPhoneValid &&
    form.area.trim() !== "";

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Do nothing if the form is invalid
    if (!isFormValid) {
      return;
    }

    // Show success message
    alert("Delivery order submitted!");

    // Clear the form after successful submission
    setForm({
      name: "",
      phone: "",
      area: "",
    });
  };

  return (
    <section className="delivery-form">
      <h2>TeleBirr Delivery</h2>

      <p>Order Total: {totalAmount} ETB</p>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Name</label>

        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {/* TeleBirr phone */}
        <label htmlFor="phone">TeleBirr Phone</label>

        <input
          id="phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09XXXXXXXX"
        />

        {/* Show error only when the user entered an invalid number */}
        {!isPhoneValid && form.phone !== "" && (
          <p className="error">
            Enter a valid TeleBirr number.
          </p>
        )}

        {/* Area */}
        <label htmlFor="area">Area</label>

        <input
          id="area"
          type="text"
          name="area"
          value={form.area}
          onChange={handleChange}
          placeholder="Enter delivery area"
        />

        {/* Disabled until the entire form is valid */}
        <button
          type="submit"
          disabled={!isFormValid}
        >
          Delivery Order
        </button>
      </form>
    </section>
  );
}

DeliveryForm.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

export default DeliveryForm;