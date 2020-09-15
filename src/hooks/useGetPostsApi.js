import { useState, useEffect } from "react";
import getDummyApiData from "../helpers/getDummyApiData";

const useGetPostsApi = (tag) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const url = tag ? `tag/${tag}/post` : `post`;
    setLoading(true);
    getDummyApiData(url, apiToFETransform)
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("oops something wrong happened!");
        console.error(e)
      });
  }, [tag]);

  return { data, loading, error };
};

const apiToFETransform = (posts) => {
  return posts.map((post) => ({
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
  }));
};

export default useGetPostsApi;