import $ from 'jquery';

let KinveyRequester = (function () {
    const appId = "kid_SyKGMjgQe";
    const appSecret = "aa6d6e1c96164749945c7386def775bd";
    const baseUrl = "https://baas.kinvey.com/";

    function makeAuth(type) {
        switch (type) {
            case 'basic':
                return { 'Authorization': "Basic " + btoa(appId + ":" + appSecret) };
            case 'kinvey':
                return { 'Authorization': "Kinvey " + sessionStorage.getItem('authToken') };
            default: break;
        }
    }

    function login(username, password, auth) {
        let header = makeAuth(auth);
        return $.ajax({
            method: "POST",
            url: baseUrl + `user/${appId}/login`,
            headers: header,
            data: JSON.stringify({username, password}),
            contentType: "application/json"
        });
    }

    function logout(auth) {
        let header = makeAuth(auth);
        return $.ajax({
            method: "POST",
            url: baseUrl + `user/${appId}/_logout`,
            headers: header
        });
    }

    function register(username, password, auth) {
        let header = makeAuth(auth);
        return $.ajax({
            method: "POST",
            url: baseUrl + `user/${appId}`,
            headers: header,
            data: {username, password}
        });
    }

    function loadPosts(auth) {
        let header = makeAuth(auth);
        return $.ajax({
            method: "GET",
            url: baseUrl + `appdata/${appId}/posts`,
            headers: header
        });
    }

    function createPost(title, content, auth) {
        let header = makeAuth(auth);
        return $.ajax({
            method: "POST",
            url: baseUrl + `appdata/${appId}/posts`,
            headers: header,
            data: JSON.stringify({Title:title, Content:content}),
            contentType: "application/json"
        });
    }
    function loadPost(auth, id) {
        let header = makeAuth(auth);
        return $.ajax({
            method: "GET",
            url: baseUrl + `appdata/${appId}/posts/${id}`,
            headers: header
        });
    }


    //
    // function findPostById(postId) {
    //     return $.ajax({
    //         method: "GET",
    //         url: baseUrl + `appdata/${appId}/posts/${postId}`,
    //         headers: authHeaders
    //     });
    // }
    //
    // function editPost(postId, title, content) {
    //     return $.ajax({
    //         method: "PUT",
    //         url: baseUrl + `appdata/${appId}/posts/${postId}`,
    //         headers: authHeaders,
    //         data: JSON.stringify({title, content}),
    //         contentType: "application/json"
    //     });
    // }

    return {
        login,
        register,
        loadPosts,
        createPost,
        loadPost,
        // findPostById,
        // editPost,
        logout
    }
})();

export default KinveyRequester;