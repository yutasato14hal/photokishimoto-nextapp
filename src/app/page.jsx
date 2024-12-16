"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/public/images/Kishimoto_Ken.jpg";
import ActivityIcon from "@/public/images/icons/creativeIcon.svg";
import styles from "./page.module.css";
import PfmButton from "@/components/PfmButton";
import Card from "@/components/Card";
import PhotographImage from "@/public/images/Activity1.svg";
import LendingImage from "@/public/images/Activity2.svg";
import CreativeImage from "@/public/images/Activity3.svg";
import ArchiveImage from "@/public/images/ArchiveImage.JPG";
export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <div className={styles.sectionContainer}>
        <section className={`${styles.sectionAbout} ${styles.section}`}>
          <article>
            　岸本健が写真家としてスポーツの世界と関わるようになったのは、1958年のことです。それから6年後の1964年、東京オリンピックが開催されました。
            <br />
            　東京オリンピックは、岸本健がフォート・キシモトを立ち上げる大きな原動力となりました。
            <br />
            　私たちはスポーツの「魅力」「力」「意義」を多くの人々に伝えたいという想いで活動をしてきました。
            <br />
            　私たちの仕事が、スポーツの歴史の記録となり、これからのスポーツ文化発展の一助となることを願っています。
          </article>
          <div className={styles.aboutImage}>
            <Image
              src={About}
              alt="岸本健の写真"
              className={styles.responsiveImage}
              priority
            />
          </div>
        </section>
        <section className={`${styles.sectionActivity} ${styles.section}`}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Image src={ActivityIcon} alt="activityのロゴ" />
              <h2>わたしたちの活動</h2>
              <span>Activity</span>
            </div>
            <PfmButton />
          </div>
          <p className={styles.desc}>
            スポーツムーブメントの普及・発展に貢献できるよう、日々活動しています
            <br />
            半世紀以上にわたる活動で培ったノウハウ・ネットワークを活用してお客様をサポートいたします
          </p>
          <div className={styles.cardContainer}>
            <Card
              imageSrc={PhotographImage}
              title="撮影"
              description={
                <>
                  オリンピック、アジア大会、ユニバーシアード大会等の総合大会、
                  <br />
                  サッカーFIFAワールドカップ、世界陸上など各競技のビッグイベントから、
                  国内競技大会まで、さまざまなスポーツシーンを撮影しています。
                  <br />
                  スポーツに限らず、会合、式典、イベント、会見など、さまざまな依頼撮影を承ります。
                </>
              }
            />
            <Card
              imageSrc={LendingImage}
              title="貸出"
              description="スポーツ写真ならびにスポーツの歴史及び史料写真等の
              リサーチと貸出を行っております。"
            />
            <Card
              imageSrc={CreativeImage}
              title="企画・制作"
              description={
                <>
                  フォート・キシモトは、スポーツムーブメントの普及・
                  発展に少しでも役立つよう、日々活動しています。
                  <br />
                  スポーツに関わる出版物、制作物、イベント、展示、
                  また調査コーディネート業務を承ります。
                </>
              }
            />
          </div>
        </section>
        <section className={`${styles.sectionArchive} ${styles.section}`}>
          <div className={styles.sectionTitle}>
            <Image src={ActivityIcon} alt="activityのロゴ" />
            <h2>アーカイブ</h2>
            <span>Archive</span>
          </div>
          <p className={styles.desc}>
            スポーツムーブメントの普及・発展に貢献できるよう、日々活動しています
            <br />
            半世紀以上にわたる活動で培ったノウハウ・ネットワークを活用してお客様をサポートいたします
          </p>
          <Image
            src={ArchiveImage}
            alt="写真の記録"
            width={350}
            height="auto"
            className={styles.archiveImage}
          />
          <div className={styles.archiveCon}>
            <div>
              <h3 className={styles.archiveSubTitle}>
                キシモトフォトアーカイブ
              </h3>
              <p className={styles.archives}>
                ネガフィルム写真点数　約174万枚
                <br />
                ポジフィルム写真点数　約100万枚
              </p>
              <h3 className={styles.archiveSubTitle}>大会取材歴</h3>
              <p>
                <span>オリンピック</span>
                <span>アジア大会</span>
                <span>ユニバーシアード</span>
                <span>パラリンピック</span>
                <span>FIFAワールドカップ</span>
                <span>世界陸上</span>
              </p>
              <small>
                その他　スペシャルオリンピックス、ワールドゲームスや各競技の国際大会、国内の各競技大会を長年にわたり取材しております。
              </small>
            </div>
          </div>
          <div className={styles.pfmButton}>
            <PfmButton 
            title="詳しくはこちら"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
