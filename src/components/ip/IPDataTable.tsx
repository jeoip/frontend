import Props from "@/types/Props";
import styles from "@/styles/IPDataTable.module.scss";
import { FormattedMessage } from "react-intl";
import { useContext, useEffect, useState } from "react";
import IPContext from "@/store/IPContext";
import { IPv4, IPv6 } from "ip-num/IPNumber";

const ipToInt = (ip: string) => {
  try {
    if (ip.indexOf(':') != -1) {
      let ipv6 = new IPv6(ip);
      return parseInt(ipv6.toBinaryString(), 2)
    } else {
      let ipv4 = new IPv4(ip);
      return parseInt(ipv4.toBinaryString(), 2)
    }
  } catch (error) {
    return ''
  }
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
        <tbody className={`${styles["data-table__table-body"]}`}>
          <tr>
            <th><FormattedMessage id="ip.data.table.ip"/></th>
            <th>{ctx.ip}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.ip.numeric"/></th>
            <th>{ipToInt(ctx.ip)}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.country"/></th>
            <th>{ctx.country}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.longitude"/></th>
            <th>{ctx.longitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.latitude"/></th>
            <th>{ctx.latitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.asn"/></th>
            <th>{ctx.asn}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.asn.organization"/></th>
            <th>{ctx.asn_org}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.hostname"/></th>
            <th>{ctx.hostname}</th>
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
