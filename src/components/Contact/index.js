import React from "react";

const Contact = props => {
	const [inputs, setInputs] = React.useState({});
	const [status, setStatus] = React.useState("");

	const handleSubmit = async event => {
		event.preventDefault();

		setStatus("--loading");

		const res = await fetch(
			"https://erv7gzy1z0.execute-api.us-west-2.amazonaws.com/dev/email/send",
			{
				method: "POST",
				body: JSON.stringify(inputs),
				headers: { "content-type": "application/json" }
			}
		);

		setStatus("");

		if (res.status !== 200) {
			setStatus("--failed");
			return;
		}

		setStatus("--success");
	};

	const handleChange = event => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	return (
		<section className="section-contact" ref={props.mref}>
			<h1 className="heading-primary u-margin-bottom-big u-margin-top-big">
				Contact
			</h1>
			<div className="section-contact__content">
				<div className="section-contact__content--1">
					<h2 className="heading-secondary">
						Want me to build a website for you?
					</h2>
					<a
						className="section-contact__content--fiverr paragraph"
						href="https://www.fiverr.com/ishanshukla"
					>
						Check out my Gigs
					</a>
				</div>
				<div className="section-contact__content--2">
					<h2 className="heading-secondary">
						Want me to work for your company?
					</h2>
					<form className="form" onSubmit={handleSubmit}>
						<div className="form__group">
							<input
								id="name"
								className="form__input"
								type="text"
								placeholder="Name"
								name="name"
								required
								onChange={handleChange}
							/>
							<label htmlFor="name" className="form__label">
								Name
							</label>
						</div>
						<div className="form__group">
							<input
								id="email"
								className="form__input"
								type="email"
								placeholder="Email Address"
								name="email"
								required
								onChange={handleChange}
							/>
							<label htmlFor="email" className="form__label">
								Email Address
							</label>
						</div>
						<div className="form__group">
							<textarea
								id="content"
								className="form__input"
								rows="5"
								placeholder="Message"
								name="content"
								required
								onChange={handleChange}
							/>
							<label htmlFor="content" className="form__label">
								Message
							</label>
						</div>
						<button
							className={
								"form__submit-btn form__submit-btn" + status
							}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
