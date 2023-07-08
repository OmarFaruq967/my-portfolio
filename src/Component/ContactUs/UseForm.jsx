import { useEffect, useState } from "react";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const UseForm = (initialState, submitCallback) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [done, setDone]= useState(false)
  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleReset = () => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  };

  const validate = (values) => {
    // Add your validation logic here
    // Example: check if fields are not empty
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitCallback(values);
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, submitCallback, values]);

  return {
    done,
    setDone,
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
  };
};

export default UseForm;
