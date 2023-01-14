import Brand from "./base/Brand";
import ContactUs from "./base/ContactUs";
import Links from "./base/Links";

import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div
        className={`${styles["footer__container"]} d-none d-sm-flex flex-row justify-content-around`}
      >
        <Links></Links>
        <Brand row={false}></Brand>
        <ContactUs></ContactUs>
      </div>
      <div className={`${styles["footer__container"]} d-block d-sm-none`}>
        <Brand row={false}></Brand>
        <div
          className={`d-flex flex-column justify-content-center align-items-end`}
        >
          <ContactUs></ContactUs>
          <Links></Links>
        </div>
      </div>
    </div>
  );
};

export default Footer;
