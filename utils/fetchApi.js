import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "97fb9b681emsh9a6f8faa4167d04p103d1bjsn4a094f151842",
    },
  });
  return data;
};
