import axios from "axios";

const getDummyApiData = async (url, transformFn) => {
  const baseURL = 'https://dummyapi.io/data/api';
  const appID = '5f614dc6d742edcda2afcb38';
  try {
    const resp = await axios.get(`${baseURL}/${url}`, {
      headers: { "app-id": appID },
    });
    const { data } = resp;

    if (transformFn) {
      return transformFn(data.data);
    }

    return data.data;
  } catch (e) {
    throw e;
  }
};

export default getDummyApiData;