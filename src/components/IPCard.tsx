import dynamic from "next/dynamic";
import Props from "@/types/Props";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Brand from "./base/Brand";
import Card from "./base/Card";
import FAQ from "./FAQ";
import Spinner from "./base/Spinner";
import IPAPI from "./ip/IPAPI";
import IPDataTable from "./ip/IPDataTable";
import IPInformation from "./ip/IPInformation";
import IPContext from "@/store/IPContext";

const Map = dynamic(
  () => {
    return import('@/components/Map');
  },
  { ssr: false }
);

interface IPCardProps {
  onIPReady: Function;
  onIPInformationReady: Function;
}

const IPCard: React.FC<IPCardProps & Props> = (props) => {

  const ctx = useContext(IPContext)
  const [loading, setLoading] = useState(false);

  const getIP = async () => {
    setLoading(true);
    try {
      const geolocation = await axios.get("https://geolocation-db.com/json/");
      props.onIPReady(geolocation.data.IPv4)
      const response = await axios.get(`https://jeoip.ir/api/${geolocation.data.IPv4}`);
      props.onIPInformationReady(response)
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getIP();
  }, []);

  return (
    <Card className="m-sm-3 px-sm-5 py-3">
      <Brand row={true}></Brand>
      {loading && <Spinner className="mx-auto" />}
      {!loading && (
        <>
          <IPInformation className="mx-3 mx-sm-0"/>
          <IPDataTable className="mt-4 mx-3 mx-sm-0" />
          {ctx && <Map className="d-block d-sm-none my-3" lat={ctx.latitude} lng={ctx.longitude} />}
        </>
      )}
      <IPAPI className="mt-5 mx-3 mx-sm-0"/>
      <FAQ className="mt-5 mx-3 mx-sm-0" />
    </Card>
  );
};

export default IPCard;
