import axios from "axios";

const apiToFETransform = (post) => {
  return {
    id: post.owner.id,
    firstName: post.owner.firstName,
    lastName: post.owner.lastName,
    email: post.owner.email,
    avatar: post.owner.picture,
    text: post.text,
    image: post.image,
    likes: post.likes,
    url: post.link,
    tags: post.tags,
    date: post.publishDate,
  };
};

const getPosts = async (tag) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const appID = process.env.REACT_APP_DUMMYAPI_KEY;
  const url = tag ? `${baseURL}/tag/${tag}/post` : `${baseURL}/post`;
  const resp = await axios.get(url, {
    headers: { "app-id": appID },
  });
  const { data } = resp;

  return data.data.map(apiToFETransform);
};

export default getPosts;