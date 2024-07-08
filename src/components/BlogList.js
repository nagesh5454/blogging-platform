import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ posts, onPostSelect, onPostEdit, onPostDelete }) => {
  return (
    <div>
      {posts.map(post => (
        <BlogItem key={post.id} post={post} onSelect={onPostSelect} onEdit={onPostEdit} onDelete={onPostDelete} />
      ))}
    </div>
  );
};

export default BlogList;
