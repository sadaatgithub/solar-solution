import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} min-h-screen py-28 lg:px-16 px-8`}>{children}</div>
  )
}

export default Container