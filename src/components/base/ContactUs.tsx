import ContactUsItem from "./ContactUsItem";
import styles from "../../styles/ContactUs.module.scss";

const ContactUs = () => {
  const items = [
    {
      title: "شماره تماس:",
      value: "031-34420301",
      href: "#",
      icon: "mdi-phone",
    },
    {
      title: "پست الکترونیک",
      value: "hi@dnj.co.ir",
      href: "#",
      icon: "mdi-email",
    },
    {
      title: "پشتیبانی فنی",
      value: "کلیک کنید",
      href: "#",
      icon: "mdi-headset",
    },
  ];

  return (
    <div>
      <div className="d-flex flex-row justify-content-end justify-content-sm-center">
        <p className={`${styles["contact-us__title"]}`}>با ما در تماس باشید</p>
      </div>
      <div className="d-flex flex-column align-items-end">
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
