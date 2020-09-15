import React, { useState } from "react";
import PostStyles from "./PostStyles";
import TagInput from "./TagInput";
import PostsGrid from "./PostsGrid";

const Post = () => {
  const classes = PostStyles();
  const [tag, setTag] = useState('');

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <h1 className={classes.typo} >Posts by Tags SearchApp</h1>
          <TagInput onTagSelected={setTag} />
          <hr/>
          <PostsGrid tag={tag} />
        </div>
      </main>
    </div>
  );
};

export default Post;