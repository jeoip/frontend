import Props from "@/types/Props";
import styles from "@/styles/IPDataTable.module.scss";
import { FormattedMessage } from "react-intl";
import { useContext, useEffect, useState } from "react";
import IPContext from "@/store/IPContext";
import Spinner from "../base/Spinner";

const ipToInt = (ip: string | undefined) => {
  if (ip === undefined) return -1;
  return ip.split(".").map(parseFloat).reduce((int, value) => int * 256 + +value);
}


const IPDataTable: React.FC<Props> = (props) => {
  
  const ctx = useContext(IPContext)
  const [userAgent, setUserAgent] = useState('')

  useEffect(() => {
    setUserAgent(window.navigator.userAgent)
  }, [])
  
  const getUserAgent = () => {
    return userAgent.substring(0, userAgent.indexOf(' '));
  }
  
  const getUserAgentComment = () => {
    return userAgent.substring(userAgent.indexOf(' ') + 1);
  }

  return (
    <div className={props.className}>
      <p className={`${styles["data-table__title"]}`}>
        <FormattedMessage id="ip.data.table.title"/>
      </p>
      <table className={`${styles["data-table__table"]}`}>
        <tbody>
          <tr>
            <th><FormattedMessage id="ip.data.table.ip"/></th>
            <th>{ctx?.ip}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.ip.numeric"/></th>
            <th>{ipToInt(ctx?.ip)}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.country"/></th>
            <th>{ctx?.country}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.longitude"/></th>
            <th>{ctx?.longitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.latitude"/></th>
            <th>{ctx?.latitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.asn"/></th>
            <th>{ctx?.asn}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.asn.organization"/></th>
            <th>{ctx?.asn_org}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.hostname"/></th>
            <th>{ctx?.hostname}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.user.agent"/></th>
            <th>{getUserAgent()}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.user.agent.comment"/></th>
            <th>{getUserAgentComment()}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.user.agent.raw"/></th>
            <th>{userAgent}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IPDataTable;
