import $ from 'jquery';

let KinveyRequester = (function () {
    const appId = "kid_SyKGMjgQe";
    const appSecret = "aa6d6e1c96164749945c7386def775bd";
    const baseUrl = "https://baas.kinvey.com/";
    const headers = {
        "Authorization": "Basic " + btoa(appId + ":" + appSecret)
    };
    const authHeaders = {
        "Authorization": "Kinvey " + sessionStorage.getItem('authToken')
    };

    function login(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + `user/${appId}/login`,
            headers: headers,
            data: JSON.stringify({username, password}),
            contentType: "application/json"
        });
    }

    function register(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + `user/${appId}`,
            headers: headers,
            data: {username, password}
        });
    }

    function loadPosts() {
        return $.ajax({
            method: "GET",
            url: baseUrl + `appdata/${appId}/posts`,
            headers: authHeaders
        });
    }

    function createPost(title, content) {
        return $.ajax({
            method: "POST",
            url: baseUrl + `appdata/${appId}/posts`,
            headers: authHeaders,
            data: JSON.stringify({title, content}),
            contentType: "application/json"
        });
    }

    function findPostById(postId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + `appdata/${appId}/posts/${postId}`,
            headers: authHeaders
        });
    }

    function editPost(postId, title, content) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + `appdata/${appId}/posts/${postId}`,
            headers: authHeaders,
            data: JSON.stringify({title, content}),
            contentType: "application/json"
        });
    }

    return {
        login,
        register,
        loadPosts,
        createPost,
        findPostById,
        editPost
    }
})();

export default KinveyRequester;