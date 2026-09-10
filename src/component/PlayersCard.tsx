import  { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../PlayersType/PlayersType';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';


const PlayersCard = ({player, coin, setCoin, selectedPlayers, setSelectedPlayers} : {player:Iplayer, coin: number, setCoin:Dispatch<SetStateAction<number>>,selectedPlayers:Iplayer[], setSelectedPlayers:Dispatch<SetStateAction<Iplayer[]>>}) => {

    const [isSelected, setIsSelected] = useState(false)
    const handleSelectPlayer = ()=> {
      setIsSelected(true);
      const newCoinPrice = coin - player.price;
      if(newCoinPrice >= 0){
        setCoin(newCoinPrice)
        toast(`${player.playername} purchase succesfully`)
      }else{
        toast.error('Not enough coin')
      }
      // selected players logic
      setSelectedPlayers([...selectedPlayers, player])
      
      
    }
    return (
        <div className="card bg-base-100  shadow-sm ">
            <figure>
              <img className='lassName="w-full h-48 object-cover"'
                src={player.playerimage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body space-y-3 space-x-3">
            
              <h2 className="card-title"><FaUser /> {player.playername}</h2>
              <div className='flex gap-3'>
                <p className='font-semibold'>{player.country}</p>
                <button className='btn'>{player.playertype}</button>
              </div>

              <div className="divider"></div>
              <h2 className='font-semibold'>Rating</h2>
              <p className='font-semibold'>{player.battingstyle}</p>
              <p className='font-semibold'>{player.bowlingstyle}</p>

              <div className="card-actions justify-between items-center">
                <h2 className='text-2xl font-bold'>${player.price}</h2>
                <button
                onClick={()=> handleSelectPlayer()}
                // disabled ={isSelected === true ? true : false}
                // disabled ={isSelected ? true : false}
                disabled ={isSelected}
                 className="btn">{isSelected === true ? 'selected' : 'Choose players'}</button>
              </div>
            </div>
          </div>
    );
};

export default PlayersCard;