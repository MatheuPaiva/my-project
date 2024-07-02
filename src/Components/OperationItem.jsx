export const OperationItem = ({ reverse, title, icon, text }) => {
    return !reverse ? (
        <div className="w-full flex gap-8 mx-auto mb-20">
            <div className="w-1/5 flex justify-center items-center operation-icon">
                <div className="w-40 h-40 rounded-full border-4 border-teal-800 flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <div className="w-4/5 flex flex-col justify-center operation-content">
                <h2 className="text-teal-800 font-bold text-2xl mb-3 operation-title">{title}</h2>
                <p className="w-11/12 opacity-75 leading-8 text-justify operation-text">{text}</p>
            </div>
        </div>
    ) : (
        <div className="w-full flex gap-8 mx-auto mb-20">
            <div className="w-4/5 flex flex-col justify-center operation-content">
                <h2 className="text-teal-800 font-bold text-2xl mb-3 text-right operation-title">{title}</h2>
                <p className="w-11/12 opacity-75 leading-8 text-justify ml-auto operation-text">{text}</p>
            </div>
            <div className="w-1/5 flex justify-center items-center operation-icon">
                <div className="w-40 h-40 rounded-full border-4 border-teal-800 flex items-center justify-center">
                    {icon}
                </div>
            </div>
        </div>
    )
}