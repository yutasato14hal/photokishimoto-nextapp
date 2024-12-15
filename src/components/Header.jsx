import React from "react";
import Image from "next/image";
import LogoImage from "@/public/images/logo.svg";
import Navigation from "@/components/Navigation";
import PfmButton from "@/components/PfmButton";
import Styles from "@/styles/shared/Header.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.innerHeader}>
        <div className={Styles.logo}>
          <Image
            src={LogoImage}
            alt="logoイメージ"
            height={50}
            width="auto"
            className={Styles.logo}
          />
        </div>
        <Navigation />
        <PfmButton />
      </div>
    </header>
  );
}
