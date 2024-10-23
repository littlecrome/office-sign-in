export const ModalSimple = (
    { children, isOpen = false }: React.PropsWithChildren & { isOpen: boolean }
) => {
    return <div className={ (isOpen ? 'fixed top-0 left-0 z-30 w-screen h-screen flex items-center justify-center bg-slate-100' : 'hidden') }>
        <div className="bg-white flex gap-4 p-4 flex-col">
            { children }
        </div>
    </div>
}
