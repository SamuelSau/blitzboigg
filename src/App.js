import './index.css';
import Summoners from './Summoners';
import SearchBox from './Components/SearchBox';

function App() {
	const summonerName = 'Happy';
	return (
		<div className='App'>
			<Summoners summonerName={summonerName} />
			<SearchBox />
		</div>
	);
}

export default App;
