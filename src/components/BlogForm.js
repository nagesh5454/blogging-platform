import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Textarea } from '../styles';

const BlogForm = ({ post, onSave }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setAuthor(post.author);
      setContent(post.content);
      setDate(post.date);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, author, content, date: date || new Date().toISOString(), id: post ? post.id : null });
    setTitle('');
    setAuthor('');
    setContent('');
    setDate('');
  };

  return (
    <Form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <div>
        <label>Title</label>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Author</label>
        <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div>
        <label>Content</label>
        <Textarea value={content} onChange={(e) => setContent(e.target.value)} required></Textarea>
      </div>
      <Button whileHover={{ scale: 1.05 }} type="submit">Save</Button>
    </Form>
  );
};

export default BlogForm;
