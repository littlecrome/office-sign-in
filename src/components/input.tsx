export const Input = (
    { children, placeholder = '', value, onChange } :
    React.PropsWithChildren & {
        placeholder?: string,
        value: string,
        onChange: () => void
    }
) => {
    return <input type="text" className='border-2 rounded-md py-2 px-4' placeholder={ placeholder } value={ value } onChange={ onChange } />
}
