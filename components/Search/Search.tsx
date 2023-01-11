import React, { useEffect, useState } from "react";
import { FiSearch, FiShare2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GoDiffAdded } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi";
import { NormalSearch } from "../utills";

const SearchContext = React.createContext({
  screen: "",
  setScreen: (search: string) => {},
});

// mock data
const data = [
  {
    id: 1,
    product: "Nivea Lotion",
    last_recommended: "2 days ago",
    by: "@johndoe & 92 others",
    store: "Jumia",
  },
  {
    id: 2,
    product: "Nivea Lotion",
    last_recommended: "2 days ago",
    by: "@johndoe & 92 others",
    store: "Jumia",
  },
  {
    product: "Nivea Lotion",
    last_recommended: "2 days ago",
    by: "@johndoe & 92 others",
    store: "Jumia",
  },
  {
    product: "SilverLine Lotion",
    last_recommended: "Dec. 2021",
    by: "Precious & 60 others",
    store: "Jumia.NG",
  },
  {
    product: "Nivea Lotion",
    last_recommended: "2 days ago",
    by: "@johndoe & 92 others",
    store: "Jumia",
  },
  {
    product: "Nivea Lotion",
    last_recommended: "2 days ago",
    by: "@johndoe & 92 others",
    store: "Jumia",
  },
  {
    product: "SilverLine Lotion",
    last_recommended: "Dec. 2021",
    by: "Precious & 60 others",
    store: "Jumia.NG",
  },
];

const SearchCardAction = ({ icon, action }: any) => {
  return (
    <div className="flex items-center gap-x-2  md:text-[12px] text-[10px] font-[600]  ">
      <p className="md:text-[20px]"> {icon}</p>
      <p>{action}</p>
    </div>
  );
};

const SearchCard = ({ product, last_recommended, by, store }: any) => {
  const { setScreen } = React.useContext(SearchContext);

  return (
    <button
      onClick={() => setScreen("selected")}
      className="grid md:grid-cols-2 md:gap-x-[2rem] gap-y-[1rem] items-center bg-[#F5F5F5] rounded-md p-[2rem] shadow-md hover:shadow-xl animate-all duration-300 hover:bg-white"
    >
      <div>
        <p className="text-[25px] font-[600]">{product}</p>
        <div className="text-[16px] my-[1rem]">
          <p>Last {last_recommended}</p>
          <p>By {by}</p>
        </div>
        <p className="font-[700] text-[16px]">Buy from {store}</p>
      </div>
      <div className="flex md:flex-col flex-row h-full justify-between">
        <SearchCardAction icon={<GoDiffAdded />} action={"Recommend"} />
        <SearchCardAction icon={<FiShare2 />} action={"Share to..."} />
        <SearchCardAction icon={<AiOutlineHeart />} action={"Save for later"} />
        <SearchCardAction icon={<IoHeartDislikeOutline />} action={"Dislike"} />
      </div>
    </button>
  );
};

const Searches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-y-[3rem] gap-x-[8rem] w-full">
          {data.map((item, index) => {
            return (
              <SearchCard
                key={index}
                product={item.product}
                last_recommended={item.last_recommended}
                by={item.by}
                store={item.store}
              />
            );
          })}

          <div className=" bg-[#F5F5F5] rounded-md p-[2rem] shadow-md hover:shadow-xl animate-all duration-500 hover:bg-white">
            <div>
              <div className="text-[20px] font-[600] flex items-center gap-x-[3rem]">
                <p>See More Recommendations</p>
                <HiOutlineChevronRight />
              </div>
              <div className="text-[16px] my-[1rem]">
                <p>MamaCares Smooth </p>
                <p>SkinLight </p>
                <p>Body Cream</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#828282] md:text-[20px] flex md:gap-x-[3rem] items-center my-[3rem] w-full flex-nowrap whitespace-nowrap">
        <p>People also search:</p>
        <div className="flex items-center font-[600] justify-between flex-1 w-full gap-x-[1rem]  overflow-x-scroll scrollbar-hide ">
          <div></div>
          <p>Perfume</p>
          <p>Android Phone</p>
          <p>Face wash</p>
          <p>Bodycare Youtube Channel</p>
          <p>Bodycare Youtube Channel</p>
          <p>Bodycare Youtube Channel</p>
        </div>
      </div>
    </>
  );
};

