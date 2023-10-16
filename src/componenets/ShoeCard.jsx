/* eslint-disable react/prop-types */
const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <>
      <div
        className={`boder-2 rounded-xl
          ${
            bigShoeImg === imgURL.bigShoe
              ? "border-red-400"
              : "border-transparent"
          } cursor-pointer border-2 border-green-500  max-sm:flex-1

      `}
        onClick={handleClick}>
        <div className="flex justify-center items-center bg-card  bg-slate-900 sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            src={imgURL.thumbnail}
            alt="shoe collection "
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
