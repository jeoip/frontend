import LinkProps from "@/types/props/LinkProps";
import styles from '../../styles/Link.module.scss'

const Link = (props: React.PropsWithChildren<LinkProps>) => {
  return (
    <a href={props.href} className={`${styles.link} d-flex flex-row my-1`}>
      <span className={`${styles['link__icon']} mdi mdi-chevron-left my-auto`}></span>
      <p className={`${styles['link__text']} my-auto mx-1`}>{props.title}</p>
    </a>
  );
};

export default Link;
