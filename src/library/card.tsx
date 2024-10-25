import React from "react";

export const Card = (
    { children, isHighlighted = false, onClick }: React.PropsWithChildren & { isHighlighted?: boolean, onClick: () => void }
) => {
    return <div onClick={() => onClick()} className={ (isHighlighted ? 'bg-blue-50' : 'bg-white') + ' card relative basis-60 min-h-40 max-w-sm py-6 pl-6 pr-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' }>
        {children}
    </div>

}
