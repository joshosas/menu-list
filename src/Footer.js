import React from 'react'

const Footer = ({ length }) => {

    const today = new Date();

  return (
    <footer>
      <p>{length} List {length > 1 ? 'Items' : 'Item'} Available</p>
      <p>copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
