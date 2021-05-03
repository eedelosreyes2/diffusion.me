import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
	const [state, handleSubmit] = useForm('mqkwedke');

	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}

	return (
		<form onSubmit={handleSubmit} method="POST">
			<input
				id="email"
				type="email"
				name="email"
				placeholder="you@email.com"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<button
				type="submit"
				className="join-button-white"
				alt="Join"
				disabled={state.submitting}
			>
				Join
			</button>
		</form>
	);
}
