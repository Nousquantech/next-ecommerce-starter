"use client";
import React from "react";
import styles from "./cartmodal.module.css";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className={styles.container}>
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div className=" z-20">
          <h2 className="text-xl">Shopping Cart</h2>
          <div className={styles.CMCartWrapper}>
            <div className={styles.CMImageContainer}>
              <Image
                src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className={styles.CMCImage}
              />
              <div className={styles.CMTextBlock}>
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className={styles.CMTextTitle}>
                    <h3 className={styles.CMTextProductName}>Product name</h3>
                    <div className={styles.CMTextProductPrice}>$49</div>
                  </div>
                  {/* DESC */}
                  <div className={styles.CMTextProductDesc}>available</div>
                </div>
                {/* BOTTOM */}
                <div className={styles.CMTextBottom}>
                  <span className={styles.CMTextQty}>Qty. 2</span>
                  <span className={styles.CMTextRemove}>Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/*  Bottom */}
          <div>
            <div className={styles.CMBSubtotal}>
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className={styles.CMBLorem}>
              Shipping and taxes calculated at checkout.
            </p>
            <div className={styles.CMBLoremButtonWrapper}>
              <button className={styles.CMBButtonOne}>View Cart</button>
              <button className={styles.CMBButtonTwo}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
