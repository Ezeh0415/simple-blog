import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from '../UserBlog';
import { usePosts } from '../contex-file/PostContext';

const categoryColorMap = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  // add more as needed
};

const BlogsDeatails = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { posts } = usePosts();

  useEffect(() => {
    const foundPost = posts.find(p => p.id === parseInt(id));
    if (foundPost) setPost(foundPost);
  }, [id, posts]);

  if (!post) {
    return <p className="text-center mt-10 text-gray-500">Loading blog details...</p>;
  }

  const { title, author, date, category, excerpt } = post;
  const categoryColor = categoryColorMap[
    categories.find(cat => cat.name === category)?.color
  ] || 'bg-gray-500';

  return (
    <div key={id} className="max-w-2xl mx-auto mt-10 mb-10 p-8 bg-gradient-to-br from-blue-50 via-white to-purple-100 rounded-2xl shadow-2xl border border-blue-100">
      <Link to="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-purple-700 font-semibold transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" stroke="#6366f1" />
        </svg>
        Back 
      </Link>

      <h2 className="text-3xl font-extrabold mb-4 text-purple-700">{title}</h2>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
          Author: <span className="text-blue-700 font-medium">{author}</span>
        </span>
        <span className="text-sm text-gray-500 bg-purple-100 px-3 py-1 rounded-full">
          Published: <span className="text-purple-700 font-medium">{new Date(date).toLocaleDateString()}</span>
        </span>
        <span className={`text-sm text-white px-3 py-1 rounded-full ${categoryColor}`}>
          {category}
        </span>
      </div>

      <p className="text-gray-700 leading-relaxed text-lg bg-white/80 p-4 rounded-lg shadow-inner">
        {excerpt}
      </p>
    </div>
  );
};

export default BlogsDeatails;
