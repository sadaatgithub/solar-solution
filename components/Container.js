import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className}  py-28  md:px-20 px-4`}>{children}</div>
  )
}

export default Container