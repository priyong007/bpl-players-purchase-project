
import type { Dispatch, SetStateAction } from 'react';
import type { Iplayer } from '../../PlayersType/PlayersType';
import PlayersCard from '../PlayersCard';

export interface AvailablePlayersProps {
  players: Iplayer[],
  coin: number,
 setCoin:Dispatch<SetStateAction<number>>,
 selectedPlayers: Iplayer[], 
 setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

export default function AvailablePlayers({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) {
//   console.log('available players', players);
console.log(coin, setCoin, 'from availlable pla' )

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1080px] mx-auto gap-4 p-2 mt-6'>
      {players.map((player: Iplayer, index: number) => {
        return (
            <PlayersCard key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>
            
          
        );
      })}
    </div>
  );
}
