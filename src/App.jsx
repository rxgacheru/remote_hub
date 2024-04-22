import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from  './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact';
import Companies from './components/Companies';
import Joblist from './components/Joblist';
import Jobs from './components/Jobs';
import SignUp from './components/SignUp';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/companies' element={<Companies />}/>
        <Route path='/joblist' element={<Joblist />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/signup' element={<SignUp />}/>

        </Routes>
    </Router>
    
  )
}

export default App;