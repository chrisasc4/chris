


$(function () {

    // $("button").click(function () {
    //     $(this).slideUp();
    // });


    var database = firebase.database().ref();
    //button executes this function

    $("#submitBtn").click(function () {
        var name = $("#userName").text();
        var message = $("#userMsg").val();
        console.log(name + " : " + message);
        //Update database here
        var value = {
            name: name,
            message: message
        }
        database.push().set(value);
    });



