import Props from "@/types/Props";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "@/styles/IPAPI.module.scss";
import { getDirection } from "@/lang/locale";
import { useContext, useEffect, useState } from "react";
import IPAPIContext from "@/store/IPAPIContext";
import axios from "axios";
import { Validator } from "ip-num/Validator";

interface IPAPIItemProps {
  title: string;
  value: string;
}

interface IPAPIUrlProps {
  url: string;
}

interface IPAPIResultProps {
  value: string | object;
  error: boolean;
  loading: boolean;
}

interface IPAPIInputProps {
  loading: boolean;
  onEnterIP: Function;
  onSubmit: Function;
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
      title: "ip.api.items.country",
      value: "country",
    },
    {
      title: "ip.api.items.country.code",
      value: "country-code",
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
    }
  ];

  return (
    <div
      className={`${props.className} ${styles["ip-api-items"]} d-flex flex-row flex-wrap align-items-center`}
    >
      {items.map((item, index) => (
        <IPAPIItem title={item.title} value={item.value} key={index} />
      ))}
    </div>
  );
};

const IPAPIUrl: React.FC<IPAPIUrlProps & Props> = (props) => {

  const [showCopied, setShowCopied] = useState(false)
  const value = `curl ${props.url}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setShowCopied(true);
  }

  useEffect(() => {
    const timeout  = setTimeout(() => {
      setShowCopied(false);
    }, 3000)
    return () => {
      clearTimeout(timeout);
    }
  }, [showCopied])

  return (
    <div
      dir="ltr"
      className={`${props.className} ${styles["ip-api-url__container"]} d-flex flex-row justify-content-between`}
    >
      <div className="d-flex flex-row align-items-center">
        <span className="mdi mdi-currency-usd"></span>
        <span onClick={copyToClipboard} className={`${styles["ip-api-url__value"]} mx-2`}>{value}</span>
      </div>
      {showCopied && (
        <div className="d-flex flex-row align-items-center">
          <span className={`${styles["ip-api-url__copied-value"]} mx-1`}>
            <FormattedMessage id="ip.api.copied"/>
          </span>
          <span className={`${styles["ip-api-url__copied-icon"]} mdi mdi-check`}></span>
        </div>
      )}
    </div>
  );
};

const IPAPIResult: React.FC<IPAPIResultProps & Props> = (props) => {
  const [showCopied, setShowCopied] = useState(false)
  const value = (typeof props.value == 'string') ? props.value : JSON.stringify(props.value, undefined, 4);
  
  const copyToClipboard = () => {
    if (props.error) return
    navigator.clipboard.writeText(value);
    setShowCopied(true);
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCopied(false);
    }, 3000)
    return () => {
      clearTimeout(timeout);
    }
  }, [showCopied])

  if ((props.loading || !value) && !props.error) return <></>

  const dir = (props.error && getDirection() === 'rtl') ? 'rtl' : 'ltr'

  return (
    <div dir={dir}>
      <div
        className={`${props.className} ${styles["ip-api-result__container"]} d-flex flex-row justify-content-between`}
      >
        {props.error && (
          <span className={`${styles["ip-api-result__value"]} mx-1 my-auto`}>
            <FormattedMessage id="ip.api.result.error"/>
          </span>
        )}
        {!props.error && (
          <pre onClick={copyToClipboard} className={`${styles["ip-api-result__value"]} mx-1 my-auto`}>
            {value}
          </pre>
        )}
      </div>
      {showCopied && (
        <div className="d-flex flex-row align-items-center mt-1">
          <span className={`${styles["ip-api-url__copied-icon"]} mdi mdi-check`}></span>
          <span className={`${styles["ip-api-url__copied-value"]} mx-1`}>
            <FormattedMessage id="ip.api.copied"/>
          </span>
        </div>
      )}
    </div>
  );
};

const IPAPIInput: React.FC<IPAPIInputProps & Props> = (props) => {
  const [ipValid, setIPValid] = useState(null as null | boolean);

  const validateIPaddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ip = event.target.value;
    const valid = Validator.isValidIPv4String(ip)[0] || Validator.isValidIPv6String(ip)[0]
    setIPValid(valid);
    props.onEnterIP(valid ? ip : "");
  };

  const submitHandler = () => {
    if (ipValid && !props.loading) {
      props.onSubmit()
    }
  }

  return (
    <div
      className={`${props.className} d-flex flex-column flex-sm-row justify-content-sm-between`}
    >
      <p className={`${styles["ip-api-input__title"]} my-auto`}>
        <FormattedMessage id="ip.api.input.title" />
      </p>
      <div className="d-flex flex-column flex-sm-row mt-3 mt-sm-0">
        <FormattedMessage id="ip.api.input.placeholder">
          {(placeholder) => (
            <input
              type="text"
              placeholder={placeholder.toString()}
              className={`${styles["ip-api-input__input"]} ${
                typeof ipValid == "boolean" && !ipValid
                  ? styles["ip-api-input__input-invalid"]
                  : ""
              } mx-sm-3`}
              onInput={validateIPaddress}
            />
          )}
        </FormattedMessage>
        <button disabled={!ipValid} type="button" className={`${styles["ip-api-input__submit"]} btn btn-primary mt-3 mt-sm-0`} onClick={submitHandler}>
          {props.loading && <span className="spinner-border spinner-border-sm mt-1 mx-1" role="status" aria-hidden="true"></span>}
          {!props.loading && <FormattedMessage id="ip.api.input.check" />}
        </button>
      </div>
    </div>
  );
};

const IPAPI: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [result, setResult] = useState('');
  const [enteredIP, setEnteredIP] = useState("");
  const [selectedItem, setSelectedItem] = useState("ip");

  const onItemSelectHandler = (value: string) => {
    setSelectedItem(value);
  };

  const onEnterIPHandler = (ip: string) => {
    setEnteredIP(ip);
  };

  const url = enteredIP
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/${enteredIP}/${selectedItem}`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/api/${selectedItem}`;

  const submitHandler = async () => {
    setError(false)
    setLoading(true)
    try {
      const response = await axios.get(url);
      setResult(response.data)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  
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
        <IPAPIResult value={result} error={error} loading={loading} className="mt-3" />
        <IPAPIInput loading={loading} onEnterIP={onEnterIPHandler} onSubmit={submitHandler} className="mt-3" />
      </div>
    </IPAPIContext.Provider>
  );
};

export default IPAPI;
