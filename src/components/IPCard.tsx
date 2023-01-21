import Props from "@/types/Props";
import axios from "axios";
import { useEffect, useState } from "react";
import Brand from "./base/Brand";
import Card from "./base/Card";
import FAQ from "./FAQ";
import Spinner from "./base/Spinner";
import IPAPI from "./ip/IPAPI";
import IPDataTable from "./ip/IPDataTable";
import IPInformation from "./ip/IPInformation";

interface IPCardProps {
  onIPReady: Function;
  onIPInformationReady: Function;
}

const IPCard: React.FC<IPCardProps & Props> = (props) => {

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
    <Card className="px-5">
      <Brand row={true}></Brand>
      {loading && <Spinner className="mx-auto" />}
      {!loading && (
        <>
          <IPInformation />
          <IPDataTable className="mt-4" />
        </>
      )}
      <IPAPI className="mt-5"/>
      <FAQ className="mt-5" />
    </Card>
  );
};

export default IPCard;
