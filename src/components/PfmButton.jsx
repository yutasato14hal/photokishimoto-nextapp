import React from 'react';
import Styles from "@/styles/PfmButton.module.css"

export default function PfmButton() {
  return (
    <a href="https://www.kishimoto.com/category" target="_blank" rel="noopener noreferrer">
      <button className={Styles.buttonOutline}>
        写真検索サイトへ
      </button>
    </a>
  );
}
