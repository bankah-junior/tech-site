import {pricing2, pricing3} from '../../public/links'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='grid grid-cols-2 gap-8 my-[50px] mx-[5%] w-[90%] lg:w-[90%] lg:ml-[7%] lg:mr-[3%] h-fit mb-[130px]'>
      <div className='col-span-2 md:col-span-1'>
       <h3 className='bg-violet-700/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900'>Career</h3>
       <h1 className='text-5xl font-bold my-8'>We are more than just a company</h1>
       <p className='col-span-7 md:col-span-5 text-gray-500 text-lg font-semibold'>
         Discover a rewarding career journey with us. We offer exciting opportunities, a collaborative 
         environment, and the chance to make a meaningful impact in the world of IT Consulting
       </p>
       <Link href="" >
        <button className='text-white bg-violet-600 rounded-[60px] py-4 px-6 mt-8 font-semibold text-lg'>Career Oportunities</button>
        </Link>
      </div>
      <div className='col-span-2 md:col-span-1 w-full flex flex-col justify-right items-right relative '>
       <Image src={pricing3} alt="career galary" className='rounded-md w-[25rem] transform -rotate-12 absolute top-0 right-0'/>
       <Image src={pricing2} alt="career galary" className='rounded-md w-[25rem] transform rotate-12 absolute top-[40%] right-[160px]'/>
      </div>
    </header>
  )
}

export default Header