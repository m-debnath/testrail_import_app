$(function () {
    $('#id_username').addClass("form-control mt-2");
    $('#div_id_password').addClass("mt-3");
    $('#id_password').addClass("form-control mt-2 mb-3");
    $('.btn-outline-info').removeClass("btn-outline-info").addClass("btn-dark");
    setTimeout(fade_out, 2000);
    function fade_out() {
        $(".alert").fadeOut(800);
    }
});