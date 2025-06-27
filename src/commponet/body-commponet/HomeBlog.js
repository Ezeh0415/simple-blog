import { Link } from "react-router-dom"
import { usePosts } from "../contex-file/PostContext"
// import { useCategories } from "../contex-file/PostContext"
import { categories } from "../UserBlog";

const HomeBlog = () => {
    const {posts, setPosts} = usePosts();
    // const {categories} = useCategories();

    const handleDelete = (id) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts)
    }

    const handleSearchCart = (categories) => {
        
        // const newCart = posts.filter((post) => post.category.name !== categories.name);
        // // setPosts(newCart)
        // console.log(newCart);
    }
   
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
                        <div className="flex items-center justify-between">
                            <span
                            className={`inline-block bg-${post.categoryColor}-100 text-${post.categoryColor}-600 text-xs font-semibold px-2 py-1 rounded mb-2`}
                            >
                            {post.category}
                            </span>
                            <svg onClick={() =>handleDelete(post.id)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 hover:text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </div>
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
                        onClick={handleSearchCart} // Replace with router or filter later
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
