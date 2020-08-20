import { useState } from 'react'

export const useFormChange = () => {
    
  const [inputValue, setInputValue] = useState({
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  });

  const handleInputChange = ({target}) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    });
  }

  const reset = () => {
    setInputValue({
      name: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    });
  }

  return [inputValue, handleInputChange, reset];

}