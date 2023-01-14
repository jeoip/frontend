import ContactUsItemProps from "@/types/props/ContactUsItemProps";
import React from "react";
import styles from "./ContactUsItem.module.scss";

const ContactUsItem = (props: React.PropsWithChildren<ContactUsItemProps>) => {
  return (
    <div className="d-flex flex-row">
      <a
        href={props.href}
        className={`${styles["contact-us-item__value"]} my-auto mx-3`}
      >
        {props.value}
      </a>
      <p className={`${styles["contact-us-item__title"]} my-auto mx-1`}>
        {props.title}
      </p>
      <span
        className={`${styles["contact-us-item__icon"]} mdi ${props.icon} mt-1`}
      ></span>
    </div>
  );
};

export default ContactUsItem;
