"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./searchbar.module.css";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form className={styles.container} onSubmit={handleSearch}>
      <input
        type="text"
        name="name"
        placeholder="Search"
        className={styles.SBInput}
      />
      <button className={styles.SBButton}>
        <IoSearch size={22} color="#fff" />
      </button>
    </form>
  );
};

export default SearchBar;
