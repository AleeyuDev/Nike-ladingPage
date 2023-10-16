import Button from "../componenets/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container fle justify-between items-center max-lg:flex-col gap-10 "
      id="contact-us">
      <h3
        className="text-4xl
     leading-[68p] lg:max-w-md font-palanquin font-bold">
        Sign Up From <span className="text-green-800">Updates</span> &
        Newslatters
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-4 p-2.5 sm:border sm:border-gray-400 rounded-full">
        <input
          type="text"
          placeholder="Subscribe@nike.com"
          className="sm:flex-1  max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
