export const Button = (
    { children, variant = 'primary', onClick } :
    React.PropsWithChildren & {
        variant: 'primary' | 'secondary' | 'ghost'
        onClick: () => void
    }
) => {

        let classNames = 'text-white bg-blue-500 hover:bg-sky-700 rounded-md py-2 px-4'
        switch (variant) {
            case 'primary':
                classNames = ' border-red';
            default:
                break;


        }

        return <button onClick={onClick} className={classNames}>
            {children}
        </button>
}
