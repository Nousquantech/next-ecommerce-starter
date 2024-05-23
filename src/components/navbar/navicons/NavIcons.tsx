"use client";
import React, { useState } from "react";
import styles from "./navicons.module.css";
import { IoMdPerson, IoMdNotifications, IoMdCart } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "../cartmodal/CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  // TODO connect to real var
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <div className={styles.container}>
      <IoMdPerson
        size={24}
        className={styles.NIIcon}
        color="#A54123"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className={styles.NIProfileMenu}>
          <Link href="/">Profile</Link>
          <div className={styles.NILogout}>Logout</div>
        </div>
      )}
      <IoMdNotifications size={24} className={styles.NIIcon} color="#A54123" />
      <div
        className={styles.NICartWrap}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <IoMdCart size={24} color="#A54123" />
        <div className={styles.NICartBage}>2</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
