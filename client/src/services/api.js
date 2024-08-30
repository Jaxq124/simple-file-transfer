import axios from 'axios';
const API_URL ="http://localhost:8000";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, data);
    console.log('Response:', response.data); // Log the response data
    return response.data; // Return the response data
  } catch(error) {
    console.error('Error while calling the API:', error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
}
