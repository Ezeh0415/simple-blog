import React, { useState } from 'react';
import { usePosts } from '../contex-file/PostContext';
import { useNavigate } from 'react-router-dom';

const CreateBlogs = () => {
  const navigate = useNavigate();
  const {posts, setPosts} = usePosts()
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    author: '',
    category: '',
    categoryColor: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    // Basic validation: require title and author (you can expand this)
    if (!form.title.trim() || !form.author.trim()) {
      alert('Please enter at least title and author');
      return;
    }

    const newPost = {
      id: new Date(),
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      author: form.author.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      category: form.category.trim() || 'Uncategorized',
      categoryColor: form.categoryColor.trim() || 'gray',
    };

    setPosts([...posts, newPost]);

    // Reset form
    setForm({
      title: '',
      excerpt: '',
      author: '',
      category: '',
      categoryColor: '',
    });

    // or you can use a router to navigate
    navigate('/');

  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Blog Post</h2>

      <div className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Post Title"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="Excerpt / Summary"
          rows={3}
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category (e.g., Tech, Lifestyle)"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="categoryColor"
          value={form.categoryColor}
          onChange={handleChange}
          placeholder="Category Color (e.g., blue, green, red)"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
        >
          Add Post
        </button>
      </div>

      {/* Display posts
      <ul className="mt-10 space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-gray-50 border border-gray-200 rounded-md p-4"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <span
              className={`inline-block bg-${post.categoryColor}-100 text-${post.categoryColor}-600 text-xs font-semibold px-2 py-1 rounded mb-2`}
            >
              {post.category}
            </span>
            <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
            <p className="text-gray-600 my-2">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
              By {post.author} • {post.date}
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default CreateBlogs;

