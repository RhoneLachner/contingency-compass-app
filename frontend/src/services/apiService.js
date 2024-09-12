// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/';

// export const fetchHelloWorld = async () => {
//     try {
//         const response = await axios.get(`${API_URL}hello/`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching data from API:', error);
//         throw error;
//     }
// };
import axios from 'axios';

const API_BASE_URL = 'https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries';

export const fetchDisasterData = async (location, proximity) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        state: location, // You can modify this to include latitude and longitude if needed
        limit: 100, // Limit the number of results
        skip: 0
      }
    });
    return response.data.DisasterDeclarationsSummaries; // Adjust based on the dataset you choose
  } catch (error) {
    console.error("Error fetching FEMA disaster data:", error);
    return [];
  }
};
