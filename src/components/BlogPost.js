import React from 'react';
import { Button, Card, PostTitle, AuthorDate } from '../styles';

const BlogPost = ({ post, onClose }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PostTitle>{post.title}</PostTitle>
      <AuthorDate>By {post.author} on {new Date(post.date).toLocaleDateString()}</AuthorDate>
      <div>{post.content}</div>
      <Button whileHover={{ scale: 1.05 }} onClick={onClose}>Close</Button>
    </Card>
  );
};

export default BlogPost;
