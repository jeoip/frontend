import Props from "@/types/props/Props";
import styles from "@/styles/IPInformation.module.scss";
import IPInformationItemProps from "@/types/props/IPInformationItemProps";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import IPContext from "@/store/IPContext";

const IPInformationItem: React.FC<Props & IPInformationItemProps> = (props) => {
  return (
    <>
      <p className={`${styles["ip-information-item__title"]}`}>
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

  const ctx = useContext(IPContext)

  return (
    <div className={props.className}>
      <p className={`${styles["ip-information__title"]}`}>
        <FormattedMessage id="ip.informations.title" />
      </p>
      <div className="d-flex flex-row justify-content-between">
        <p className={`${styles["ip-information__ip"]}`}>{ctx?.ip}</p>
        <button className={`${styles["ip-information__btn"]}`}>
          <FormattedMessage id="ip.informations.btn"/>
        </button>
      </div>
      <IPInformationItems />
    </div>
  );
};

export default IPInformation;
