import { useParams } from 'react-router-dom';
import Summoners from './Summoners';

export default function SummonerName() {
	const { summonerName } = useParams();

	return <Summoners summonerName={summonerName} />;
}
