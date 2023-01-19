import styles from '../../styles/Link.module.scss'
import { getDirection } from "@/lang/translate";
import { FormattedMessage } from "react-intl";

export interface LinkProps {
  title: string,
  href: string,
}

const Link = (props: React.PropsWithChildren<LinkProps>) => {

  const icon = (getDirection() === 'rtl') ? 'mdi-chevron-left' : 'mdi-chevron-right';

  return (
    <a href={props.href} className={`${styles.link} d-flex flex-row my-1`}>
      <span className={`${styles['link__icon']} mdi ${icon} my-auto`}></span>
      <p className={`${styles['link__text']} my-auto mx-1`}>
        <FormattedMessage id={props.title}/>
      </p>
    </a>
  );
};

export default Link;
