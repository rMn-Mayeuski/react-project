// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAqtcgfCpv8TRtR_2r2UMZ_IFufcMVPfvo",
	authDomain: "pixema---movie-platform.firebaseapp.com",
	databaseURL: "https://pixema---movie-platform-default-rtdb.firebaseio.com",
	projectId: "pixema---movie-platform",
	storageBucket: "pixema---movie-platform.appspot.com",
	messagingSenderId: "84355426661",
	appId: "1:84355426661:web:e5e91484650c621845198c",
	measurementId: "G-VGY1E6QE57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);