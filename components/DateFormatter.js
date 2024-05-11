import React from 'react'

const DateFormatter = ({ dateString }) => {
    const dateObject = new Date(dateString);
  const date =  dateObject.toLocaleDateString('en-US', {day : "numeric", month : "long", year : "numeric"})
  return (
    <span>Join:{date}</span>
  )
}

export default DateFormatter
