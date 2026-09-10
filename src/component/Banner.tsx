
import bannerimage from '../assets/banner-main.png'
export default function Banner() {
    
    return (
        <div className='grid grid-cols-1  items-center max-w-[1080px] mx-auto min-h-[400px] my-7  justify-center items-center bg-gradient-to-r from-orange-500 to-yellow-400'>
            <img className='mx-auto' src={bannerimage} alt="" />
            <div className='mx-auto justify-center text-center '>
                <h2  className='font-bold text-2xl'> Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <h6 className='my-4'>Beyond Boundaries Beyond Limits</h6>
            {/* <button className="btn btn-soft btn-secondary ">Secondary</button> */}
            </div>
            
        </div>
    )
}