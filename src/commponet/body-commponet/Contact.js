import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
    const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(`Thanks for reaching out, ${form.name}! We will get back to you shortly.`);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => {
        setSuccess("");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
        {success &&
         <div className="max-w-md mx-auto my-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md shadow-sm">
            <p>{success}</p>
         </div>
        }
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-gray-700 capitalize">
        <p><strong>Email:</strong> ezeanwechigozie@gmail.com</p>
        <p><strong>Phone:</strong> +234 906 3810 310</p>
        <p><strong>Address:</strong> 35 ede street attar road nkpor || anambra nigeria</p>
      </div>
    </div>
  );
};

export default Contact;
