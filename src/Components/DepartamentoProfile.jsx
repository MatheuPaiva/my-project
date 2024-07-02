import icon from "../assets/logo_direc_site_250150.png";

export const DepartamentoProfile = ({ name, desc, leader, leaderDesc }) => {
    return (
        <div className='bg-teal-800 h-50vh bg-opacity-40 backdrop-blur-sm'>
            <div className=" flex mx-auto h-full">
                <div className="w-1/2 bg-teal-700 bg-opacity-40 backdrop-blur-sm p-8 flex justify-center items-center flex-col left-profile">
                    <img src={icon} alt="" width={250} className="m-6" />
                    <h2 className="font-bold text-white">{ leader }</h2>
                    <small className="text-white opacity-90">{ leaderDesc }</small>
                </div>
                <div className="w-1/2 p-10 right-profile">
                    <h1 className="text-4xl font-bold text-center text-white border-b-2 border-b-white pb-6 mb-5 departmentTitle relative">Sobre a { name }</h1>
                    <p className="text-white opacity-90 italic text-center leading-relaxed">{ desc }</p>
                </div>
            </div>
        </div>
    )
}