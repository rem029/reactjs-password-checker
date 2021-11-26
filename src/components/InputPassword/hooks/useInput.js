import { useState } from 'react';
import { password } from '../api/';

const initialResponse = {
  score: 0,
  guessTimeSeconds: 0,
  guessTimeString: '',
  suggestions: [],
  warning: '',
};

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue || '');
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState(initialResponse);

  const onValueChange = async (value = '') => {
    if (!value) setResponse({ ...initialResponse });
    setValue(value);
    const apiResponse = await password.get(value);
    if (apiResponse) setResponse({ ...apiResponse });
  };

  const toggleShowPassword = () => [setShowPassword((currentValue) => !currentValue)];

  return { value, onValueChange, toggleShowPassword, showPassword, response };
};

export default useInput;
