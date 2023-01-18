import IPContext, { IPContextType } from "@/store/IPContext";
import Props from "@/types/props/Props";
import axios from "axios";
import { useEffect, useState } from "react";
import Brand from "./base/Brand";
import Card from "./base/Card";
import FAQ from "./base/FAQ";
import Spinner from "./base/Spinner";
import IPAPI from "./ip/IPAPI";
import IPDataTable from "./ip/IPDataTable";
import IPInformation from "./ip/IPInformation";

const IPCard: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<IPContextType>({
    ip: "",
    subnet: "",
    city: "",
    country: "",
    latitude: -1,
    longitude: -1,
  });

  const getIP = async () => {
    setLoading(true);
    try {
      const geolocation = await axios.get("https://geolocation-db.com/json/");
      setState((prevState) => {
        return { ...prevState, ip: geolocation.data.IPv4 };
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getIPInformation = async () => {
    setLoading(true);
    try {
      const ipInformation = await axios.get(`https://jeoip.ir/api/${state.ip}`);
      setState((prevState) => {
        return {
          ...prevState,
          subnet: ipInformation.data.subnet,
          city: ipInformation.data.city,
          country: ipInformation.data.country,
          latitude: ipInformation.data.latitude,
          longitude: ipInformation.data.longitude,
        };
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getIP();
  }, []);

  useEffect(() => {
    getIPInformation();
  }, [state.ip]);

  return (
    <IPContext.Provider value={state}>
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
    </IPContext.Provider>
  );
};

export default IPCard;