const SelectedSearch = () => {
  const { setScreen } = React.useContext(SearchContext);

  return (
    <>
      <div>
        {/* product image and details  */}
        <div className="flex md:flex-row flex-col md:items-end md:gap-x-[2rem] gap-y-[2rem] w-full">
          <div className="bg-primary rounded-2xl md:w-[300px] md:h-[300px] w-[210px] h-[210px]   flex items-center justify-center">
            <img
              alt="Selected produc image"
              src="/images/dummy.svg"
              className=""
            />
          </div>

          {/* product details  */}
          <div className="flex flex-col h-full justify-between md:text-[16px] text-[12px] font-[500] flex-1 w-full">
            <p>Product</p>
            <div className="mt-[1rem] ">
              <p className="text-[30px] font-[900]">Adobe Creative Cloud</p>
              <p>Seller & or Location: Adobe Inc.</p>
            </div>
            <div className="my-[2rem]">
              <p>Last Recommended: Dec. 2021</p>
              <p>Recommended by: Precious, Clarke & 60 others</p>
            </div>
            <div className="flex gap-x-[2rem] lg:w-[60%] w-full font-[900] ">
              <button className="btn py-[1rem]">Recommend</button>
              <button className="btn-w py-[1rem]">Discourage</button>
              <button className="btn-w py-[1rem] gap-x-[10px] flex items-center  justify-center">
                <AiOutlineHeart className="text-[20px] " />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[4rem] flex md:flex-row flex-col md:gap-x-[6rem] gap-y-[2rem]">
          <div className="flex-1">
            <div className="border-b-black border-b-[2px] pl-[4rem] py-[1rem] ">
              <p className="font-[600] text-[25px] ">Additional Details</p>
            </div>
            <div className="flex flex-col gap-[2rem] font-[500] text-[20px] ">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi.
              </p>
            </div>
          </div>

          <div className="mt-[4rem]">
            <p className="font-[500] text-[16px] mb-[2rem]">
              <i>Link attached: https://m.youtub....</i>
            </p>
            <div className="flex flex-col md:gap-y-[4rem] gap-y-[2rem] font-[900]">
              <button className="btn py-[1rem]">Visit Link</button>
              <button
                onClick={() => setScreen("search")}
                className="btn-w py-[1rem]"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Search = () => {
  const [screen, setScreen] = useState("search");

  return (
    <SearchContext.Provider value={{ screen, setScreen }}>
      <div className="lg:px-[15rem] md:px-[10rem] px-[3rem] py-[3rem] w-full">
        {/* Serach bar */}
       <NormalSearch />

        {/* drop down */}

        <div className="md:text-[18px] text-[10px] text-[#828282] md:my-[3rem] my-[1rem] px-[2rem] flex md:flex-row flex-col md:items-center justify-between md:w-[60%] w-full ">
          <div className="flex gap-x-2 items-center ">
            <p>Category:</p>
            <select
              name="category"
              className="border-none  focus:ring-0 md:text-[18px] text[10px] font-[600]"
            >
              <option value="Bodycare & Lifestyle">Bodycare & Lifestyle</option>
              <option value="Fashion Related">Fashion Related</option>
              <option value="Online Services">Online Services</option>
              <option value="Home and office supplies">
                Home and office supplies
              </option>
              <option value="Education">Education</option>
              <option value="Events and activities">
                Events and activities
              </option>
              <option value="Digital Products">Digital Products</option>
            </select>
          </div>

          <div className="flex gap-x-2 items-center ">
            <p>Location:</p>
            <select
              name="location"
              className="border-none  focus:ring-0 md:text-[18px] text[10px] font-[600]"
            >
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
        </div>

        {/* body content */}

        {screen === "search" && <Searches />}
        {screen === "selected" && <SelectedSearch />}
      </div>
    </SearchContext.Provider>
  );
};

export default Search;
