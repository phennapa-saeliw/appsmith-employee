export default {
	npass: async () => {
			if(n_pass.text.length <= 7){
			showAlert('Error กรุณาใส่พาสเวิร์ด 8 ตัวขึ้นไป','error')
				} else{
		if ((n_pass.text) === (cn_pass.text))
			console.log(update_user.run()) ,showAlert(' เปลี่ยนพาสเวิร์ดสำเร็จ.' , 'success') , closeModal('new_pass')  ;	
		else (console.log 
    	(showAlert(' กรุณากรอกพาสเวิร์ดให้ตรงกัน.', 'error')))
		}
                                                                            		
	},
	
	
	
	
	myFun2: async () => {
		//use async-await or promises
	}
}