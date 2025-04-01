import PropTypes from 'prop-types';
import Card from './components/Card.jsx';

function App() {
	return (
		<main>
			<Card
				imgType='vite'
				incBtnTxt='add'
				resetBtnTxt='restart'
				decBtnTxt='reduce'
			/>
		</main>
	);
}

App.propTypes = {};

export default App;
