import { AiFillDollarCircle } from 'react-icons/ai';
import logo from '../assets/logo.png';

export interface NavbarProps {
  coin: number;
}

export default function Navbar({ coin }: NavbarProps) {
  
  return (
    <nav className="bg-red-100">
      <div className='max-w-[1080px] mx-auto flex justify-between items-center'>
        <img src={logo} alt="" />
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Players</li>
          <li>Schedule</li>
        </ul>

        <h2 className="font-bold text-3xl text-black flex gap-1 items-center ">
          <AiFillDollarCircle /> 
          {coin}
        </h2>
      </div>
    </nav>
  );
}
