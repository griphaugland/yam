import login from '../js/login.mjs';
import 'dotenv/config';

async function test() {
    const email = process.env.EMAIL 
    const password =  process.env.PASSWORD 
    try{
       const data = await login(email, password)
       if(data.accessToken){
           console.log("Login success")
        }
        else {
            throw new Error("Access Token not found")
        }
    }catch(error){
        throw new Error("Login failed")
    }
    try{
        const data = await login(password, email)
        if(data.accessToken){
            throw new Error("Login success")
         }
         else {
            throw new Error("Password and/or email are not correct, unauthorized")
         }
    }catch(error){
        console.log("Login failed")
    }
}
test()