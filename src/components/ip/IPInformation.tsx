import Props from "@/types/props/Props";
import styles from "@/styles/IPInformation.module.scss";
import IPInformationItemProps from "@/types/props/IPInformationItemProps";
import { FormattedMessage } from "react-intl";

const IPInformationItem: React.FC<Props & IPInformationItemProps> = (props) => {
  return (
    <>
      <p className={`${styles["ip-information-item__title"]}`}>{props.title}</p>
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
  const items = [
    {
      title: "موقعیت جغرافیایی",
      value: "فرانسه / Paris شهر ",
      icon: "mdi-map-marker-outline",
    },
    {
      title: "Subnet",
      value: "164.132.138.0/17",
      icon: "mdi-television",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {items.map((item, index) => {
          return (
            <div className="col d-flex flex-column" key={index}>
              <IPInformationItem
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
  return (
    <div className={props.className}>
      <p className={`${styles["ip-information__title"]}`}>
        <FormattedMessage id="ip.informations.title" />
      </p>
      <div className="d-flex flex-row justify-content-between">
        <p className={`${styles["ip-information__ip"]}`}>141.012.345.123</p>
        <button className={`${styles["ip-information__btn"]}`}>
          <FormattedMessage id="ip.informations.btn"/>
        </button>
      </div>
      <IPInformationItems />
    </div>
  );
};

export default IPInformation;
