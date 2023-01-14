import Link from './Link';
import styles from './Links.module.scss'

const Links = () => {
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
    <div className="d-flex flex-column align-items-end">
      <p className={`${styles['links__title']}`}> ما را دنبال کنید در:</p>
      {links.map((link) => (
        <Link title={link.title} href={link.href}></Link>
      ))}
    </div>
  );
};

export default Links;
