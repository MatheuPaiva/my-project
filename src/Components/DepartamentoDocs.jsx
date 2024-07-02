import { FaCalendar } from "react-icons/fa";

export const DepartamentoDocs = ({editaisLink, children}) => {
    return (
        <div className='h-32 w-full flex items-center justify-center gap-28 mb-20 docList'>
            <a href={editaisLink} className="cursor-pointer" target="_blank" rel="noreferrer">
                <div className="bg-teal-950 w-20 h-20 rounded-md flex items-center justify-center mx-auto">
                    <FaCalendar color="#fff" size={26}/>
                </div>
                <p className="text-center mt-3 text-teal-800">Editais</p>
            </a>
            {children}
        </div>
    )
}