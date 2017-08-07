JS Code   (code.js)                                                                                     var id;
var userName = "DonnieSparks";
var password = "PassMeme17";
var tempID;

var MemeArray = [];



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
            ajaxCallTwo(tempId, "Whaaaaaazzzzzzup", "Bye");
        }
    });
}
AjaxCallOne();
// tempId = MemeArray[100*Math.random()].id;
// ajaxCallTwo(tempId, "HI", "Bye");