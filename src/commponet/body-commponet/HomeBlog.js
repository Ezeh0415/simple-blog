import { Link } from "react-router-dom"
import {categories } from "../UserBlog"
import { usePosts } from "../contex-file/PostContext"

const HomeBlog = () => {
    const {posts} = usePosts();
  return (
    <div>
      {/* <!-- Hero Section --> */}
        <section class="bg-white py-16 px-6 text-center">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Simple Blog
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 mb-8">
            Insights, tutorials, and stories about web development, design, and tech trends.
            </p>
            
            {/* <!-- CTA Button --> */}
            <a href="#subscribe" class="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-md transition duration-300">
            Subscribe Now
            </a>
        </div>
        </section>

        <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Featured Posts</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <span
                        className={`inline-block bg-${post.categoryColor}-100 text-${post.categoryColor}-600 text-xs font-semibold px-2 py-1 rounded mb-2`}
                        >
                        {post.category}
                        </span>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="text-sm text-gray-500 mb-4">
                        By {post.author} • {post.date}
                        </div>
                        <Link to={`/blogs/${post.id}`} className="inline-block text-blue-600 font-medium hover:underline">
                        Read More →
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>    

        <section className="bg-white py-12 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore by Category</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat, index) => (
                        <button
                        key={index}
                        className={`bg-${cat.color}-100 text-${cat.color}-800 font-medium px-4 py-2 rounded-full text-sm hover:bg-${cat.color}-200 transition`}
                        onClick={() => alert(`You clicked ${cat.name}`)} // Replace with router or filter later
                        >
                        {cat.name}
                        </button>
                    ))}
                </div>
                </div>
         </section>
    </div>
  )
}

export default HomeBlog
