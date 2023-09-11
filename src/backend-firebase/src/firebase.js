import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfRTtB--g_WbyZ8YHz-i-4ABlilH_-O1k",
  authDomain: "shop-ecom-258d7.firebaseapp.com",
  databaseURL: "https://shop-ecom-258d7-default-rtdb.firebaseio.com",
  projectId: "shop-ecom-258d7",
  storageBucket: "shop-ecom-258d7.appspot.com",
  messagingSenderId: "453020327008",
  appId: "1:453020327008:web:c1a16089961867c2457705",
  measurementId: "G-B26NXRYTV6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);

