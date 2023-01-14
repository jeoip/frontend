import ContactUsItem from "./ContactUsItem";
import styles from './ContactUs.module.scss'

const ContactUs = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className={`${styles['contact-us__title']}`}>با ما در تماس باشید</p>
      <ContactUsItem title="شماره تماس:" value="031-34420301" href="#" icon="mdi-phone"/>
      <ContactUsItem title="پست الکترونیک" value="hi@dnj.co.ir" href="#" icon="mdi-email"/>
      <ContactUsItem title="پشتیبانی فنی" value="کلیک کنید" href="#" icon="mdi-headset"/>
    </div>
  );
};

export default ContactUs;
