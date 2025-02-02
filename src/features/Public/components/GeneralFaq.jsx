import useFaqStore from "../../../stores/useFaqStore";
import { HiChevronDown } from "react-icons/hi2";

const GeneralFaq = () => {
  const { generalFaqs, toggleGeneralFaq } = useFaqStore();
  return (
  
      <div className="flex flex-col gap-9">
          {/* -----------------------GeneralFaq---------------------------- */}
        <h1 className=" text-customGray-500 text-xl md:text-4xl font-normal font-heading">
          General Faq
        </h1>
        <div className="">
          {generalFaqs.map((faq) => (
            <div key={faq.id} className="py-4 xl:py-6 ">
              <div
                className="flex justify-between items-center cursor-pointer "
                onClick={() => toggleGeneralFaq(faq.id)}
              >
                <h3 className="text-customGray-500 text-base xl:text-2xl font-normal font-heading py-2 ">
                  {faq.question}
                </h3>
                <HiChevronDown
                  className={`size-5 md:size-7 text-customGray-300 cursor-pointer ${
                    faq.isOpen ? "rotate-180 duration-1000" : " duration-1000"
                  }`}
                />
              </div>
              {faq.isOpen && (
                <p
                  className={`py-2 text-gray-500 text-base font-normal pr-5 ${
                    faq.isOpen
                      ? "block duration-300 animate__animated animate__fadeInDown"
                      : " duration-1000"
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default GeneralFaq;
