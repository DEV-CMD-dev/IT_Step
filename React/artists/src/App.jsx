import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import ArtistClass from './components/classes/ArtistClass'
import Artist from './components/Artist'


const a = [
  new ArtistClass("NN guy", "1890", "https://uploads4.wikiart.org/00115/images/pablo-picasso/iuyqtex0.jpeg!Portrait.jpeg"),
  new ArtistClass("Goose", "856", "https://img.artpal.com/944981/1-20-9-26-2-48-10m.jpg"),
  new ArtistClass("Bro", "2000", "https://cdn.shopify.com/s/files/1/0151/5681/files/Funny-Art-Guiseppe-Bertumnus-Fruits-Portrait_grande.jpg?v=1569768937"),
  new ArtistClass("HZ", "2000", "https://img.buzzfeed.com/buzzfeed-static/static/2017-01/26/16/tmp/buzzfeed-prod-fastlane-03/ff60929fad4a121664c64545d14abd61-5.jpg?crop=625:415;0,0&resize=1250:830"),
  new ArtistClass("Monaliza", "1999", "https://arthive.com/res/media/img/oy1000/work/6d9/93792@2x.jpg")
]


function Layout() {
  return (
    <>
      <nav className='layout'>
        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <div className='home'>
      <h1>Artists Gallery</h1>
      {a.map((element, index) => (
        <Artist key={index} info={element} />
      ))}
    </div>
  );
}


function About() {
  return (
    <div className='About'>
      <h1>About This Site</h1>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="About"
        style={{ width: '300px', borderRadius: '8px' }}
      />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

