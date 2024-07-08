import React, { useState, useEffect } from 'react';
import { getPosts, savePosts } from './utils/storage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import { Container, Title } from './styles';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleSavePost = (post) => {
    const updatedPosts = editingPost
      ? posts.map(p => (p.id === post.id ? post : p))
      : [...posts, { ...post, id: Date.now() }];
    setPosts(updatedPosts);
    savePosts(updatedPosts);
    setEditingPost(null);
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  return (
    <Container>
      <Title>Blogging Platform</Title>
      <BlogList
        posts={posts}
        onPostSelect={setSelectedPost}
        onPostEdit={setEditingPost}
        onPostDelete={handleDeletePost}
      />
      {selectedPost ? (
        <BlogPost post={selectedPost} onClose={() => setSelectedPost(null)} />
      ) : (
        <BlogForm post={editingPost} onSave={handleSavePost} />
      )}
    </Container>
  );
}

export default App;
