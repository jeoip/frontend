import styles from "@/styles/ContactUs.module.scss";
import { FormattedMessage } from "react-intl";
import Props from "@/types/Props";

export interface ContactUsItemProps {
  title: string,
  value: string,
  href: string,
  icon: string,
}

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

const ContactUs = () => {
  const items = [
    {
      title: "contact.us.phone",
      value: "031-34420301",
      href: "#",
      icon: "mdi-phone",
    },
    {
      title: "contact.us.email",
      value: "hi@dnj.co.ir",
      href: "#",
      icon: "mdi-email",
    },
    {
      title: "contact.us.support",
      value: "کلیک کنید",
      href: "#",
      icon: "mdi-headset",
    },
  ];

  return (
    <div>
      <div className="d-flex flex-row justify-content-sm-center">
        <p className={`${styles["contact-us__title"]}`}>
          <FormattedMessage id="contact.us.title"/>
        </p>
      </div>
      <div className="d-flex flex-column">
        {items.map((item, index) => (
          <ContactUsItem
            title={item.title}
            value={item.value}
            href={item.href}
            icon={item.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
