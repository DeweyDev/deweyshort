//Don't touch this

 String.prototype.replaceAt = function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
   }


//Set up window
$("#shorten").hide();
$("#kinchyj").hide();
//Set up code for switching views

$("#kinch").change(function () {
    var givenoption = $('select').val();
    if (givenoption == "Expand") {

        $("#shorten").hide();
        $("#expand").show();
    }

    if (givenoption == "Shorten") {
        $("#shorten").show();
        $("#expand").hide();
    }
});

//Set up code for url expanding

$("#button").click(function () {
    $("#ajaxfiller").text("");
    //Get URL entered
    var urlgiven = $("#input").val();
    var jsonurl = "https://www.googleapis.com/urlshortener/v1/url?shortUrl=" + urlgiven;
    $.getJSON(jsonurl, function (data) {
        //Log the data recieved
        console.log(data.longUrl);

        var finish = JSON.stringify(data.longUrl);
        finish = finish.replace( /"/, '' );
        var lengy = finish.length;
        finish = finish.replaceAt((lengy-1)," ");
        $("#ajaxfiller").val(finish);
        $("#kinchyj").show();

    });
});

//Set up code for url despanding

$("#button2").click(function () {
    $("#ajaxfiller").text("");
    //Get URL entered
    var urlgiven = $("#input2").val();
    $.getJSON("http://v.gd/create.php?format=json&url="+urlgiven /* +"&callback=?"*/,function(data){
     var shorty = JSON.stringify(data.shorturl);
     shorty = shorty.replace( /"/, '' );
     var lengy = shorty.length;
    shorty = shorty.replaceAt((lengy-1)," ");
     $("#ajaxfiller").val(shorty);
     $("#kinchyj").show();
    });
   
    
});
