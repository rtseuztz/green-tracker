import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, get, query} from 'firebase/database';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaEFSW6LBqYSkOUBoUXoo1XQpcBohqe-w",
    authDomain: "my-first-app-25925.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://my-first-app-25925-default-rtdb.firebaseio.com",
    projectId: "my-first-app-25925",
    storageBucket: "my-first-app-25925.appspot.com",
    messagingSenderId: "906302236012",
    appId: "1:906302236012:ios:a0dc2c8dff4b9f4b143f49",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase()

export var currentUser = undefined;

const userRef = ref(db, 'user');
export const getUser = async (uuid:string) => {
    const path = 'user/ ' + uuid;
    const newRef = ref(db, path);
    console.log("path is " + path);
    const val = await get(newRef)
    return val.val();
    // onValue( ref(db, path), (snapshot) => {
    //     const data = snapshot.val();
    //     console.log("data is " + snapshot);
    //     console.log("data is " + data);
    //     return data;
    // })
}  
export const addUser = (uuid: string, name: string) => {
    set(ref(db, 'user/ ' + uuid), {
        isalive: true,
        name: name,
    }, )
}