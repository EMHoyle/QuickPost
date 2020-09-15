import React, { useState } from "react";
import PostStyles from "./PostStyles";
import TagInput from "./TagInput";
import PostsGrid from "./PostsGrid";
import MainDrawer from "../Main/Main";

const Post = () => {
  const classes = PostStyles();
  const [tag, setTag] = useState('');

  return (
        <div className={classes.container}>
          <MainDrawer/>
          <h1 className={classes.typo} >Posts by Tags SearchApp</h1>
          <TagInput onTagSelected={setTag} />
          <hr/>
          <PostsGrid tag={tag} />
        </div>
  );
};

export default Post;