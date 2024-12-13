import React from "react";
import Image from "next/image";
import LogoImage from "@/public/images/logo.svg";
import Navigation from "@/components/Navigation";
import PfmButton from "@/components/PfmButton";
import Styles from "@/styles/Header.module.css";
export default function header() {
  return (
    <div className="header">
      <div className={Styles.innerHeader}>
        <div className="logo">
          
          <Image
            src={LogoImage}
            alt="logoイメージ"
            width={105}
            layout="intrinsic"
          />
        </div>
        <Navigation />
        <PfmButton />
      </div>
    </div>
  );
}
