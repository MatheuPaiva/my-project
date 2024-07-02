export const DepartamentoOperacional = ({children}) => {
    return (
        <div className="p-10">
            <div className="container flex mx-auto mb-7">
                <h1 className="text-4xl font-bold mx-auto border-b-2 border-b-teal-800 text-teal-800 pb-6 mb-5 departmentTitle relative teal">Processos internos</h1>
            </div>
            <div className="container mx-auto">{children}</div>
        </div>
    )
}