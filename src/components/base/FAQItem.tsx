import Props from "@/types/Props";
import styles from '@/styles/FAQItem.module.scss'

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

export default FAQItem;