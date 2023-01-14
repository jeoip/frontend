import BrandProp from "@/types/props/Brand";
import Image from "next/image";
import React from "react";
import styles from "./Brand.module.scss";

const Brand = (props: React.PropsWithChildren<BrandProp>) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {!props.row && (
        <Image
          className="my-auto"
          src="/jeo.svg"
          width={38}
          height={38}
          alt="jeoip"
        />
      )}
      <div className="d-flex flex-row justify-content-center">
        <p className={`${styles["brand__title"]} my-auto mx-1`}>JeoIP</p>
        {props.row && (
          <Image
            className="my-auto"
            src="/jeo.svg"
            width={38}
            height={38}
            alt="jeoip"
          />
        )}
      </div>
      <p className={`${styles["brand__subtitle"]} mt-1`}>
        ابزاری برای دریافت اطلاعات آی پی
      </p>
    </div>
  );
};

export default Brand;
