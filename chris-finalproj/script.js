$(function () {
    // Setup reference to complaints
    var complaints = firebase.database().ref('complaints');
    // Setup reference to users
    var users = firebase.database().ref('users');
    // Keep track of the current user
    var complainer;
    // Keep track of the number of users
    var numOfUsers = 0;
    // Whenever a new user joins:
    // 1) Update the number of users
    // 2) Update the list of users
    users.on("value", function (snapshot) {
        $("#users").empty();
        numOfUsers = snapshot.numChildren();
        snapshot.forEach(function (data) {
            $("#users").prepend("<li>" + data.key + "</li>");
        });
    });

    //<button id="removeName" type="submit" class="btn btn-primary">Remove Name</button>

    // Whenever someone submits their name:
    // 1) Save the user to Firebase
    // 2) Listen for whenever there's new complaints
    $("#submitName").click(function () {
        complainer = $("#complainerName").val();
        users.child(complainer).set({ loggedIn: true });
        $("#yourNameGroup").empty();
        $("#yourNameGroup").append('<button id="removeName" type="submit" class="btn btn-primary">Log Out</button>');

        $('body').on('click', '#removeName', function () {
            console.log("click");
            // Remove this user from Firebase
            var userRef = users.child(complainer).remove();
            // Remove log out button
        });

        complaints.on("value", function (snapshot) {
            $("#messages").empty();
            // Go through each of the complaints
            snapshot.forEach(function (data) {
                if (data.val().offender !== complainer) {
                    // If the current user is not who the complaint is about, list the complaint and a vote button.
                    $("#messages").prepend("<li>" + data.val().complaint + "<button type='button' class='agreed btn btn-link'  data-key='" + data.key + "'>Agreed</button> </li>");
                } else if (data.val().votes > (numOfUsers / 2) - 1) {
                    // If the current user IS who the complaint is about, alert the user and remove that complaint from Firebase.
                    alert("New Suggestion: " + data.val().complaint);
                    complaints.child(data.key).remove();
                }
            });
        });


        // Update the number of votes when the user clicks "Agreed"
        $('body').on('click', '.agreed', function () {
            var complaintKey = $(this).data("key");
            complaints.child(complaintKey).child("votes").transaction(function (votes) {
                return (votes || 0) + 1;
            });
        });
    });

    // Whenever someone submits a complaint:
    // First check if they submitted their name. If so, save complaint to GitHub.
    // Otherwise, tell them to submit their name.
    $("#submitComplaint").click(function () {
        if (complainer) {
            var offender = $("#offenderName").val();
            var complaint = $("#complaint").val();
            var newComplaint = {
                offender: offender,
                complaint: complaint,
                votes: 0
            };
            complaints.push().set(newComplaint);
        } else {
            alert("Please submit your name before submitting a complaint!");
        }
    });
});
