import $ from "jquery";

function showInfo(message) {
    $('#infoBox').text(message).show();
    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}

export {showInfo};