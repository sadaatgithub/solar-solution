import React from 'react'
import Input from './Input'

const Form = ({config,isSubmitting,onChange,onSubmit,btnText}) => {

   
  return (
    <form onClick={onSubmit} className="flex flex-col gap-6 w-full">
        {config.map(input => (
            <Input key={input.labelId}
                    labelId={input.labelId}
                    type={input.type}
                    onChange={onChange}
                    value={input.value}
                    required={input.required}
            >
            {input.labelText}
            </Input>
        ))}

        <div><button type='submit'>

            {isSubmitting? "Submitting":`${btnText}`}
            
            </button></div>

    </form>
  )
}

export default Form