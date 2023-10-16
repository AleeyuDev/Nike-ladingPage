import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks } from "../constant/index";
import { socialMedia } from "../constant/index";

const Footer = () => {
  return (
    <>
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="" height={46} width={150} />
            </a>
            <p className="mt6 capitalize text-base leading-7 font-montserrat  text-white sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. find
              Your perfect Size In store. Get Rewards
            </p>

            <div className="flex items center gap-5 mt-8">
              {socialMedia.map(
                (icon, idx) => (
                  console.log(socialMedia),
                  (
                    <div
                      key={idx}
                      className="flex justify-center items-center w-12 h-12   hover:bg-green-800  bg-white rounded-full">
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        width={24}
                        height={24}
                      />
                    </div>
                  )
                )
              )}
            </div>
          </div>
          <div className="flex flex-1 justify-between  lg:gap10 gap-10 flex-wrap">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 ">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-400 cursor-pointer">
                      <a> {link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer font-montserrat ">
            <img
              src={copyrightSign}
              alt=" copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />

            <p>CopyrightSign. All rights reserved</p>
          </div>

          <p className="cursor-pointer  font-montserrat ">Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
