import Props from "@/types/Props";
import React from "react";
import styles from "@/styles/Card.module.scss";

const Card: React.FC<Props> = (props) => {
  return (
    <div className={`${styles["card__container"]} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;