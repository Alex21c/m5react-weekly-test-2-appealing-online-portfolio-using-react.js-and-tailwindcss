import './ProgressBar.css';
export default function ProgressBar({heading, value, widthClassName}){
  

  return (
    <div className="w-[100%] flex flex-col gap-[.5rem]">
      <div className="flex  gap-[1rem] text-stone-300">
        <h3 className="text-slate-50 font-medium text-[1.2rem]">{heading}</h3>
        <div className="text-[1.1rem]">{value}</div>
      </div>
      <div className="bg-slate-900 w-[100%] h-[.7rem] rounded-full">
        <div className={`bg-gradient bg-gradient-to-r from-yellow-300 to-yellow-400 h-[.7rem] rounded-full ${widthClassName}`}></div>
      </div>

    </div>
  );
}