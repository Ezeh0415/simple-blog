// import React, { createContext, useContext, useState } from 'react';

// // If you have initial posts in another file, import them here
// import { categories as initialCategories } from '../UserBlog';

// const categoryContext = createContext();

// export const PostsProvider = ({ children }) => {
//   const [categories, setCategories] = useState(initialCategories || []);
  
//   return (
//     <PostsContext.Provider value={{ categories, setCategories}}>
//       {children}
//     </PostsContext.Provider>
//   );
// };

// export const useCategories = () => useContext(categoryContext);