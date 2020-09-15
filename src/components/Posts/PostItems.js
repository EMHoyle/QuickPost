import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PostStyles from "./PostStyles";
import { Box, Chip, Divider, Link } from "@material-ui/core";

const PostItems = ({
  avatar,
  firstName,
  lastName,
  email,
  tags,
  image,
  text,
  url,
  likes,
  date,
}) => {
  const classes = PostStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="user" className={classes.avatar} src={avatar} />
        }
        title={`${firstName} ${lastName}`}
        subheader={email}
      />
      <Divider />
      <CardMedia className={classes.media} image={image} />
      <Box>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            className={classes.chip}
            color="secondary"
            size="small"
            label={tag}
          />
        ))}
      </Box>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
        {url && <Link href="#">{url}</Link>}
        <Divider />
        <Box>
          <Box className={classes.like}><FavoriteIcon color="primary" fontSize="small" />{likes} likes</Box>
          <Box className={classes.date}>{date}</Box>
        </Box>
        <Divider />
      </CardContent>
    </Card>
  );
};

export default PostItems;