import useFaqStore from "../../../stores/useFaqStore";
import { HiChevronDown } from "react-icons/hi2";
import GeneralFaq from "./GeneralFaq";

const FaqCard = () => {
  const {
    reservationAndPaymentFaqs,
    toggleReservationAndPaymentFaq,
  } = useFaqStore();
  return (
    <>
      <div className="w-[1086px] mx-auto flex flex-col gap-9">
        {/* -----------------------GeneralFaq---------------------------- */}
        <GeneralFaq />

        {/* -----------------------reservationAndPaymentFaqs---------------------------- */}
        <div>
          <h1 className=" text-customGray-500 text-4xl font-normal font-heading">
            Reservations and Payments
          </h1>
          <div className="mt-7">
            {reservationAndPaymentFaqs.map((faq) => (
              <div key={faq.id} className="py-6 ">
                <div
                  className="flex justify-between items-center cursor-pointer "
                  onClick={() => toggleReservationAndPaymentFaq(faq.id)}
                >
                  <h3 className="text-customGray-500 text-2xl font-normal font-heading py-2 ">
                    {faq.question}
                  </h3>
                  <HiChevronDown
                    className={` size-7 text-customGray-300 cursor-pointer ${
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
        {/* -----------------------reservationAndPaymentFaqs---------------------------- */}
        <div>
          <h1 className=" text-customGray-500 text-4xl font-normal font-heading">
            Reservations and Payments
          </h1>
          <div className="mt-7">
            {reservationAndPaymentFaqs.map((faq) => (
              <div key={faq.id} className="py-6 ">
                <div
                  className="flex justify-between items-center cursor-pointer "
                  onClick={() => toggleReservationAndPaymentFaq(faq.id)}
                >
                  <h3 className="text-customGray-500 text-2xl font-normal font-heading py-2 ">
                    {faq.question}
                  </h3>
                  <HiChevronDown
                    className={` size-7 text-customGray-300 cursor-pointer ${
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
        {/* -----------------------reservationAndPaymentFaqs---------------------------- */}
        <div>
          <h1 className=" text-customGray-500 text-4xl font-normal font-heading">
            Reservations and Payments
          </h1>
          <div className="mt-7">
            {reservationAndPaymentFaqs.map((faq) => (
              <div key={faq.id} className="py-6 ">
                <div
                  className="flex justify-between items-center cursor-pointer "
                  onClick={() => toggleReservationAndPaymentFaq(faq.id)}
                >
                  <h3 className="text-customGray-500 text-2xl font-normal font-heading py-2 ">
                    {faq.question}
                  </h3>
                  <HiChevronDown
                    className={` size-7 text-customGray-300 cursor-pointer ${
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
        {/* -----------------------reservationAndPaymentFaqs---------------------------- */}
        <div>
          <h1 className=" text-customGray-500 text-4xl font-normal font-heading">
            Reservations and Payments
          </h1>
          <div className="mt-7">
            {reservationAndPaymentFaqs.map((faq) => (
              <div key={faq.id} className="py-6 ">
                <div
                  className="flex justify-between items-center cursor-pointer "
                  onClick={() => toggleReservationAndPaymentFaq(faq.id)}
                >
                  <h3 className="text-customGray-500 text-2xl font-normal font-heading py-2 ">
                    {faq.question}
                  </h3>
                  <HiChevronDown
                    className={` size-7 text-customGray-300 cursor-pointer ${
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
      </div>
    </>
  );
};

export default FaqCard;
