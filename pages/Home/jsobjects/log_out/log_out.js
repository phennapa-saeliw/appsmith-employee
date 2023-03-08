export default {
	Logout: () => {
		Object.keys(appsmith.store).map(key =>storeValue(key, undefined));
			showAlert('ออกจากระบบสำเร็จ.', 'success')
	//	clearStore()
			navigateTo('Login')
	}
}