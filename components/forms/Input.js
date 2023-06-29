import React from 'react'

const Input = ({labelId,type,isSubmitting,value,required,onChange,children}) => {
  return (
    <div className="flex flex-col  gap-2 w-full">
              <label htmlFor={labelId}>{children}</label>
              <input
                id={labelId}
                type={type}
                name={labelId}
                disabled={isSubmitting}
                value={value}
                className="border p-2 focus:outline-orange-500 rounded-md"
                onChange={onChange}
                required={required}
              />
            
          </div>
  )
}

export default Input