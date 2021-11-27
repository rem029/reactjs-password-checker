import axios from 'axios';

export const password = {
  get: async (passwordValue) => {
    let returnResponse = { success: false, data: {} };

    if (!passwordValue.length > 0) return { success: false, data: '' };

    try {
      if (!process.env.REACT_APP_PASSWORD_API_URL)
        throw new Error('Internal error. URL not found.');

      const response = await axios.post(
        process.env.REACT_APP_PASSWORD_API_URL,
        {
          password: passwordValue,
        }
      );

      returnResponse.success = true;
      returnResponse.data = { ...response.data };
      return { ...returnResponse };
    } catch (error) {
      returnResponse.success = false;
      returnResponse.data = { ...error.response?.data } || error.message;
      return { ...returnResponse };
    }
  },
};
