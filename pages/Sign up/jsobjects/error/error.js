export default {
	error: async () => {
		try {
			await sign_up.run();
		} catch (e) {
			showAlert(`${e.message}:${email_sign_up.inputText} this email is already registered.`,'warning' )
		}
	}
}