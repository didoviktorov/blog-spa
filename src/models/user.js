import KinveyRequester from './KinveyRequester';

function userRegister(username, password) {
    alert('')
    KinveyRequester.register(username,password)
        .then((userInfo) => {
            saveSessesion(userInfo)
        });
}

function saveSessesion(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);
}

function logout() {
    sessionStorage.clear();
}

export {userRegister}
