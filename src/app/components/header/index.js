'use client';
import styles from './header.module.css'
import Link from "next/link";
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <IconButton color="primary" onClick={toggleMenu}>
          {isNavOpen ?
            <CloseIcon fontSize="large" />
          :
            <MenuIcon fontSize="large" />  
          }
        </IconButton>
        <AccountCircleIcon fontSize="large" />
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
    </div>
  );
}
