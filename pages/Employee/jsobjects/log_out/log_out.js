export default {
	Logout: () => {
		Object.keys(appsmith.store).map(key =>storeValue(key, undefined));
			navigateTo('Login')
	}
}