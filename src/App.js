import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostsProvider } from './commponet/contex-file/PostContext';
// import './App.css';

import Header from "./commponet/header-footer/Header";
import HomeBlog from './commponet/body-commponet/HomeBlog';
import Footer from './commponet/header-footer/Footer';
import CreateBlogs from './commponet/body-commponet/CreateBlogs';
import About from './commponet/body-commponet/About';
import Contact from './commponet/body-commponet/Contact';

function App() {
  return (
    <div className="App">
    <PostsProvider>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<HomeBlog />} />
          <Route path="/blogs" element={<CreateBlogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PostsProvider>
      {/* import { useState } from 'react'; */}

{/* function InputList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (input.trim()) {
      setItems([...items, { name: input }]);  // Add object to array
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default InputList; */}

    </div>
  );
}

export default App;
