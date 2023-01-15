import BrandProp from "@/types/props/BrandProps";
import Props from "@/types/props/Props";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Brand.module.scss";
import { FormattedMessage } from "react-intl";

const Brand = (props: React.PropsWithChildren<Props & BrandProp>) => {

  const iconSize = props.iconSize || 38

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {!props.row && (
        <Image
          src="/jeo.svg"
          width={iconSize}
          height={iconSize}
          alt="jeoip"
        />
      )}
      <div className="d-flex flex-row justify-content-center">
        <p className={`${styles["brand__title"]} my-auto mx-1`}>JeoIP</p>
        {props.row && (
          <Image
            className="my-auto"
            src="/jeo.svg"
            width={iconSize}
            height={iconSize}
            alt="jeoip"
          />
        )}
      </div>
      <p className={`${styles["brand__subtitle"]} mt-1`}>
        <FormattedMessage id="brand.subtitle"/>
      </p>
    </div>
  );
};

export default Brand;
