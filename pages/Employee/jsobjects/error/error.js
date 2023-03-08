export default {
	add: async () => {
		try {
			await insert_employee.run();
		} catch (e) {
			showAlert(`${e.message}: รหัสพนักงานซ้ำ Id ${add_employee_id.inputText}.`,'warning' )
		}
	}
}