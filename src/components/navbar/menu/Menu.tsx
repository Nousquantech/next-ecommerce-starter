"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import styles from "./menu.module.css";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IoMenu
        size={28}
        className={styles.MMHIcon}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className={styles.MMMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Shope</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
