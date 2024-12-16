import React from 'react';
import styles from '@/styles/shared/Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.contact}>
          お問い合わせ　TEL：03-5305-3639　E-Mail：
          <a href="mailto:photo@kishimoto.com">photo@kishimoto.com</a>
        </p>
      </div>
      <p className={styles.companyInfo}>
        <a href="" className={styles.companyInfoLink}>
          会社情報
        </a>
      </p>
      <p className={styles.copyright}>&copy;PHOTOKISHIMOTO2023</p>
    </footer>
  );
}
