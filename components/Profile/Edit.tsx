import ProfilePictureSection from "./ProfilePictureSection";
import { PageTitle } from "../utills/Text";
import { useState } from "react";
import { Button } from "../utills";

const EditInput = ({
  title,
  value,
  type,
  dropdownList,
}: {
  title: string;
  value: string;
  type: string;
  dropdownList?: string[];
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={title} className="md:text-[14px] text-[10px]">
        {title}
      </label>
      {type === "dropdown" ? (
        <select className="font-[600] md:text-[25px] text-[14px] border-x-0 focus:ring-0 border-t-0 border-b-[2px] border-b-black  focus:border-b-[3px]">
          {dropdownList?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="font-[600] md:text-[25px] text-[14px] border-x-0 focus:ring-0 border-t-0 border-b-[2px] border-b-black  focus:border-b-[3px]"
          type={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </div>
  );
};

const Edit = () => {
  return (
    <div>
      <div className="w-full md:my-0 my-[2rem] flex flex-col items-center">
        <PageTitle className={""} padding>
          My Profile
        </PageTitle>
        <ProfilePictureSection className=" " />
      </div>
      <div className="my-[4rem] md:px-0 px-[2rem]">
        <form className="flex flex-col gap-y-[4rem] md:w-[40%]  m-auto">
          <EditInput
            title="Username"
            value="Bobtitanium Mackerenzie"
            type="text"
          />
          <EditInput
            title="Email"
            value="Bobtitaniummackerenzie@gmail.com"
            type="email"
          />
          <EditInput
            title="Gender"
            value="Male"
            type="dropdown"
            dropdownList={["male", "female"]}
          />
          <EditInput
            title="Country"
            value="Nigeria"
            type="dropdown"
            dropdownList={["Nigeria", "Ghana", "USA"]}
          />
          <EditInput
            title="Categories"
            value="Electronics, Accessories, +3 more"
            type="dropdown"
            dropdownList={["Electronics", "Accessories", "Clothing"]}
          />

          <Button className="p-[1rem]">Save</Button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
