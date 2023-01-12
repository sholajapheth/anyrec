import React from "react";
import { PageTitle } from "../utills/Text";
import { Button } from "../utills";
import ProfilePictureSection from "./ProfilePictureSection";

const ProfileInfoCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div>
    <p className="md:text-[14px] text-[10px]">{title}</p>
    <p className="font-[600] md:text-[25px] text-[14px]">{value}</p>
  </div>
);



const Profile = () => {
  return (
    <div className="p-[2em]">
      <div className="md:grid md:grid-cols-2 place-items-center ">
        <div className="">
          <div className="w-full md:my-0 my-[2rem] flex flex-col items-center">
            <PageTitle className={"md:pl-[2em]"} padding>
              My Profile
            </PageTitle>
            <ProfilePictureSection className=" md:hidden block " />
          </div>

          <div className="md:border-x-[2px] md:border-b-[2px] md:p-[2rem] rounded-b-[2rem] shadow-md  flex flex-col gap-y-[1rem]">
            <ProfileInfoCard title="Username" value="John Doe" />
            <ProfileInfoCard
              title="Email"
              value="Bobtitaniummackerenzie@gmail.com"
            />
            <ProfileInfoCard title="Gender" value="Male" />
            <ProfileInfoCard title="Country" value="Nigeria" />
            <ProfileInfoCard
              title="Categories"
              value="Electronics, Accessories, +3 more"
            />
            <ProfileInfoCard title="Memeber since" value="2022" />
          </div>
        </div>

        <div className="flex flex-col items-center g">
          {/* profile picture section  */}
          <ProfilePictureSection className=" md:block hidden" />

          {/* profile detials  */}
          <div className="mt-[2rem] ">
            <p className="uppercase font-[900] text-[40px] ">Anytan Rector</p>

            <div className="text-[16px]">
              <p className="font-[700]">Interest</p>
              <p className="font-[300]">
                Fishing, Tech, Dodgecoin, Cooking, Metal works
              </p>
            </div>
          </div>

          <div className="mt-[1rem]">
            <div className="grid grid-cols-2 items-center md:text-black text-white">
              <div className="rounded-[2rem] shadow-md text-center font-[900] p-[1rem] md:bg-white bg-black ">
                <p className="text-[24px]">12</p>
                <p className="text-[16px]">Recommendations</p>
              </div>

              <div className="rounded-[2rem] shadow-md text-center font-[900] p-[1rem] md:bg-white bg-black ">
                <p className="text-[24px]">27</p>
                <p className="text-[16px]">Searches</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-[2rem] mt-[2rem]">
              <Button link="profile/edit" className="p-[1rem]">
                Edit Profile
              </Button>
              <Button className="p-[1rem]">Back</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
