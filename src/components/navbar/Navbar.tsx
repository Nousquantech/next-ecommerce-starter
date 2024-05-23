import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Menu from "./menu/Menu";
import Image from "next/image";
import SearchBar from "./searchbar/SearchBar";
import NavIcons from "./navicons/NavIcons";
const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* MOBILE */}
      <div className={styles.NVBMenu}>
        <Link href="/">
          <div className={styles.NVBLogo}>Rum&Rose</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className={styles.NVBSSMenu}>
        {/* LEFT */}
        <div className={styles.NVBSSLeft}>
          <Link href="/">
            <Image src="/logo.svg" alt="Rum&Rose" width={132} height={36} />
          </Link>
          <div className={styles.NVBSSLeftLinks}>
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.NVBSSRight}>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
