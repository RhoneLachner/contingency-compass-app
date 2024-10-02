import axios from 'axios';

const API_BASE_URL = 'https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries';

export const fetchDisasterData = async (location, proximity) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        state: location, 
        limit: 100, // Limit the number of results
        skip: 0
      }
    });
    return response.data.DisasterDeclarationsSummaries;
  } catch (error) {
    console.error("Error fetching FEMA disaster data:", error);
    return [];
  }
};
