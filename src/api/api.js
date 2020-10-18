import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";

export const getImages = async () => {
  const resp = await axios.get(`${API_URL}/images`);
  return resp.data;
};

export const postImage = async (formData) => {
  const resp = await axios({
    method: "POST",
    url: `${API_URL}/images`,
    data: formData,
  });
  return resp.data;
};

export const deleteImage = async (imageId) => {
  const resp = await axios({
    method: "DELETE",
    url: `${API_URL}/images/${imageId}`,
  });
  return resp.data;
};
