export const Button = (
    { children, variant = 'primary', alignment = '', onClick } :
    React.PropsWithChildren & {
        variant?: 'primary' | 'secondary' | 'ghost'
        alignment?: string,
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

    if(alignment == "end") {
        classNames += ' self-end';
    }

    return <button onClick={ onClick } className={ classNames }>
        {children}
    </button>
}
