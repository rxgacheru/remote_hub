import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from  './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact';
import Companies from './components/Companies';
import Joblist from './components/Joblist';
import Job from './components/Jobs';
import SignUp from './components/SignUp';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/companies' element={<Companies />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path="/job" element={<Joblist />} />{/*searchQuery={searchQuery} */}
      <Route path="/job/:jobId" element={<Job />} />
        </Routes>
      <Footer />
    </Router>
    
  )
}

export default App;