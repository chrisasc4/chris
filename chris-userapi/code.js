var id;
var userName = "DonnieSparks";
var password = "PassMeme17";
var tempID;

var MemeArray = [];
var wordArray = [];


for (var i = 0; i < 6; i++) {
    wordArray[i] = [];
}

wordArray[0][0] = "Legos";
wordArray[0][1] = "You mean my comfy insoles?";
wordArray[1][0] = "The flat Earth society is";
wordArray[1][1] = "Accepting Members from all around the globe";
wordArray[2][0] = "Just sent a text to my friend to tell him to \"Tap into my Wifi\"";
wordArray[2][1] = "Auto Correct Said, \"Tap into my Wife\"";
wordArray[3][0] = "You lost your phone and it\'s on silent?";
wordArray[3][1] = "Too Bad. If you liked it you shoulda put a ring on it.";
wordArray[4][0] = "My bed time is 7:00 but I go to bed at 7:05"
wordArray[4][1] = "Thug Life";
wordArray[5][0] = "That moment when you realize.";
wordArray[5][1] = "It wasn't a fart";


//This is the random code. 

function ajaxCallTwo(tempID, textOne, textTwo) {
       var urlMeme = 'https://api.imgflip.com/caption_image?template_id=' + tempID + '&username=' + userName + '&password=' + password + '&text0=' + textOne + '&text1=' + textTwo;
        // console.log(urlMeme);
        $.ajax({
            url: urlMeme,
            type: 'POST',
            success: function(yes) {
                console.log(yes);
                var url = yes.data.url;
                $("body").append("<img src=" + url + "> </img>");
            }
        })

        //$("body").append("<img src=" + urlMeme + "> </img>");
}



function AjaxCallOne() {
        $.ajax({
        url: 'https://api.imgflip.com/get_memes',
        type: 'GET',
        success: function(result) {
            console.log(result);
            var MemeArray = result.data.memes;
            var tempId = MemeArray[Math.floor(100*Math.random())].id;
            var randomIndex = Math.floor(wordArray.length*Math.random())
            ajaxCallTwo(tempId, wordArray[randomIndex][0], wordArray[randomIndex][1]);
        }
    });
}
AjaxCallOne();
// tempId = MemeArray[100*Math.random()].id;
// ajaxCallTwo(tempId, "HI", "Bye");







