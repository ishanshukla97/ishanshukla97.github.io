import React from "react";
import AnimText from "../AnimText";

const Header = props => {
	const sentenceArr = ["Think", "Believe", "Pursue", "Make", "do"];
	const max = sentenceArr.length;

	const [current, setCurrent] = React.useState(2);
	const [prev, setPrev] = React.useState(1);

	React.useEffect(() => {
		const interval = setInterval(() => {
			console.log(current, prev);
			if (current >= max) {
				setCurrent(1);
				setPrev(max);
				return;
			}
			if (prev >= max) {
				setCurrent(current + 1);
				setPrev(1);
				return;
			}

			setCurrent(current + 1);
			setPrev(prev + 1);
		}, 3000);
		return () => clearInterval(interval);
	}, [current, max, prev]);

	return (
		<header className="header">
			<div className="header__text">
				<h1 className="heading-primary">Hi, I'm Ishan</h1>
				<h2 className="heading-tertiary">
					Javascript Developer from Delhi. I build software that
					excites people
				</h2>
				<div className="abs-center">
					{sentenceArr.map((s, idx) => {
						return (
							<AnimText
								text={s}
								active={idx + 1 === current}
								inactive={idx + 1 === prev}
							/>
						);
					})}
				</div>
			</div>
		</header>
	);
};

export default Header;
