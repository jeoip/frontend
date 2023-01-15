import Props from "@/types/props/Props";
import styles from "@/styles/IPDataTable.module.scss";
import { FormattedMessage } from "react-intl";

const IPDataTable: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <p className={`${styles["data-table__title"]}`}>
        <FormattedMessage id="ip.data.table.title"/>
      </p>
      <table className={`${styles["data-table__table"]}`}>
        <tbody>
          <tr>
            <th>آدرس آی پی</th>
            <th>141.012.345.123</th>
          </tr>
          <tr>
            <th>آدرس آی پی</th>
            <th>141.012.345.123</th>
          </tr>
          <tr>
            <th>آدرس آی پی</th>
            <th>141.012.345.123</th>
          </tr>
          <tr>
            <th>آدرس آی پی</th>
            <th>141.012.345.123</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IPDataTable;
