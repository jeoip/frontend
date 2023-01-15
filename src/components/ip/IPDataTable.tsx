import Props from "@/types/props/Props";
import styles from "@/styles/IPDataTable.module.scss";

const IPDataTable: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <p className={`${styles["data-table__title"]}`}>
        اطلاعاتی که درمورد این آی پی می دانیم:
      </p>
      <table className={`${styles["data-table__table"]}`}>
        <tbody>
          <tr>
            <th>141.012.345.123</th>
            <th>آدرس آی پی</th>
          </tr>
          <tr>
            <th>141.012.345.123</th>
            <th>آدرس آی پی</th>
          </tr>
          <tr>
            <th>141.012.345.123</th>
            <th>آدرس آی پی</th>
          </tr>
          <tr>
            <th>141.012.345.123</th>
            <th>آدرس آی پی</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IPDataTable;
