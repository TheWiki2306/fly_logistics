/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { pricingSchema } from '../booking/components/schema';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    weight: '',
    origin: '',
    destination: '',
    cargoType: '',
    priorityLevel: '',
  });
  const [errors, setErrors] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [pricing, setPricing] = useState(null);
  const [distance, setDistance] = useState(null);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await pricingSchema.validate(formData, { abortEarly: false }); 
      setErrors({}); 

      const response = await fetch(' http://localhost:8080/api/calculateprice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setModalVisible(true)
        setPricing(data.price);
        setDistance(data.distance)
      } else {
        console.error(data.error);
      }
    } catch (validationErrors) {
        if (validationErrors.inner && Array.isArray(validationErrors.inner)) {
            const newErrors = validationErrors.inner.reduce((acc, error) => {
              acc[error.path] = error.message;
              return acc;
            }, {});
            setErrors(newErrors);
          }
          
    }
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormData, errors, setErrors, handleInputChange, handleSubmit, isModalVisible, setModalVisible, pricing, distance}}
    >
      {children}
    </FormContext.Provider>
  );
};


FormProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };
  
export const useFormContext = () => useContext(FormContext);

