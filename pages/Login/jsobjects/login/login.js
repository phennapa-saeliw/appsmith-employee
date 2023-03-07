export default {
onLogIn: async () => {
                    if((email.text !== '') && (password.text !=='')){
                        try{ 
                                    await sign_in.run() ;
                                                        const jwt = sign_in?.data?.access_token;
                                                        const user = sign_in?.data?.user;
                                                                    if(jwt) {
                                                                            storeValue('jwt', jwt);
                                                                            storeValue('user', user);
																																		     	  navigateTo('Home', {})
                                                                                    }
                                    } catch (error) {
                                                                                    showAlert('อีเมลหรือรหัสผ่านผิด.', 'error')
                                                                            }
                        }else{
                                        showAlert('❌ กรอกอีเมลและรหัสผ่าน.')
                                        }
    } ,
		google: async () => {
		{{
navigateTo('https://dscfsshcuqomvwcvryye.supabase.co/auth/v1/authorize',{
	provider: 'google' ,
	redirect_to: 'https://foong-appwrite.tk/app/personnel/home-63b77298a9f4ff7974e6b0df/edit?embed=true'

},
	 'SAME_WINDOW')}}
			 const jwt = get_user?.data?.access_token;
       const user = get_user?.data?.user;
         if(jwt) {
        storeValue('jwt', jwt);
       	storeValue('user', user); 
				navigateTo('Home', {})
				 }
	},
	
	
	
	continue: async () => {
		if(!appsmith.URL.fullPath.includes('#access_token=')) return;	
		appsmith.URL.fullPath.split('#') [1].split('&').forEach(i => {
			const [key, value] =i.split('=');
			storeValue(key,  value);
			const user = get_user.data?.user;
			storeValue('user', user);
		});
		navigateTo('Home');
	}
}
