import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../PlayersType/PlayersType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

export interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

export default function Players({
  playersPromise,
  coin,
  setCoin,
}: PlayersProps) {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState('available'); // available or selected
  const handleUpadteButtonType = (type: 'available' | 'selected') => {
    setButtonType(type);
  };

  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);
  console.log(buttonType);
  return (
    <div>
      <div className="flex justify-between gap-4 max-w-[1080px] mx-auto">
        <h2 className="text-2xl">
          {buttonType === 'available'
            ? 'Available players'
            : 'Selected players'}
        </h2>
        <div>
          <button
            onClick={() => handleUpadteButtonType('available')}
            className={`btn ${buttonType === 'available' ? 'btn-success' : ''} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleUpadteButtonType('selected')}
            className={`btn ${buttonType === 'selected' ? 'btn-success' : ''} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      {buttonType === 'available' ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        />
      )}
    </div>
  );
}
