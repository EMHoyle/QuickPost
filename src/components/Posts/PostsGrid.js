import React from "react";
import TagInput from "./TagInput";
import useGetPostsApi from "../../hooks/useGetPostsApi";
import PostItems from "./PostItems";
import PropTypes from "prop-types";
import { Divider } from "@material-ui/core";
import PostStyles from "./PostStyles";

const PostsGrid = ({ tag }) => {
  const classes = PostStyles();
  const { data: posts, loading, error } = useGetPostsApi(tag);
  return (
    <>
      <Divider/>
      {loading && <p>Loading...</p>}
      {!loading && error && <h3>{error}</h3>}
      {!loading && (
        <div className={classes.postGrid}>
          {posts.map((post, index) => (
            <PostItems key={index} {...post} />
          ))}
        </div>
      )}
    </>
  );
};

TagInput.propTypes = {
  tag: PropTypes.string,
};

export default PostsGrid;