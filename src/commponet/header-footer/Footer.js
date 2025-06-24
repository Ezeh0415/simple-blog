import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
<footer class="bg-gray-900 text-gray-300 py-10 px-6">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* <!-- Contact Info --> */}
    <div className='capitalize'>
      <h3 class="text-xl font-semibold mb-2">Contact</h3>
      <p>Email: <a href="ezeanwechigozie@gmail.com" class="text-blue-400 hover:underline">ezeanwechigozie@gmail.com</a></p>
      <p>Location: anambra, nigerian</p>
    </div>

    {/* <!-- Social Links --> */}
    <div>
      <h3 class="text-xl font-semibold mb-2">Follow Me</h3>
      <div class="flex space-x-4 mt-2">
        <a href="#" class="hover:text-white">Twitter</a>
        <a href="#" class="hover:text-white">Instagram</a>
        <a href="#" class="hover:text-white">GitHub</a>
        <a href="#" class="hover:text-white">LinkedIn</a>
      </div>
    </div>

    {/* <!-- Legal Links --> */}
    <div>
      <h3 class="text-xl font-semibold mb-2">Legal</h3>
      <ul class="space-y-2">
        <li><a href="/privacy" class="hover:underline">Privacy Policy</a></li>
        <li><a href="/terms" class="hover:underline">Terms of Service</a></li>
      </ul>
    </div>
  </div>

  {/* <!-- Copyright --> */}
  <div class="mt-10 text-center text-sm text-gray-500">
    &copy; 2025 Your Blog Name. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer
