export const DepartamentoCover = ({ name, desc, img, children }) => {
    return (
        <div className='px-4 py-32 mx-auto bg-cover bg-center bg-fixed relative' style={{ backgroundImage: `url(${img})`, height: '125vh', maxHeight: "900px" }}>
            <div className='text-white  text-center z-10 relative'>
                <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>{name}</h1>
                <p className='text-grey-100 lg:3/5 mx-auto mb-5 font-primary'>{desc}</p>
            </div>
            <div className="w-full h-full absolute bg-black bg-opacity-50 top-0 left-0 z-0"></div>
            <div className="absolute bottom-0 left-0 w-100">
                {children}
            </div>
        </div>
    )
}