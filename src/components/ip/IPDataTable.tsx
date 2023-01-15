import Props from "@/types/props/Props";
import styles from "@/styles/IPDataTable.module.scss";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import IPContext from "@/store/IPContext";

const ipToInt = (ip: string | undefined) => {
  if (ip === undefined) return -1;
  return ip.split(".").map(parseFloat).reduce((int, value) => int * 256 + +value);
}

const IPDataTable: React.FC<Props> = (props) => {

  const ctx = useContext(IPContext)

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
            <th>{ctx?.latitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.asn.organization"/></th>
            <th>{ctx?.latitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.hostname"/></th>
            <th>{ctx?.latitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.user.agent"/></th>
            <th>{ctx?.latitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.user.agent.comment"/></th>
            <th>{ctx?.latitude}</th>
          </tr>
          <tr>
            <th><FormattedMessage id="ip.data.table.user.agent.raw"/></th>
            <th>{ctx?.latitude}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IPDataTable;
