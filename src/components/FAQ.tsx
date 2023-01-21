import Props from "@/types/Props";
import styles from "@/styles/FAQ.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import { getDirection } from "@/lang/locale";

export interface FAQItemProps {
  question: string,
  answer: string
}

const FAQItem: React.FC<Props & FAQItemProps> = (props) => {
  return (
    <>
      <p className={`${styles['faq-item__question']}`}>{props.question}</p>
      <p className={`${styles['faq-item__answer']}`}>{props.answer}</p>
    </>
  )
}

const FAQ: React.FC<Props> = (props) => {
  const intl = useIntl()
  const questions = intl.messages['faq.questions']
  const answers = intl.messages['faq.answers']
  if (questions.length != answers.length) {
    return (<></>)
  }
  const items = []
  for (let i = 0; i < questions.length; i++) {
    items.push({
      question: questions[i].toString(),
      answer: answers[i].toString()
    })
  }

  const iconRotation = (getDirection() === 'rtl') ? 'mdi-rotate-315' : 'mdi-rotate-135'

  return (
    <div className={props.className}>
      <div className="d-flex flex-row">
        <span
          className={`${styles["faq__arrow"]} my-auto mdi ${iconRotation} mdi-arrow-top-left`}
        ></span>
        <p className={`${styles["faq__title"]} my-auto mx-1`}>
          <FormattedMessage id="faq.title"/>
        </p>
      </div>
      <div className="mt-3">
        {items.map((item, index) => (
          <FAQItem question={item.question} answer={item.answer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
