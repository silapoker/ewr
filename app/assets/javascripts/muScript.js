var blocks = [];
blocks[0] = "#signup";
blocks[1] = "#signin";
blocks[2] = "#remindPass";
cur = 1;

$(document).ready(function() {
    $('.additional a').click(function(e) {
        e.preventDefault();
        var x;
        switch ($(this).attr('href')) {
            case ("signup.html"):
                x = 0;
                break;
            case ("index.html"):
                x = 1;
                break;
            case ("remind.html"):
                x = 2;
                break;
        };
        $(blocks[x]).css({ 'visibility': 'visible' });
        GoTo(x);
    });

    $('#loginEmail').focus();
});


function WriteLine(x) {
    $('#info').append('<p>' + x + '</p');
}

function GoTo(num) {
    margin = num * 382;
    $('#wr').animate(
        { marginLeft: -margin }, 800, 'easeInOutBack', function() {
            switch (num) {
                case 0:
                    $('#email').focus();
                    break;
                case 1:
                    $('#loginEmail').focus();
                    break;
                case 2:
                    $('#remindEmail').focus();
                    break;
            };
            $(blocks[cur]).css({ 'visibility': 'hidden' });
            cur = num;
        });
}
// --------
//  ERRORS
// --------
var er = [];
er[0] = "Неправильный формат email'a"; //0
er[1] = "Пароли не совпадают"; //0
er[2] = "Пользователь с таким email'ом уже зарегистрирован"; //0
er[3] = "Не угадали пароль. Или email. Попробуйте еще раз"; //1
er[4] = "Пользователя с таким email'oм у нас еще нету"; //2
er[5] = "Неправильный формат email'a"; //2

function HideError() {
    $('.error').hide();
}
function ShowError(code) {
    HideError();
    switch (code) {
        case 0:
            $('#error0').html(er[0]).slideDown();
            $('#email').select().focus();
            break;
        case 1:
            $('#error0').html(er[1]).slideDown();
            break;
        case 2:
            $('#error0').html(er[2]).slideDown();
            break;
        case 3:
            $('#error1').html(er[3]).slideDown();
            break;
        case 4:
            $('#error2').html(er[4]).slideDown();
            break;
        case 5:
            $('#error2').html(er[5]).slideDown();
            break;
    }
}


// ----------
//  MESSAGES
// ----------

var m = [];
m[0] = "Письмо с напоминанием пароля выслано вам на email";

function ShowMessage(code) {
    HideError();
    $('.message').fadeOut();
    switch (code) {
        case 0:
            $('#message0').html(m[0]).slideDown();
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
        if ((pass != "") && (pass == passAgain)) {
            ShowIndicator();
            if (!UserWithEmailExists(email)) {
                HideIndicator();
                //Register User
                HideError();
            }
        } else {
            HideIndicator();
            ShowError(1);
        }
    }
}

function SignIn() {
    pass = $('#loginPass').val();
    email = $('#loginEmail').val();
    ShowIndicator();
    if ((email != "") && (CheckPassword(email, pass))) {
        //Sign User In
        HideIndicator();
        HideError();
    } else {
        ShowError(3);
        HideIndicator();
    }
}

function RemindPassword() {
    var email = $('#remindEmail').val();
    if (!ValidEmail(email)) {
        ShowError(5);
    } else {
        ShowIndicator();
        if (SendRemind()) {
            ShowMessage(0);
            HideIndicator();
        }
        else {
            ShowError(4);
            HideIndicator();
        }
    }
}

function ShowIndicator() {
    $('#indicator').show();
}

function HideIndicator() {
    $('#indicator').hide();
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