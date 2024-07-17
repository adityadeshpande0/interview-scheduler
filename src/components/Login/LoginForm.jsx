import React, { useCallback } from 'react';
import inputFieldValidation from '../../utils/functions/inputFieldValidation';
import useFormValidation from '../../utils/hooks/useFormValidation';
const initialFormState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const {
    formInput,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialFormState, inputFieldValidation);

  const submitForm = useCallback(() => {
    // Perform form submission
    console.log('Form submitted successfully!', formInput);
  }, [formInput]);

  return (
    <form onSubmit={(e) => handleSubmit(e, submitForm)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formInput.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
