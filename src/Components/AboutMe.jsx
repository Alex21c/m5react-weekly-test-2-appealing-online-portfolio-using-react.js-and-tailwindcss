import HeadingWithIconAndParagraph from "./SubComponents/HeadingWithIconAndParagraph"
export default function AboutMe(){
  return <section className='pt-[5rem] p-[2rem] flex flex-col gap-[1rem] min-h[200rem]  bg-[#227c97] rounded-2xl  '>
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
    <div>
      <div>
        <h3 className="text-slate-50 font-semibold text-[1.5rem] text-center">Coding Languages</h3>
      </div>
      <div>
        <h3 className="text-slate-50 font-semibold text-[1.5rem] text-center">Human Languages</h3>
      </div>
    </div>
  </section>
}