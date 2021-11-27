import { useEffect, useState } from 'react';
import { password } from '../api/';

const initialResponse = {
  score: -1,
  guessTimeSeconds: 0,
  guessTimeString: '',
  suggestions: [],
  warning: '',
};

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue || '');
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState(initialResponse);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onValueChange = async (value = '') => {
    setValue(value);
  };

  const toggleShowPassword = () => [
    setShowPassword((currentValue) => !currentValue),
  ];

  useEffect(() => {
    const hasValue = value.length > 0;

    const getResponse = async () => {
      setLoading(true);
      const apiResponse = await password.get(value);

      setLoading(false);
      if (apiResponse.success)
        return setResponse((_) => ({ ...apiResponse.data }));

      setResponse((_) => ({ ...initialResponse }));
      setError(apiResponse.data);
    };

    const timeOutId = setTimeout(() => {
      setError('');
      if (!hasValue) return setResponse((_) => ({ ...initialResponse }));
      getResponse();
    }, 800);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [value]);

  return {
    value,
    onValueChange,
    toggleShowPassword,
    showPassword,
    response,
    error,
    loading,
  };
};

export default useInput;
