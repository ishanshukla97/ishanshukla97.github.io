import React from "react";
import Social from "../Social";
import AnimText from "../AnimText";

const Header = props => {
	const sentenceArr = [
		"robust backends",
		"websites",
		"elegant UI",
		"modular systems"
	];
	const max = sentenceArr.length;

	const [current, setCurrent] = React.useState(2);
	const [prev, setPrev] = React.useState(1);

	React.useEffect(() => {
		const interval = setInterval(() => {
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
		}, 5000);
		return () => clearInterval(interval);
	}, [current, max, prev]);

	return (
		<header className="header">
			<div className="content-wrap">
				<div className="header__text">
					<h1 className="heading-primary">Hi, I'm Ishan</h1>
					<h2 className="heading-tertiary u-margin-bottom-medium">
						Javascript Developer from Delhi.
					</h2>
					<h3 className="heading-tertiary">
						I build
						<div className="anim-text">
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
					</h3>
					<p className="paragraph u-margin-top-big">
						I've always enjoyed learning technologies that change
						the world. I have a background in Biotechnology, more
						specifically bioinformatics. Since I wrote my first
						"Hello world" program I've been in love with the world
						of software development. Most of my day is spent writing
						javascript code and honing my current tech stack. I have
						a passion for designing modern UI with robust backend.
					</p>
				</div>
			</div>
			<Social />
		</header>
	);
};

export default Header;
