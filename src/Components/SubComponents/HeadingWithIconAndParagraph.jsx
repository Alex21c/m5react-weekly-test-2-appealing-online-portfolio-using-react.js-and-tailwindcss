export default function HeadingWithIconAndParagraph({heading, paragraph, fontAwesomeIconClassName} ){
  return (
    <div className="flex gap-[1rem] bg-[#256475]  p-[2rem] rounded-2xl">
      <div>
        <i className={`${fontAwesomeIconClassName} text-yellow-300 text-[3rem]`}></i>
      </div>
      <div>
        <h3 className="text-slate-50 font-semibold text-[1.5rem]">{heading}</h3>
        <p className="text-stone-300 ">{paragraph}</p>
      </div>
    </div>

  );
}