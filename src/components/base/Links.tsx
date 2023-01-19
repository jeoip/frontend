import Link from './Link';
import styles from '../../styles/Links.module.scss'
import React from 'react';
import Props from '@/types/Props';
import { FormattedMessage } from 'react-intl';

const Links: React.FC<Props> = (props) => {
  const links = [
    {
      title: "links.dnj.holding",
      href: "https://dnj.co.ir",
    },
    {
      title: "links.jey.server",
      href: "https://jeyserver.com",
    },
    {
      title: "links.web.shot",
      href: "https://web-shot.ir",
    },
    {
      title: "links.jeo.dns",
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
