/* eslint-disable react/prop-types */
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex-justify-start gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className=" bg-green-600 rounded-full"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-400">
          ( 4.5 )
        </p>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-2xl text-green-500 leading-normal ">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
