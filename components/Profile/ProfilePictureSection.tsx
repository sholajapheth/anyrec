import { FiEdit2 } from "react-icons/fi";

const ProfilePictureSection = ({ className }: any) => {
  return (
    <div className={`${className}`}>
      <div className="relative flex items-end">
        <div className="md:h-[232px] md:w-[232px] w-[103px] h-[103px] rounded-full text-center bg-black text-white flex items-center justify-center">
          <p className="font-[900] md:text-[100px] text-[40px]">AR</p>
        </div>
        <button className="md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] rounded-full bg-white sticky md:-ml-[5.5rem] -ml-[2.5rem] mb-[1rem] shadow-xl flex items-center justify-center">
          <FiEdit2 className="text-[2rem]" />
        </button>
      </div>
    </div>
  );
};



export default ProfilePictureSection;