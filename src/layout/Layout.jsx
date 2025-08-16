import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import RecentlyPlayed from '../components/RecentlyPlayed';
import MyLibrary from '../components/MyLibrary';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<RecentlyPlayed />} />
          <Route path="recently-played-tracks" element={<RecentlyPlayed />} />
          <Route path="my-library" element={<MyLibrary />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
