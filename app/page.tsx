'use client';

import React, { useState } from "react";
import styles from './page.module.scss';
import { Alegreya } from "next/font/google";

const Home = (): React.JSX.Element => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [focusInput, setFocusInput] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Line</h1>
        <div className={styles.splitLine} />
        <div className={styles.inputBox}>
          <label
            htmlFor="account"
            className={focusInput === 'account' ? styles.activated : undefined}>
            電子郵件或帳號
          </label>
          <input 
            value={account}
            onChange={({ target }) => {
              setAccount(target.value);
            }}
            onFocus={() => {
              setFocusInput('account');
            }}
            onBlur={() => {
              setFocusInput('');
            }}
            id="account"
            type="text" />
        </div>
        <div className={styles.inputBox}>
          <label
            htmlFor="password"
            className={focusInput === 'password' ? styles.activated : undefined}>
            密碼
          </label>
          <input 
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            onFocus={() => {
              setFocusInput('password');
            }}
            onBlur={() => {
              setFocusInput('');
            }}
            id="password"
            type="password" />
        </div>
        <button
          onClick={() => {
            if (account === 'rytass' && password === 'aaa') {
              alert('登入成功');
            } else {
              alert('帳號密碼錯誤');
            }
          }}
          className={styles.loginBtn}
          type="button">
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;