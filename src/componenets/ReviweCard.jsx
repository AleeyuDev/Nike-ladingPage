/* eslint-disable no-unused-vars */

import { star } from "../assets/icons";

/* eslint-disable react/prop-types */
const ReviweCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full  object-cover w-[120px] h-[120px]"
      />
      <p> {feedback}</p>
      <div className="">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl text-stone-500 ">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-palanquin text-center  font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviweCard;
