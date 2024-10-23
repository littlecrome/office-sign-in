export const Button = (
    { children, variant = 'primary', extraClasses = '', onClick } :
    React.PropsWithChildren & {
        variant?: 'primary' | 'secondary' | 'ghost'
        extraClasses?: string,
        onClick: () => void
    }
) => {

    let classNames = 'text-white bg-blue-500 hover:bg-blue-700 rounded-md py-2 px-4'

    switch (variant) {
        case 'secondary':
            classNames += ' bg-transparent border-blue-500';
            break;
        case 'ghost':
            classNames += ' bg-transparent text-gray-500 hover:bg-blue-100';
            break;
        default:
            break;
    }

    return <button onClick={ onClick } className={ classNames + ' ' + extraClasses }>
        {children}
    </button>
}
