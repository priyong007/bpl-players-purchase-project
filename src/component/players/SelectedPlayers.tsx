import  { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../PlayersType/PlayersType';

import SelectedPlayerscard from './SelectedPlayerscard';
interface IselectedPlayersType {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number,
 setCoin:Dispatch<SetStateAction<number>>,
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin
  
}: IselectedPlayersType) => {
    if(selectedPlayers.length === 0){
      return <h2 className='font-bold text-3xl text-red-500 my-10 text-center'>No players available</h2>
    }
  return (
    <div className="grid grid-cols-1 max-w-[1080px] mx-auto gap-4 p-2 mt-6">
      {selectedPlayers.map((player:Iplayer, index:number) => {
        return <SelectedPlayerscard key={index} coin={coin} setCoin={setCoin} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>;
      })}
    </div>
  );
};

export default SelectedPlayers;
