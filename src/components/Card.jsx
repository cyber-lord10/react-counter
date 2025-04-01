import PropTypes from 'prop-types';
import { useState } from 'react';

function Card({
	imgType,
	title,
	initVal,
	incBtnTxt,
	decBtnTxt,
	resetBtnTxt,
	increaseBy,
	decreaseby,
}) {
	const imageTypes = {
		vite: new URL('/logos/vite.svg', import.meta.url).href,
		react: new URL('../assets/logos/react.svg', import.meta.url).href,
		cyber: new URL('../assets/images/cyber.jpeg', import.meta.url).href,
	};

	const imgUrl = imageTypes[imgType] ?? imageTypes.cyber;

	const [count, setCount] = useState(initVal ?? 0);

	const increment = (increaseBy = 1) => {
		setCount(count + increaseBy);
	};

	const decrement = (decreaseby = 1) => {
		setCount(count - decreaseby);
	};

	const reset = () => {
		setCount(initVal ?? 0);
	};

	return (
		<div className='card'>
			<img
				className='card__img'
				src={imgUrl}
				alt={title ?? 'The card image of the counter.'}
			/>
			<h2 className='card__title'>{title ?? 'Results'}:</h2>
			<div className='card__results'>{count}</div>
			<div className='card__btn-container'>
				<button onClick={() => decrement(decreaseby)}>
					{decBtnTxt ?? 'decrement'}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='24px'
						viewBox='0 -960 960 960'
						width='24px'
						fill='#e8eaed'
					>
						<path d='M200-440v-80h560v80H200Z' />
					</svg>
				</button>
				<button onClick={reset}>
					{resetBtnTxt ?? 'increment'}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='24px'
						viewBox='0 -960 960 960'
						width='24px'
						fill='#e8eaed'
					>
						<path d='M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z' />
					</svg>
				</button>
				<button onClick={() => increment(increaseBy)}>
					{incBtnTxt ?? 'increment'}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='24px'
						viewBox='0 -960 960 960'
						width='24px'
						fill='#e8eaed'
					>
						<path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
					</svg>
				</button>
			</div>
		</div>
	);
}

Card.propTypes = {
	imgType: PropTypes.oneOf(['vite', 'react', 'cyber']),
	title: PropTypes.string,
	incBtnTxt: PropTypes.string,
	decBtnTxt: PropTypes.string,
	resetBtnTxt: PropTypes.string,
};

export default Card;
