import './index.css';
import Summoners from './Summoners';

function App() {
	const summonerName = 'DontThinkJustDo';
	return (
		<div className='App'>
			<Summoners summonerName={summonerName} />
		</div>
	);
}

export default App;
