import Props from "@/types/props/Props";
import styles from "@/styles/Spinner.module.scss";

const Spinner: React.FC<Props> = (props) => {
  return (
    <div className="d-flex flex-row">
      <div
        className={`${styles.spinner} ${props.className} spinner-border`}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
