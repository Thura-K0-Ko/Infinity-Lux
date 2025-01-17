import { create } from "zustand";

const useFaqStore = create((set) => ({
  generalFaqs: [
    {
      id: 1,
      question: "What time is check in / out?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Can I cancel or change my booking?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",

      isOpen: false,
    },
    {
      id: 3,
      question: "Can you store my luggage?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",

      isOpen: false,
    },
    {
      id: 4,
      question: "Can I book more than 1 room at the time?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",

      isOpen: false,
    },
  ],

  reservationAndPaymentFaqs: [
    {
      id: 1,
      question: "How do I make a reservation?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",

      isOpen: false,
    },
    {
      id: 3,
      question: "Can I modify or cancel my reservation?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",

      isOpen: false,
    },
    {
      id: 4,
      question: "Are there any additional fees or taxes?",
      answer:
        "Check in is available from 3pm on the day you arrive. You may request an earlier check-in at the time of booking, but we cannot make guarantees. Check out is at 11am. Late check-outs can be requested with Guest Services upon check-in.",

      isOpen: false,
    },
  ],
  toggleGeneralFaq: (id) =>
    set((state) => ({
      generalFaqs: state.generalFaqs.map((faq) =>
        faq.id === id
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      ),
    })),
  toggleReservationAndPaymentFaq: (id) =>
    set((state) => ({
      reservationAndPaymentFaqs: state.reservationAndPaymentFaqs.map((faq) =>
        faq.id === id
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      ),
    })),
}));

export default useFaqStore;
