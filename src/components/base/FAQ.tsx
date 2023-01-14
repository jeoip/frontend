import Props from "@/types/props/Props";
import styles from "@/styles/FAQ.module.scss";
import FAQItem from "./FAQItem";

const FAQ: React.FC<Props> = (props) => {
  const items = [
    {
      question: "چجوری میتونم مشخص کنم از کدام ورژن از آی پی استفاده شود؟",
      answer:
        "از سال 2018-07-25 مشخص کردن ورژن آی پی در پروتوکل ها منسوخ شده و امکان پذیر نمیباشد. ولیکن میتوانید در صورت داشتن امکان با استفاده از پارامتر درست در برنامه‌ای که استفاده میکنید، ورژن آی پی را تعیین کنید. برای مثال در فرمان curl میتوانید با پارامتر های 4- و 6- مشخص کنید از کدام ورژن آی پی که دارید استفاده شود.",
    },
    {
      question: "چگونه میتوانم این اطلاعات رو به صورت JSON دریافت کنم؟",
      answer:
        "با تنظیم پارامتر هدر درخواست برابر application/json میتوانید اطلاعات را به صورت JSON دریافت کنید.",
    },
    {
      question: "آیا استفاده از این ابزار در برنامه ها مجاز است؟",
      answer: `بله، تا زمانی که تعداد درخواست های شما از حد معینی بیشتر نشود و فشار بر روی سرور های ما ایجاد نکند، میتوانید از این ابزار در برنامه ها استفاده کنید.
      در برنامه هایتان سعی کنید در هر دقیقه بیشتر از یک درخواست ارسال نکنید. در صورتیکه درخواست های شما بیشتر شود، تا مدتی از ایجاد درخواست جدید از طرف شما جلوگیری خواهد شد.`,
    },
    {
      question:
        "آیا میتوانم به صورت اختصاصی این ابزار را برای خودم راه اندازی کنم؟",
      answer:
        "بله، میتوانید با استفاده از شماره های تماس با ما در ارتباط باشید و ما ابزار اختصاصی خودتان را راه اندازی خواهیم کرد.",
    },
  ];

  return (
    <div className={props.className}>
      <div className="d-flex flex-row justify-content-end">
        <p className={`${styles["faq__title"]} my-auto mx-1`}>سوالات متداول</p>
        <span
          className={`${styles["faq__arrow"]} my-auto mdi mdi-rotate-270 mdi-arrow-up-bold`}
        ></span>
      </div>
      <div className="mt-3">
        {items.map((item) => (
          <FAQItem question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
