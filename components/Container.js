import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className}  py-28  md:px-10 sm:px-4 px-2`}>{children}</div>
  )
}

export default Container