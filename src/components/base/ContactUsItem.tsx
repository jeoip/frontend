import ContactUsItemProps from "@/types/props/ContactUsItemProps";
import Props from "@/types/props/Props";
import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "../../styles/ContactUsItem.module.scss";

const ContactUsItem: React.FC<Props & ContactUsItemProps> = (props) => {
  return (
    <div className={`${props.className} d-flex flex-row`}>
      <span
        className={`${styles["contact-us-item__icon"]} mdi ${props.icon} mt-1`}
      ></span>
      <p className={`${styles["contact-us-item__title"]} my-auto mx-1`}>
        <FormattedMessage id={props.title}/>
      </p>
      <a
        href={props.href}
        className={`${styles["contact-us-item__value"]} my-auto mx-3`}
      >
        {props.value}
      </a>
    </div>
  );
};

export default ContactUsItem;
