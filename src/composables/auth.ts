import { auth } from "@/configs/firebase"
import { signInWithEmailAndPassword, type User } from "firebase/auth"
import { computed, ref } from "vue"
import { errorMessages } from "vue/compiler-sfc"
import { useAuth as usevueuseauth } from "@vueuse/firebase" 

const getUser = computed({
    get: ()=> usevueuseauth(auth).user,
    set: (newUser: User|null) => {
        user.value = newUser
    }

})
const user = ref(getUser.value)
const useAuth = () => {

    const login = async (email:string,password:string)=>{
    try {
        const userCredential =await   signInWithEmailAndPassword(auth, email , password )
    //    user.value = userCredential.user;
        
    } catch (error:any) {
        const errorCode  = error.message;
        console.error(`Erreur ${errorCode}: ${errorMessages}`)
    }

     // .then((userCredential) => {
        //   // Signed in 
        //   const user = userCredential.user;
        //   // ...
        // })
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        // });
    }
    const register = async ()=>{}
    const logout = async ()=>{}
    return {
        user,
        login,
        register,
        logout
    }
}

   export {useAuth};