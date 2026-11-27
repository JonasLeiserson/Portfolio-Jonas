import halfBall from "@/assets/intersect.svg";

export function OrtLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[185px] w-[279px] shrink-0 ${className}`}>
      <div className="absolute top-[41px] h-[100px] w-[100px] rounded-full border-[5px] border-ball-line bg-ball" />
      <div className="absolute top-[89px] h-1 w-[100px] border border-ball-line bg-ball-line" />
      <img className="absolute top-[91px] h-[47px] w-[100px]" src={halfBall} alt="" />
      <div className="absolute top-[76px] left-[35px] h-[30px] w-[30px] rounded-full border-[5px] border-ball-line bg-white" />
      <p className="absolute left-[95px] font-inter text-[150px] font-bold text-white">R</p>
      <p className="absolute top-[3px] left-[178px] font-inter text-[150px] font-bold text-white">T</p>
    </div>
  );
}
