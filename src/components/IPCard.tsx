import dynamic from "next/dynamic";
import Props from "@/types/Props";
import { useContext, useState } from "react";
import Brand from "./base/Brand";
import Card from "./base/Card";
import FAQ from "./FAQ";
import IPAPI from "./ip/IPAPI";
import IPDataTable from "./ip/IPDataTable";
import IPInformation from "./ip/IPInformation";
import IPContext from "@/store/IPContext";
import styles from "@/styles/IPCard.module.scss";
import { FormattedMessage } from "react-intl";
import Spinner from "./base/Spinner";


const Map = dynamic(
  () => {
    return import("@/components/Map");
  },
  { ssr: false }
);

interface IPCardProps {
  error: boolean;
  loading: boolean;
  onRetry: Function;
}

const IPCard: React.FC<IPCardProps & Props> = (props) => {
  const ctx = useContext(IPContext);

  const retryHandler = () => {
    props.onRetry()
  }

  return (
    <Card
      className={`${props.className} ${styles["ip-card__container"]} mb-3 m-sm-3 px-sm-5 py-3`}
    >
      <Brand row={true}></Brand>
      {props.error && (
        <div className="d-flex flex-column align-items-center mx-4 mx-sm-0">
          {props.loading && <Spinner/>}
          <p className={`${styles['ip-card__error']} mt-3`}>
            <FormattedMessage id="ip.card.error"/>
          </p>
          <div className="d-flex flex-row justify-content-center">
            <FormattedMessage id="ip.card.retry">
              {(text) => {
                return <button onClick={retryHandler} className={`${styles['ip-card__retry']}`}>{text}</button>;
              }}
            </FormattedMessage>
          </div>
        </div>
      )}
      {!props.error && (
        <>
          <IPInformation className="mx-4 mx-sm-0" />
          <IPDataTable className="mt-4 mx-4 mx-sm-0" />
        </>
      )}
      {ctx && (
        <Map
          className="d-block d-sm-none my-3"
          lat={ctx.latitude}
          lng={ctx.longitude}
        />
      )}
      <IPAPI className="mt-5 mx-4 mx-sm-0" />
      <FAQ className="mt-5 mx-4 mx-sm-0" />
    </Card>
  );
};

export default IPCard;
