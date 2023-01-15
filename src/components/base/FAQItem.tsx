import FAQItemProps from "@/types/props/FAQItemProps";
import Props from "@/types/props/Props";
import styles from '@/styles/FAQItem.module.scss'

const FAQItem: React.FC<Props & FAQItemProps> = (props) => {
  return (
    <>
      <p className={`${styles['faq-item__question']}`}>{props.question}</p>
      <p className={`${styles['faq-item__answer']}`}>{props.answer}</p>
    </>
  )
}

export default FAQItem;