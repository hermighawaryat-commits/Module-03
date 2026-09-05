import { useState } from "react";
import PropTypes from "prop-types";
import "./DeliveryForm.css";

function DeliveryForm({ totalAmount }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const isPhoneValid = /^09\d{8}$/.test(form.phone);

  const isFormValid =
    form.name.trim() !== "" &&
    isPhoneValid &&
    form.area.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    alert("Delivery order submitted!");

    // Clear the form after submission
    setForm({
      name: "",
      phone: "",
      area: "",
    });
  };

  return (
    <section className="delivery-form">

      <h2>TeleBirr Delivery</h2>

      <p>
        Order Total: {totalAmount} ETB
      </p>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">
          Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label htmlFor="phone">
          TeleBirr Phone
        </label>

        <input
          id="phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09XXXXXXXX"
        />

        {!isPhoneValid && form.phone !== "" && (
          <p className="error">
            Enter a valid TeleBirr number.
          </p>
        )}

        <label htmlFor="area">
          Area
        </label>

        <input
          id="area"
          type="text"
          name="area"
          value={form.area}
          onChange={handleChange}
          placeholder="Enter delivery area"
        />

        <button
          type="submit"
          disabled={!isFormValid}
        >
          Place Delivery Order
        </button>

      </form>

    </section>
  );
}

DeliveryForm.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

export default DeliveryForm;