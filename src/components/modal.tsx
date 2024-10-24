import { Button } from './button';

export const ModalSimple = (
    { children, title= '', onClose, isOpen = false }: React.PropsWithChildren & {
        title?: string,
        onClose: () => void
        isOpen: boolean
    }
) => {
    return <div className={ (isOpen ? 'fixed top-0 left-0 z-30 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30' : 'hidden') }>
        <div className="w-2/5 min-w-60 bg-white rounded-lg  h-screen-40 w-screen-40">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h2 className='text-1xl'>{ title }</h2>
                <Button variant='ghost' alignment='end' onClick={onClose}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </Button>
            </div>
            <div className="flex gap-4 flex-col p-4 md:p-5 space-y-4">
                { children }
            </div>
        </div>
    </div>
}
