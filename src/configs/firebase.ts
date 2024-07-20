import  {initializeApp,type FirebaseAppSettings, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions  = {
  
    apiKey: import.meta.VITE_API_KEY,
    authDomain: import.meta.VITE_AUTH_DOMAIN,
    projectId: import.meta.VITE_PROJECT_IDprojectId ,
    storageBucket: import.meta.VITE_STORAGE_BUCKET ,
    messagingSenderId:  import.meta.VITE_MESSAGING_SENDER_ID ,
    appId:  import.meta.VITE_APP_ID
  };
//initialiser firebase
  const app = initializeApp(firebaseConfig);
  
//initialiser firebase authentification et recuperer les services
  const auth= getAuth(app);
  export {auth};
