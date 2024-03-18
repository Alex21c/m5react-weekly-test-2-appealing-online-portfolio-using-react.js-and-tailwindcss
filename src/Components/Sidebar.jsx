

export default function Sidebar(){
  return <aside className='bg-[#227c97] max-w-[15rem] p-[1rem] flex flex-col gap-[1rem] items-center rounded-2xl'>
    <div className='w-[10rem] h-[10rem]'>
      <img className='rounded-lg object-cover w-[100%] h-[100%]' src={require('../Assests/Images/OktayProfilePic.jpg')}></img>
    </div>
    <h2 className='text-slate-50 font-semibold text-[1.5rem]'>Oktay Shakirov</h2>
    <div className='flex flex-col  gap-[1rem] border-t-[2px] border-slate-900 pt-[2rem]'>
      <div className='flex gap-[1rem]'>
        <div>
          <i className="fa-sharp fa-solid fa-hourglass-half bg-[#202b32] text-yellow-300 py-[.5rem] px-[1rem]  text-[1.2rem] rounded-md" ></i>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='uppercase font-medium text-slate-300 text-[.9rem]'>Age</span>
          <span className='text-slate-50'>29 years old</span>
        </div>
      </div>
      <div className='flex gap-[1rem]'>
        <div>
          <i className="fa-solid fa-location-dot bg-[#202b32] text-yellow-300 py-[.5rem] px-[1rem]  text-[1.2rem] rounded-md" ></i>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='uppercase font-medium text-slate-300 text-[.9rem]'>Location</span>
          <span className='text-slate-50'>Berline, Germany</span>
        </div>
      </div>
      <div className='flex gap-[1rem]'>
        <div>
          <i className="fa-sharp fa-solid fa-user bg-[#202b32] text-yellow-300 py-[.5rem] px-[1rem]  text-[1.2rem] rounded-md" ></i>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='uppercase font-medium text-slate-300 text-[.9rem]'>Personality Type</span>
          <span className='text-slate-50'>INTJ-T</span>
        </div>
      </div>

      <ul className='flex gap-[1rem] text-[1.5rem] text-slate-300 justify-center '>
        <li><a href="#"><i className="fa-brands fa-github hover:text-yellow-300"></i></a></li>
        <li><a href="#"><i className="fa-brands fa-linkedin hover:text-yellow-300"></i></a></li>
        <li><a href="#"><i className="fa-brands fa-instagram hover:text-yellow-300"></i></a></li>
        <li><a href="#"><i className="fa-brands fa-twitter hover:text-yellow-300"></i></a></li>
      </ul>
      <div>
        
        
        
        
      </div>


    </div>
  </aside>
}