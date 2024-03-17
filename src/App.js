import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Certificates from './Components/Certificates';
import Projects from './Components/Projects';
import More from './Components/More';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div className='flex gap-[2rem] p-[2rem]  justify-center'>
      <div className='sticky top-0'>
        <Sidebar/>
      </div>

      <div className='rounded-2xl  relative w-[60rem]'>
        <div className='absolute right-[0] roudned-2xl z-[100]'>
          <Navbar />                
        </div>
        <div className='absolute top-[0rem] z-[2] '>
          <Routes>
            <Route path="/AboutMe" element={<AboutMe/>} />        
            <Route path="/Certificates" element={<Certificates/>} />        
            <Route path="/Projects" element={<Projects/>} />        
            <Route path="/More" element={<More/>} />        
            <Route path="/Contact" element={<Contact/>} />        
          </Routes>
        </div>
      </div>
      
    

      
    </div>


  );
}

export default App;
