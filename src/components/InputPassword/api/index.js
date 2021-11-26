import axios from 'axios';

export const password = {
  get: async (passwordValue) => {
    if (!passwordValue.length > 0) return null;
    if (!process.env.REACT_APP_PASSWORD_API_URL) return null;

    try {
      const response = await axios.post(process.env.REACT_APP_PASSWORD_API_URL, {
        password: passwordValue,
      });

      return response.data;
    } catch (error) {
      return error;
    }
  },
};
