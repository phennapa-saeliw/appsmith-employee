export default {
	error: async () => {
		try {
				if(password_sign_up.text.length <= 7){
			showAlert('Error กรุณาใส่พาสเวิร์ด 8 ตัวขึ้นไป','error')
				} else {
			await sign_up.run();
			showAlert(' อีเมลลงทะเบียนสำเร็จ', 'success') ;
								navigateTo('Login');
				}
		} catch (e) {
			showAlert(`  ${email_sign_up.inputText}  : อีเมลนี้ลงทะเบียนแล้ว.` ,'warning' )
		
		}
	}
}