export const Alert = (
    { children, variant = 'info', isShown = true } :
    React.PropsWithChildren & {
        variant?: 'info' | 'warning' | 'error',
        isShown: boolean
    }
) => {

    let classNames = 'p-4 mb-4 text-sm  rounded-lg'

    switch (variant) {
        case 'info':
            classNames += ' text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400';
            break;
        case 'warning':
            classNames += ' text-yellow-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-yellow-300';
            break;
        case 'error':
            classNames += ' text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400';
            break;
        default:
            break;
    }

    return <div className={ (isShown ? '' : 'hidden ') + classNames } role="alert">
        {children}
    </div>
}
