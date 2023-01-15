import Link from './Link';
import styles from '../../styles/Links.module.scss'
import React from 'react';
import Props from '@/types/props/Props';
import { FormattedMessage } from 'react-intl';

const Links: React.FC<Props> = (props) => {
  const links = [
    {
      title: "هلدینگ داده نگار جی",
      href: "https://dnj.co.ir",
    },
    {
      title: "جی سرور",
      href: "https://jeyserver.com",
    },
    {
      title: "وب شات",
      href: "https://web-shot.ir",
    },
    {
      title: "JeoDns",
      href: "https://jeodns.com",
    },
  ];

  return (
    <div className={`${props.className} d-flex flex-column`}>
      <p className={`${styles['links__title']}`}>
        <FormattedMessage id="links.title"/>
      </p>
      {links.map((link, index) => (
        <Link title={link.title} href={link.href} key={index}></Link>
      ))}
    </div>
  );
};

export default Links;
