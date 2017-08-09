//Set database object
var database = firebase.database().ref();
//button executes this function
function updateDB() {
    var name = $("#name").val();
    var message = $("#message").val();

    //Update database here
    var value = {
        NAME: name,
        MESSAGE: message
    }
    database.push(value);
}

