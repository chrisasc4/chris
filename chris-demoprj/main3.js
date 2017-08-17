var database = firebase.database().ref();
//button executes this function
function updateDB() {
    var yesbtn = $("#YESBTN").val();
    var nobtn = $("#NOBTN").val();
    console.log(ybtn);
    //Update database here
    var value = {
        YBTN: ybtn,

    }
    database.push(value);
}

database.on("child_added", function (rowData) {
    var row = rowData.val();
    var ybtn = row.YBTN;

    var fullText = "<p>" + ybtn + "</p>";
    $(".allMessages").append(fullText);
})