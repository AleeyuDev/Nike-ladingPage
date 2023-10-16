/* eslint-disable no-undef */
import Button from "../componenets/Button";
import { shoes, statistics } from "../constant/index";
import ShoeCard from "../componenets/ShoeCard";

import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full  flex lx:flex-row  flex-col  min-h-screen gap-10 max-container justify-center border-0 ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-green-600">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-green-800 inline-block mt-3 mb-14 sm:max-w-sm">
            Nike
          </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-400 text-lg leading-8 mt-6 mb-14 max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and inovation for
          your active life.
        </p>
        <Button label="shop now " iconURL={arrowRight} />
        <div className="flex jutify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* mx-auto sm:mt-[100px] */}

      <div className=" relative flex-1  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-[#ffffff]/ bg-slate-900 ">
        <img
          className="object-contain  relative z-10"
          src={bigShoeImg}
          alt="Shoe colloction"
          width={610}
          height={500}
        />
        <div className="flex  sm:gap-6 gap-4 absolute -bottom-5  sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, idx) => (
            <div key={idx}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
