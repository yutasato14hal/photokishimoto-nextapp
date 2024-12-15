import React from 'react'
import Link from 'next/link';
import Styles from "@/styles/shared/Nav.module.css"
export default function Navigation() {
  return (
    <nav className={Styles.nav}>
    <ul>
        <li>
            <Link className={Styles.link} href="/photograph">
                撮影
            </Link>
        </li>
        <li>
            <Link className={Styles.link} href="/lending">
                貸出
            </Link>
        </li>
        <li>
            <Link className={Styles.link} href="/creative">
                企画・制作
            </Link>
        </li>
        <li>
            <Link className={Styles.link} href="/price">
                料金
            </Link>
        </li>
        <li>
            <Link className={Styles.link} href="/archive">
                アーカイブ
            </Link>
        </li>
    </ul>
</nav>
  )
}
