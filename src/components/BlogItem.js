import React from 'react';
import { Button, Card, PostTitle, Summary, AuthorDate } from '../styles';

const BlogItem = ({ post, onSelect, onEdit, onDelete }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PostTitle>{post.title}</PostTitle>
      <Summary>{post.summary}</Summary>
      <AuthorDate>By {post.author} on {new Date(post.date).toLocaleDateString()}</AuthorDate>
      <Button whileHover={{ scale: 1.05 }} onClick={() => onSelect(post)}>View</Button>
      <Button whileHover={{ scale: 1.05 }} onClick={() => onEdit(post)}>Edit</Button>
      <Button whileHover={{ scale: 1.05 }} onClick={() => onDelete(post.id)}>Delete</Button>
    </Card>
  );
};

export default BlogItem;
