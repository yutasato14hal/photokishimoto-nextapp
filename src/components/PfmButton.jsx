import React from 'react';
import Styles from "@/styles/shared/PfmButton.module.css"

export default function PfmButton({ title = "写真検索サイトへ" }) {
  return (
    <a href="https://www.kishimoto.com/category" target="_blank" rel="noopener noreferrer">
      <button className={Styles.buttonOutline}>
        {title}
      </button>
    </a>
  );
}
