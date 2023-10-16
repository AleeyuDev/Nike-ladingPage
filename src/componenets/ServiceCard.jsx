/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
      <div className="w-11 h-11  flex  justify-center items-center bg-green-600 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
        {/* className="bg-green-600 w-full rounded-[20px]" */}
      </div>{" "}
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className=" mt-3 break-words  font-montserrat leading-normal text-slate-400">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
