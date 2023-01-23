import Props from "@/types/Props";
import styles from "@/styles/IPInformation.module.scss";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import IPContext from "@/store/IPContext";

export interface IPInformationItemProps {
  title: string,
  value?: string,
  icon?: string,
}

const IPInformationItem: React.FC<Props & IPInformationItemProps> = (props) => {
  return (
    <>
      <p className={`${props.className} ${styles["ip-information-item__title"]}`}>
        <FormattedMessage id={props.title}/>
      </p>
      <div className={`${styles["ip-information-item__body"]} d-flex flex-row`}>
        <span
          className={`${styles["ip-information-item__icon"]} my-auto mdi ${props.icon}`}
        ></span>
        <p className={`${styles["ip-information-item__value"]} mx-1 my-auto`}>
          {props.value}
        </p>
      </div>
    </>
  );
};

const IPInformationItems: React.FC<Props> = () => {

  const ctx = useContext(IPContext)

  const items = [
    {
      title: "ip.informations.location",
      value: `${ctx?.city} / ${ctx?.country}`,
      icon: "mdi-map-marker-outline",
    },
    {
      title: "ip.informations.subnet",
      value: ctx?.subnet,
      icon: "mdi-television",
    },
  ];

  return (
    <div className="container-fluid px-0">
      <div className="row">
        {items.map((item, index) => {
          return (
            <div className="col-12 col-sm-6 d-flex flex-column" key={index}>
              <IPInformationItem
                className="mt-3 mt-sm-0"
                title={item.title}
                value={item.value}
                icon={item.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const IPInformation: React.FC<Props> = (props) => {

  const ctx = useContext(IPContext)

  return (
    <div className={props.className}>
      <p className={`${styles["ip-information__title"]} mb-0`}>
        <FormattedMessage id="ip.informations.title" />
      </p>
      <div className="d-flex flex-row justify-content-between">
        <p className={`${styles["ip-information__ip"]}`}>{ctx.hostname}</p>
        <span className={`${styles["ip-information__btn"]} d-none d-sm-block text-center pt-2`}>
          <FormattedMessage id="ip.informations.btn"/>
        </span>
      </div>
      <IPInformationItems />
    </div>
  );
};

export default IPInformation;
