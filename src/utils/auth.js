import {auth} from './firebase';

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}
  
export  function signin(email, password) {
    return  auth().signInWithEmailAndPassword(email, password);
}

export function updateUser(name, avatar) {
    return auth().currentUser.updateProfile({
        displayName: name,
        photoURL: avatar
    })
}

export function signOut() {
    auth().signOut();
}

export function getUserInfo() {
    try{
        let user = auth().currentUser;
        let userData = {};
        if(user) {
            user.providerData.forEach(function (profile) {
                userData = {
                    userId: profile.uid,
                    name: profile.displayName,
                    email: profile.email,
                    avatar: profile.photoURL
                }    
            });
        
            return userData;
        }

    } catch(error) {
        throw new Error('error getting user info');
    }
    
    
}
