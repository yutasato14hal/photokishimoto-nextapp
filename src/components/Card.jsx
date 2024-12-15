// Card.jsx
"use client"
import React from "react";
import Image from "next/image";
import styles from "@/styles/Card.module.css";

export default function Card({ imageSrc, title, description }) {
  return (
    <div className={styles.card}>
      {/* 表面 */}
      <div className={`${styles.cardFace} ${styles.cardFront}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={styles.cardImage}
          />
          <div className={styles.cardTitle}>{title}</div>
        </div>
      </div>

      {/* 裏面 */}
      <div className={`${styles.cardFace} ${styles.cardBack}`}>
        <p className={styles.cardDescription}>{description}</p>
        <button className={styles.cardButton}>詳しくはこちら</button>
      </div>
    </div>
  );
}
