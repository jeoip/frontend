import ContactUsItemProps from "@/types/props/ContactUsItemProps";
import React from "react";
import styles from "../../styles/ContactUsItem.module.scss";

const ContactUsItem = (props: React.PropsWithChildren<ContactUsItemProps>) => {
  return (
    <div className="d-flex flex-row">
      <span
        className={`${styles["contact-us-item__icon"]} mdi ${props.icon} mt-1`}
      ></span>
      <p className={`${styles["contact-us-item__title"]} my-auto mx-1`}>
        {props.title}
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
