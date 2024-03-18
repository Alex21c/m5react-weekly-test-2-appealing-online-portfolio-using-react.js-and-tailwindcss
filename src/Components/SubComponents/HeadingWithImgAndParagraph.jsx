export default function HeadingWithImgAndParagraph({heading, paragraph, imgSrc} ){
  return (
    <div className="flex flex-col gap-[1rem] bg-[#256475]  p-[2rem] rounded-2xl relative min-h-[10rem]">
      <div className="w-[5rem] h-[5rem] flex gap-[1rem] items-end top-[-2rem] absolute">
        <img src={imgSrc} className="w-[100%] h-[100%] object-fill"/>
        <h3 className="text-slate-50 font-semibold text-[1.2rem]">{heading}</h3>
      </div>
      <div className="relative top-[2rem]">
        <p className="text-stone-300 ">{paragraph}</p>
      </div>
    </div>

  );
}