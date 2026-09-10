import  { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../PlayersType/PlayersType';
import { TbTrash } from 'react-icons/tb';

interface ISelectedPlayerscardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayerscard = ({
  
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin
}: ISelectedPlayerscardProps) => {
  const handleDelete = (player: Iplayer) => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playername != player.playername,
    );

    setSelectedPlayers(restPlayers);
    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice);
  };
  return (
    <div className="grid grid-cols-1  max-w-[1080px] mx-auto gap-4 p-2 mt-6">
      {selectedPlayers.map((player) => {
        return (
          <div className="flex justify-between gap-2 items-center border-2 border-gray-200 py-6 px-10 rounded-3xl ">
            <div className="flex gap-2">
              <img
                className='lassName="w-full h-48 object-cover'
                src={player.playerimage}
                alt=""
              />
              <div className="mt-3 gap-2">
                <h2 className="font-bold text-2xl">{player.playername}</h2>
                <p className="text-1xl">{player.playertype}</p>
              </div>
            </div>
            <div>
              <span
                className="text-red-500 font-bold cursor-pointer"
                onClick={() => handleDelete(player)}
              >
                <TbTrash />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayerscard;
