import React from "react";

export const Input = (
    { placeholder = '', value, onChange } :
    {
        placeholder?: string,
        value: string,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    }
) => {
    return <input type="text" className='border-2 rounded-md py-2 px-4' placeholder={ placeholder } value={ value } onChange={ onChange } />
}
