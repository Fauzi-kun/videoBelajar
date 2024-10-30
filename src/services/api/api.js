import axios from "axios";

const link = import.meta.env.VITE_API_URL;

export const url = axios.create({
  baseURL: link,
});

export const postData = async (newData) => {
  try {
    const response = await url.post(link, newData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
