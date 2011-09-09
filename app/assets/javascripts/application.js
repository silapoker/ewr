// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function() {
    $('a.remindPass').click(function(e) {
        e.preventDefault();
        GoTo(2);
    });
    $('a.signin').click(function(e) {
        e.preventDefault();
        GoTo(1);
    });
    $('a.signup').click(function(e) {
        e.preventDefault();
        GoTo(0);
    });
});



function GoTo(num) {
    margin = num * 382;
    $('#wr').animate({ marginLeft: -margin },
     { duration: 800, easing: 'easeInOutBack' });
}

// --------
//  ERRORS
// --------

var er0 = "Неправильный формат email'a"; //0
var er1 = "Пароли не совпадают"; //0
var er2 = "Пользователь с таким email'ом уже зарегистрирован"; //0
var er3 = "Не угадали пароль. Или email. Попробуйте еще раз"; //1
var er4 = "Пользователя с таким email'oм у нас еще нету"; //2
var er5 = "Неправильный формат email'a"; //2

function HideError() {
    $('.error').hide();
}
function ShowError(code) {
    HideError();
    switch (code) {
        case 0:
            $('#error0').html(er0).slideDown();
            break;
        case 1:
            $('#error0').html(er1).slideDown();
            break;
        case 2:
            $('#error0').html(er2).slideDown();
            break;
        case 3:
            $('#error1').html(er3).slideDown();
            break;
        case 4:
            $('#error2').html(er4).slideDown();
            break;
        case 5:
            $('#error2').html(er5).slideDown();
            break;
    }
}


// ----------
//  MESSAGES
// ----------

var m0 = "Письмо с напоминанием пароля выслано вам на email";

function ShowMessage(code) {
    HideError();
    $('.message').fadeOut();
    switch (code) {
        case 0:
            $('#message0').html(m0).slideDown();
            break;
    }
}

function ValidEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email)
}

function SignUp() {
    email = $('#email').val();
    pass = $('#password').val();
    passAgain = $('#passwordAgain').val();
    if (!ValidEmail(email)) {
        ShowError(0);
    }
    else {
        if ((pass!="")&&(pass == passAgain)) {
            if (!UserWithEmailExists(email)) {
                //Register User
                HideError()
            }
        } else {
            ShowError(1);
        }
    }
}

function SignIn() {
    pass = $('#loginPass').val();
    email = $('#loginEmail').val();
    if ((email != "" )&&(CheckPassword(email, pass))) {
        //Sign User In
        HideError();
    } else {
        ShowError(3);
    }
}

function RemindPassword() {
    var email = $('#remindEmail').val();
    if (!ValidEmail(email)) {
        ShowError(5);
    } else {

        if (SendRemind()) {
            ShowMessage(0);
        }
        else {
            ShowError(4);
        }
    }
}
function UserWithEmailExists(email) {
    //check if user with such email exists
    //if true, return true, otherwise false
    return false;
}

function CheckPassword(email, pass) {
    //check if email and pass match
    return true;
}

function SendRemind(email) {

    //check if email exists, send email
    //return true if it goes okay, false otherwise

    return true;
}
