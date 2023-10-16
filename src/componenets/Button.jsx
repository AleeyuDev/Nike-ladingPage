/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// const Button = ({
//   label,
//   iconURL,
//   backgroundColor,
//   textColor,
//   borderColor,
// }) => {
//   return (
//     <>
//       <button
//         className={`flex justify-center items-center  gap-2   px-7 py-4 border font-montserrat text-lg leading-none   first-letter:

//         ${[backgroundColor] ? ${backgroundColor} ${textColor} ${borderColor}:bg-red-400 }

//         bg-red-400 rounded-full text-white border-red-400`}>
//         {label}
//         {iconURL && (
//           <img
//             src={iconURL}
//             alt="arrowRight"
//             className="ml-2  rounded-full w-5 h-5"
//           />
//         )}
//       </button>
//     </>
//   );
// };

// export default Button;

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-green-800 text-white border-green-400"
      } rounded-full ${fullWidth && "w-full"}`}>
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
