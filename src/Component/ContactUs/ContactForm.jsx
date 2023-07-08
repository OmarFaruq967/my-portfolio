import React, { useEffect, useRef } from "react";
import UseForm from "./UseForm";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

 
  const { values, errors, handleChange, handleSubmit, handleReset, done, setDone } =
  UseForm(initialState, submitForm);

  function submitForm() {
    setDone(true);
    emailjs
      .sendForm('service_n2mx2mb', 'template_ghn5bsm', form.current, 'hkIXCJOtvOXpr-Nyi')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const form = useRef();


  useEffect(() => {
    if (done) {
      handleReset(); // Call handleReset after "done" is set to true
    }
  }, [done]);

 
  return (
    <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="name"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={`appearance-none w-full px-3 py-2 rounded-lg leading-tight border focus:outline-none focus:shadow-outline ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={`appearance-none w-full px-3 py-2 rounded-lg leading-tight border focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          className={`appearance-none w-full px-3 py-2 rounded-lg leading-tight border focus:outline-none focus:shadow-outline ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </div>

      {done && (
        <div className="center-message mt-2 font-semibold flex justify-center" style={{ color: "green" }}>
          Your message sent successfully
        </div>
      )}
        
      
    </form>
  );
};

export default ContactForm;
