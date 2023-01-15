import Props from "@/types/props/Props";
import styles from "@/styles/IPInformation.module.scss";
import IPInformationItemProps from "@/types/props/IPInformationItemProps";

const IPInformationItem: React.FC<Props & IPInformationItemProps> = (props) => {
  return (
    <>
      <p className={`${styles["ip-information-item__title"]}`}>{props.title}</p>
      <div className={`${styles["ip-information-item__body"]} d-flex flex-row`}>
        <p className={`${styles["ip-information-item__value"]} mx-1 my-auto`}>
          {props.value}
        </p>
        <span
          className={`${styles["ip-information-item__icon"]} my-auto mdi ${props.icon}`}
        ></span>
      </div>
    </>
  );
};

const IPInformationItems: React.FC<Props> = () => {
  const items = [
    {
      title: 'Subnet',
      value: '164.132.138.0/17',
      icon: 'mdi-television',
    },
    {
      title: 'موقعیت جغرافیایی',
      value: 'فرانسه / Paris شهر ',
      icon: 'mdi-map-marker-outline',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col d-flex flex-column align-items-end">
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
      <div className="d-flex flex-row justify-content-end">
        <p className={`${styles["ip-information__title"]}`}>
          آی پی عمومی شما در حال حاضر:
        </p>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button className={`${styles["ip-information__btn"]}`}>عمومی</button>
        <p className={`${styles["ip-information__ip"]}`}>141.012.345.123</p>
      </div>
      <IPInformationItems />
    </div>
  );
};

export default IPInformation;
