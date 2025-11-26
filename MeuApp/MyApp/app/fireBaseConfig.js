import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAlMzjHRgc_xtPU_cSVWHjIAEq0IB1-EBQ",
  authDomain: "aula16-1249e.firebaseapp.com",
  projectId: "aula16-1249e",
  storageBucket: "aula16-1249e.firebasestorage.app",
  messagingSenderId: "58817562722",
  appId: "1:58817562722:web:77be45576b5126a8ac693b"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);


