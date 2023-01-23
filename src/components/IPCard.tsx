import dynamic from "next/dynamic";
import Props from "@/types/Props";
import { useContext } from "react";
import Brand from "./base/Brand";
import Card from "./base/Card";
import FAQ from "./FAQ";
import IPAPI from "./ip/IPAPI";
import IPDataTable from "./ip/IPDataTable";
import IPInformation from "./ip/IPInformation";
import IPContext from "@/store/IPContext";
import styles from "@/styles/IPCard.module.scss";

const Map = dynamic(
  () => {
    return import("@/components/Map");
  },
  { ssr: false }
);

const IPCard: React.FC<Props> = (props) => {
  const ctx = useContext(IPContext);

  return (
    <Card
      className={`${props.className} ${styles["ip-card__container"]} mb-3 m-sm-3 px-sm-5 py-3`}
    >
      <Brand row={true}></Brand>
      <IPInformation className="mx-4 mx-sm-0" />
      <IPDataTable className="mt-4 mx-4 mx-sm-0" />
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
