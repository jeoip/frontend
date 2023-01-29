import Props from "@/types/Props";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Brand.module.scss";
import { FormattedMessage } from "react-intl";

export interface BrandProp {
  iconSize?: number,
  row: boolean,
}

const Brand = (props: React.PropsWithChildren<Props & BrandProp>) => {

  const iconSize = props.iconSize || 38

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <a href="https://jeoip.ir/" target="_blank" className={`${styles["brand__link"]}`}>
        {!props.row && (
          <Image
            src="/jeo.svg"
            width={iconSize}
            height={iconSize}
            alt="jeoip"
          />
        )}
        <div className="d-flex flex-row justify-content-center">
          {props.row && (
            <Image
              src="/jeo.svg"
              width={iconSize}
              height={iconSize}
              alt="jeoip"
            />
          )}
          <p className={`${styles["brand__title"]} my-auto mx-1`}>JeoIP</p>
        </div>
      </a>
      <p className={`${styles["brand__subtitle"]} mt-1`}>
        <FormattedMessage id="brand.subtitle"/>
      </p>
    </div>
  );
};

export default Brand;
