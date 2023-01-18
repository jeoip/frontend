import Props from "@/types/props/Props";
import { FormattedMessage } from "react-intl";
import styles from "@/styles/IPAPI.module.scss";
import { getDirection } from "@/lang/translate";
import { FormEvent, useContext, useState } from "react";
import IPAPIContext from "@/store/IPAPIContext";

interface IPAPIItemProps {
  title: string;
  value: string;
}

interface IPAPIUrlProps {
  url: string;
}

interface IPAPIInputProps {
  onEnterIP: Function;
}

const IPAPIHeader: React.FC<Props> = (props) => {
  const iconRotation =
    getDirection() === "rtl" ? "mdi-rotate-315" : "mdi-rotate-135";

  return (
    <>
      <div className="d-flex flex-row">
        <span
          className={`${styles["ip-api__arrow"]} my-auto mdi ${iconRotation} mdi-arrow-top-left`}
        ></span>
        <p className={`${styles["ip-api__title"]} my-auto mx-1`}>
          <FormattedMessage id="ip.api.title" />
        </p>
      </div>
      <p className={`${styles["ip-api__subtitle"]}`}>
        <FormattedMessage id="ip.api.subtitle" />
      </p>
    </>
  );
};

const IPAPIItem: React.FC<IPAPIItemProps & Props> = (props) => {
  const ctx = useContext(IPAPIContext);

  const itemSelectHandler = () => {
    ctx.onItemSelect(props.value);
  };

  return (
    <p
      className={`${styles["ip-api-item"]} ${
        ctx.item === props.value ? styles["ip-api-item__selected"] : ""
      }`}
      onClick={itemSelectHandler}
    >
      <FormattedMessage id={props.title} />
    </p>
  );
};

const IPAPIItems: React.FC<Props> = (props) => {
  const items = [
    {
      title: "ip.api.items.ip",
      value: "ip",
    },
    {
      title: "ip.api.items.location",
      value: "location",
    },
    {
      title: "ip.api.items.country.iso",
      value: "country-iso",
    },
    {
      title: "ip.api.items.city",
      value: "city",
    },
    {
      title: "ip.api.items.asn",
      value: "asn",
    },
    {
      title: "ip.api.items.json",
      value: "json",
    },
    {
      title: "ip.api.items.port",
      value: "port",
    },
  ];

  return (
    <div
      className={`${props.className} ${styles["ip-api-items"]} d-flex flex-row align-items-center`}
    >
      {items.map((item, index) => (
        <IPAPIItem title={item.title} value={item.value} key={index} />
      ))}
    </div>
  );
};

const IPAPIUrl: React.FC<IPAPIUrlProps & Props> = (props) => {
  return (
    <div
      className={`${props.className} ${styles["ip-api-url__container"]} d-flex flex-row align-items-center`}
    >
      <span className="mdi mdi-currency-usd"></span>
      <span className={`${styles["ip-api-url__value"]} mx-2`}>{props.url}</span>
    </div>
  );
};

const IPAPIResult: React.FC<Props> = (props) => {
  return (
    <div
      className={`${props.className} ${styles["ip-api-result__container"]} d-flex flex-row align-items-center`}
    >
      <span className={`${styles["ip-api-result__value"]} mx-1`}>
        curl jeoip.com/api
      </span>
    </div>
  );
};

const IPAPIInput: React.FC<IPAPIInputProps & Props> = (props) => {
  const [ipValid, setIPValid] = useState(null as null | boolean);

  const validateIPaddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ip = event.target.value;
    const blocks = ip.split(".");
    if (!ip) {
      setIPValid(null);
      props.onEnterIP("");
      return;
    }
    if (blocks.length != 4) {
      setIPValid(false);
      props.onEnterIP("");
      return;
    }
    let valid = true;
    for (let block of blocks) {
      if (!block) {
        valid = false;
        break;
      }
      let number = parseInt(block);
      if (number < 0 || number > 255) {
        valid = false;
        break;
      }
    }
    setIPValid(valid);
    props.onEnterIP(valid ? ip : "");
  };

  return (
    <div
      className={`${props.className} d-flex flex-row justify-content-between`}
    >
      <p className={`${styles["ip-api-input__title"]} my-auto`}>
        <FormattedMessage id="ip.api.input.title" />
      </p>
      <div>
        <FormattedMessage id="ip.api.input.placeholder">
          {(placeholder) => (
            <input
              type="text"
              placeholder={placeholder.toString()}
              className={`${styles["ip-api-input__input"]} ${
                typeof ipValid == "boolean" && !ipValid
                  ? styles["ip-api-input__input-invalid"]
                  : ""
              } mx-3`}
              onInput={validateIPaddress}
            />
          )}
        </FormattedMessage>
        <button type="button" className={`${styles["ip-api-input__submit"]} btn`}>
          <span className="spinner-border spinner-border-sm mt-1 mx-1 visually-hidden" role="status" aria-hidden="true"></span>
          <FormattedMessage id="ip.api.input.check" />
        </button>
      </div>
    </div>
  );
};

const IPAPI: React.FC<Props> = (props) => {
  const [enteredIP, setEnteredIP] = useState("");
  const [selectedItem, setSelectedItem] = useState("ip");

  const onItemSelectHandler = (value: string) => {
    setSelectedItem(value);
  };

  const onEnterIPHandler = (ip: string) => {
    setEnteredIP(ip);
  };

  const url = enteredIP
    ? `curl https://jeoip.com/api/${enteredIP}/${selectedItem}`
    : `curl https://jeoip.com/api/${selectedItem}`;

  return (
    <IPAPIContext.Provider
      value={{
        ip: enteredIP,
        item: selectedItem,
        onItemSelect: onItemSelectHandler,
      }}
    >
      <div className={`${props.className}`}>
        <IPAPIHeader />
        <IPAPIItems />
        <IPAPIUrl url={url} />
        <IPAPIResult className="mt-3" />
        <IPAPIInput onEnterIP={onEnterIPHandler} className="mt-3" />
      </div>
    </IPAPIContext.Provider>
  );
};

export default IPAPI;
