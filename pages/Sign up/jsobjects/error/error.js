export default {
   error: async () => {
             
                        try{ 
                                    await sign_up.run() ;
													
                                    showAlert(' อีเมลลงทะเบียนสำเร็จ', 'success') ;
																		navigateTo('Login');
                                                                               
                                    } catch (error) {
                                                                                    showAlert('User already registered', 'error')
                                                                             }
                        }
    }
