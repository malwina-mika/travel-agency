import React from 'react'
import styles from './DaysToSummer.scss'

class DaysToSummer extends React.Component {

  countDaysToSummer() {
    const currentTime = new Date()
    const startSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21))
    const endSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23))
    let daysToSummer

    if (currentTime >= startSummer && currentTime <= endSummer) {
      daysToSummer = 'It is summer'

    } else if (currentTime > endSummer) {
      const currentYear = currentTime.getUTCFullYear()
      const nextYear = currentYear + 1
      const nextSummer = new Date(Date.UTC(nextYear, 5, 21))
      const days = Math.floor((nextSummer.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24))
      daysToSummer = days + ' days to summer'
    }
    else if (currentTime < startSummer) {
      const days = Math.floor((startSummer.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24))
      daysToSummer = days + ' days to summer'
      if (Math.floor(days === 1)) {
        daysToSummer = '1 day to summer'
      }
    }
    return daysToSummer
  }

  render() {

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.countDaysToSummer()}!</h3>
      </div>)
  }
}



export default DaysToSummer