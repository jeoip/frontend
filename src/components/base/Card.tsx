import React from "react";
import styles from "../../styles/Card.module.scss";

const Card = (props: React.PropsWithChildren) => {
  return (
    <div className={styles["card__container"]}>
      {props.children}
    </div>
  );
}

export default Card;