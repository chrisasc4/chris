//Set database object
var database = firebase.database().ref();
//button executes this function
function updateDB(score) {




    var value = {
        Score: score,

    }
    database.push(value);
}

