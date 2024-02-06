import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.maintext}>
          <h2>Don’t Know The Weather Use <strong>SKY-CAST</strong></h2>
          <ol>
            <li>Search for a location</li>
            <li>Find out the current weather situation, tomorrow’s forecast, or a 6-day forecast</li>
          </ol>
        </div>
      </div>
    </>
  );
}