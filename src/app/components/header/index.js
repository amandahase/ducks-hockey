'use client';
import styles from './header.module.css'
import Link from "next/link";
import React, { useState } from 'react'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <header className={styles.header}>
        <button onClick={toggleMenu}>Hamburger</button>
        <div>User Icon</div>
      </header>
      {isNavOpen &&
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/games">Games</Link>
            </li>
            <li>
              <Link href="/players">Players</Link>
            </li>
          </ul>
        </nav>
      }
    </>
  );
}
