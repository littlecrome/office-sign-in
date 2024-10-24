export const ModalSimple = (
    { children, isOpen = false }: React.PropsWithChildren & { isOpen: boolean }
) => {
    return <div className={ (isOpen ? 'fixed top-0 left-0 z-30 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30' : 'hidden') }>
        <div className="w-2/5 min-w-60 bg-white flex gap-4 p-4 rounded-lg flex-col h-screen-40 w-screen-40">
            { children }
        </div>
    </div>
}
