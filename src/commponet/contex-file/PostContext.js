import React, { createContext, useContext, useState } from 'react';

// If you have initial posts in another file, import them here
import { posts as initialPosts } from '../UserBlog';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts || []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
