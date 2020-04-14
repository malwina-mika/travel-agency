export const formatTime = formatSeconds => {
  if (typeof formatSeconds === 'number' && parseInt(formatSeconds) > 0) {
    const seconds = Math.floor(formatSeconds % 60)
    const minutes = Math.floor((formatSeconds / 60) % 60)
    const hours = Math.floor(formatSeconds / 3600)

    const formatNumbers = number => {
      if ((number + '').length < 2) {
        return '0' + number
      } else {
        return number
      }
    }

    return `${formatNumbers(hours)}:${formatNumbers(minutes)}:${formatNumbers(
      seconds,
    )}`
  } else {
    return null
  }
}