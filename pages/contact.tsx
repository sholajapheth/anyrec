import { AiFillFacebook, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { Button, HeadComp } from "../components/utills";
import { PageSubTitle, PageTitle } from "../components/utills/Text";

const index = () => {
  return (
    <>
      <HeadComp page={"Contact"} />
      <main className="flex items-end justify-between h-[80vh] laptop:px-[10em] p-[1.5rem]">
        <div className="laptop:flex hidden items-center gap-4">
          <AiFillFacebook className="text-[3rem] " />
          <AiFillLinkedin className="text-[3rem] " />
        </div>
        <div className="laptop:w-[30%] laptop:text-center flex flex-col justify-between h-full ">
          <div>
            <PageTitle>Contact</PageTitle>
            <PageSubTitle>
              For complaints, suggestions or feedbacks, Kindly send the details
              with the form below.
            </PageSubTitle>
          </div>

          <div className="mt-[3rem]">
            <form action="">
              <div>
                <input
                  className="text w-full p-[1em] rounded-full "
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="py-[2rem]">
                <textarea
                  className="text w-full p-[1em] rounded-xl "
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Type in your message, suggestions or complaints"
                ></textarea>
              </div>
            </form>

            <Button className="w-full p-[1em]">Send</Button>
            <div className="laptop:hidden flex items-center justify-center gap-4 my-[2rem]">
              <AiFillFacebook className="text-[2rem] " />
              <AiFillLinkedin className="text-[2rem] " />
              <AiOutlineTwitter className="text-[2rem] " />
              <AiOutlineMail className="text-[2rem] " />
            </div>
          </div>
        </div>

        <div className="laptop:flex hidden items-center gap-4">
          <AiOutlineTwitter className="text-[3rem] " />
          <AiOutlineMail className="text-[3rem] " />
        </div>
      </main>
    </>
  );
};

export default index;
