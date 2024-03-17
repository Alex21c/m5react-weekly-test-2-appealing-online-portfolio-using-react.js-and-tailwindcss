import { Link } from "react-router-dom";

export default function Navbar(){
  
  return <nav className="bg-[#284249] rounded-bl-2xl rounded-tr-2xl">
    <ul className="flex gap-[2rem] text-[1.2rem] text-stone-300 px-[2rem] p-[1rem] ">
      <li className="activePage"><Link to="/AboutMe">About</Link></li> 
      <li className="hover:text-stone-400 transition"><Link to="/Certificates">Certificates</Link></li> 
      <li className="hover:text-stone-400 transition"><Link to="/Projects">Projects</Link></li> 
      <li className="hover:text-stone-400 transition"><Link to="/More">More</Link></li> 
      <li className="hover:text-stone-400 transition"><Link to="/Contact">Contact</Link></li> 
    </ul>
  </nav>
}    
