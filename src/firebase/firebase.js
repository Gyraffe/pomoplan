import * as firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCggvtFT64_eU_VP4BWQxZcTGW0qMJv1iU",
    authDomain: "test-datebase.firebaseapp.com",
    databaseURL: "https://test-datebase.firebaseio.com",
    projectId: "test-datebase",
    storageBucket: "",
    messagingSenderId: "21662318139"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
    auth,
    firebase
};