import HeadingWithIconAndParagraph from "./SubComponents/HeadingWithIconAndParagraph";
import HeadingWithImgAndParagraph from "./SubComponents/HeadingWithImgAndParagraph";
import ProgressBar from "./SubComponents/ProgressBar";
import DevelopmentSkillImage from "./SubComponents/DevelopmentSkillImage";
import {useEffect} from 'react';
import { Link } from "react-router-dom";

export default function AboutMe(){

  useEffect(()=>{
    let scrollLeftBy = 50;
    let wrapperDevelopmentSkillImage = document.querySelector('div#wrapperDevelopmentSkillImage');
    let intervalId = setInterval(()=>{
      wrapperDevelopmentSkillImage.scrollLeft += 1;
      
      if(wrapperDevelopmentSkillImage.scrollLeft >= 3248){
        wrapperDevelopmentSkillImage.scrollLeft = 0;
      }
    },10);

    return ()=>{clearInterval(intervalId)}; // clear interval on unmounting of component
  }, []);


  return <section className='pt-[5rem] p-[2rem] flex flex-col gap-[1rem] min-h[200rem]  bg-[#227c97] rounded-2xl  mb-[5rem]'>
    <div className="flex flex-col">
      <h2 className="text-slate-50 font-semibold text-[2rem] ">About Oktay Shakirov</h2>
      <span className="border-[3px] border-yellow-300 max-w-[3rem] rounded-full"></span>
    </div>
    <p className="text-stone-300 bg-[#256475] p-[2rem] rounded-2xl">
      Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
    </p>

    <h2 className="text-slate-50 font-semibold text-[2rem] text-center">Primary Focus</h2>
    <div className="grid  grid-cols-2 gap-[1rem]">
      <HeadingWithIconAndParagraph heading={"Web Design & Development"} paragraph={"Creating attractive, easy-to-use websites that work well for businesses and individuals online." } fontAwesomeIconClassName ={"fa-solid fa-globe"}/>
      <HeadingWithIconAndParagraph heading={"Mobile Apps & Games"} paragraph={"Creating and developing engaging mobile apps and games for iOS and Android devices."} fontAwesomeIconClassName={"fa-solid fa-mobile-screen-button"}/>
      <HeadingWithIconAndParagraph heading={"Development Solutions"} paragraph={"Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."} fontAwesomeIconClassName={"fa-sharp fa-solid fa-file-chart-column"}/>
      <HeadingWithIconAndParagraph heading={"Marketing & SEO"} paragraph={"Using SEO and marketing strategies to boost online visibility and promote products or services."} fontAwesomeIconClassName={"fa-solid fa-chart-mixed"}/>            
    </div>

    <h2 className="text-slate-50 font-semibold text-[2rem] text-center">Exploring Creativity</h2>
    <div className="grid  grid-cols-2 gap-[1rem]">
      <HeadingWithIconAndParagraph heading={"Visual Storytelling"} paragraph={"Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually."} fontAwesomeIconClassName={"fa-solid fa-camera-viewfinder"}/>
      <HeadingWithIconAndParagraph heading={"Digital Content Creation"} paragraph={"Creatiing dynamic digital content, such as 3D models, graphics or animations."} fontAwesomeIconClassName={"fa-solid fa-box-open"}/>         
    </div>


    <h2 className="text-slate-50 font-semibold text-[2rem] text-center">Languages</h2>
    <div className="bg-[#256475] flex gap-[2rem] rounded-2xl p-[2rem]">
      <div className="gap-[1.5rem] flex flex-col w-[50%]">
        <h3 className="text-slate-50 font-semibold text-[1.5rem] text-center">Coding Languages</h3>
        <ProgressBar heading={"JavaScript"} value={'90%'} widthClassName={'width90Percent'}/>
        <ProgressBar heading={"TypeScript"} value={'75%'} widthClassName={'width75Percent'}/>
        <ProgressBar heading={"CSS"} value={'100%'} widthClassName={'width100Percent'}/>
        <ProgressBar heading={"PHP"} value={'50%'} widthClassName={'width50Percent'}/>
        <ProgressBar heading={"Python"} value={'25%'} widthClassName={'width25Percent'}/>
      </div>
      <div className="gap-[1.5rem] flex flex-col w-[50%]">
        <h3 className="text-slate-50 font-semibold text-[1.5rem] text-center">Human Languages</h3>
        <ProgressBar heading={"English"} value={'Fluent'} widthClassName={'width100Percent'}/>
        <ProgressBar heading={"German"} value={'Fluent'} widthClassName={'width100Percent'}/>
        <ProgressBar heading={"Bulgarian"} value={'Native'} widthClassName={'width100Percent'}/>
        <ProgressBar heading={"Turkish"} value={'Bilingual'} widthClassName={'width75Percent'}/>
        <ProgressBar heading={"Russian"} value={'Basic'} widthClassName={'width25Percent'}/>        
      </div>
    </div>

    <h2 className="text-slate-50 font-semibold text-[2rem] text-center">Development Skills</h2>
    <div id= 'wrapperDevelopmentSkillImage' className="px-[5rem] bg-[#256475] flex gap-[2rem] rounded-2xl p-[2rem] max-w-[60rem] overflow-x-auto ">

        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/html.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/css.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/javaScript.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/figma.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/git.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/linux.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/react.webp')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/node.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/next.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/npm.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/typescript.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/wordpress.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/php.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/python.png')} />
        <DevelopmentSkillImage imgSrc={require('../Assests/Images/developmentSkills/adobe.png')} />
  
    </div>


    <h2 className="text-slate-50 font-semibold text-[2rem] text-center">Favorite Activities</h2>
    <div className="grid  grid-cols-2 gap-[4rem] mt-[2rem]">
      <HeadingWithImgAndParagraph heading={"Investments"} paragraph={"Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment" } imgSrc ={require('../Assests/Images/FavoriteActivities/Investments.png')}/>
      <HeadingWithImgAndParagraph heading={"Music"} paragraph={"Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"} imgSrc ={require('../Assests/Images/FavoriteActivities/music.png')}/>
      <HeadingWithImgAndParagraph heading={"Reading"} paragraph={"Books on Self-Improvement, Psychology and Understanding Life Better."} imgSrc ={require('../Assests/Images/FavoriteActivities/reading.png')}/>
      <HeadingWithImgAndParagraph heading={"Photography"} paragraph={"Capturing precious moments and memories through the lens of a camera."} imgSrc ={require('../Assests/Images/FavoriteActivities/photography.png')}/>            
    </div>

    
    <div className="float-right flex justify-end mt-[1rem]">
      <button className="text-slate-50 hover:text-yellow-300 transiton bg-[#256475] px-[1rem] py-[.5rem] rounded-2xl flex gap-[.5rem]">
        <Link to="/Certificates">Next</Link>
        <i className="fa-solid fa-chevron-right"></i>
      </button>

    </div>

  </section>



}