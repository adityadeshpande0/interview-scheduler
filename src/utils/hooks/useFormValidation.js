import { useState, useCallback, useMemo } from "react";

const useFormValidation = (initialData, validate) => {
  const [formInput, setFormInput] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormInput((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }, []);

  const validateInputValues = useCallback(() => {
    const validationErrors = validate(formInput);
    setErrors(validationErrors);
  }, [formInput, validate]);

  const handleBlur = useCallback(() => {
    validateInputValues();
  }, [validateInputValues]);

  const handleSubmit = useCallback(
    (event, callBack) => {
      event.preventDefault();
      validateInputValues();
      if (Object.keys(validateInputValues).length === 0) {
        callBack();
      }
    },
    [errors, validateInputValues]
  );

  return {
    formInput,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useFormValidation;
