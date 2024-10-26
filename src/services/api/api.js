import axios from "axios";

const link = import.meta.env.VITE_API_URL;

const url = axios.create({
  baseURL: link,
});

export const getData = async () => {
  try {
    const response = await url.get();
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postData = async (newData) => {
  try {
    const response = await url.post(link, newData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateData = async (updatedData) => {
  try {
    const response = await url.put(link, updatedData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
