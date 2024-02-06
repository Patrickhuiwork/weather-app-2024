import React from 'react'
import styles from './WeatherCard.module.css'

export default function index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Location</h2>
          <p>Country</p>
          <p>Last Updated</p>
        </div>
        <div className={styles.right}>
          <h2>Temperature C</h2>
          <p>Weather Condition</p>
        </div>
      </div>

      <div className={styles.container2}>
        <h2>Tommorow Forecast</h2>
        <div className={styles.fiveboxes}>
        <div className={styles.weathercontainer}>
            <div>
              <p>Weather Condition</p>
            </div>
            <div>
              <p>time</p>
              <p>Temperature</p>
            </div>
          </div>
          <div className={styles.weathercontainer}>
            <div>
              <p>Weather Condition</p>
            </div>
            <div>
              <p>time</p>
              <p>Temperature</p>
            </div>
          </div>
          <div className={styles.weathercontainer}>
            <div>
              <p>Weather Condition</p>
            </div>
            <div>
              <p>time</p>
              <p>Temperature</p>
            </div>
          </div>
          <div className={styles.weathercontainer}>
            <div>
              <p>Weather Condition</p>
            </div>
            <div>
              <p>time</p>
              <p>Temperature</p>
            </div>
          </div>
          <div className={styles.weathercontainer}>
            <div>
              <p>Weather Condition</p>
            </div>
            <div>
              <p>time</p>
              <p>Temperature</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
