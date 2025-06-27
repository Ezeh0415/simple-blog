import React, { createContext, useContext, useEffect, useState } from 'react';

// If you have initial posts in another file, import them here
import { posts as initialPosts } from '../UserBlog';

const PostsContext = createContext();
const categoryContext = createContext();

export const PostsProvider = ({ children }) => {
 const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });
  // Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  
  
  return (
    <PostsContext.Provider value={{ posts, setPosts}}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
