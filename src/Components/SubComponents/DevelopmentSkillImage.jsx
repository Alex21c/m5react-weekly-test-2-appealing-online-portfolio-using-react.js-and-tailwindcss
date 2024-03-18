export default function DevelopmentSkillImage({imgSrc}){
  return(
    <div className="min-w-[15rem] min-h-[15rem] rounded-full hover:drop-shadow-[0_35px_35px_rgba(253,224,71,0.5)] transition">
      <img src={imgSrc} className="object-fill w-[100%] h-[100%] "></img>
    </div>
  ); 
}