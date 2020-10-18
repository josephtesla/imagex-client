import axios from "axios";

const API_URL = "https://imagex-finesse-api.herokuapp.com/api/v1";

export const getImages = async () => {
  try {
    const resp = await axios.get(`${API_URL}/images`);
    return resp.data;
  } catch (error) {
    return { error: error.message };
  }
};

export const postImage = async (formData) => {
  try {
    const resp = await axios({
      method: "POST",
      url: `${API_URL}/images`,
      data: formData,
    });
    return resp.data;
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteImage = async (imageId) => {
  try {
    const resp = await axios({
      method: "DELETE",
      url: `${API_URL}/images/${imageId}`,
    });
    return resp.data;
  } catch (error) {
    return { error: error.message };
  }
};
