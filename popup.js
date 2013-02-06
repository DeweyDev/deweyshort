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
        $("#kinchyj").show();
        $("#ajaxfiller").val(finish);
        
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
     $("#kinchyj").show();
     $("#ajaxfiller").val(shorty);
    });
   
    
});

//Set up code for clicking the copy button

$('#copybutton').click(function(){

    $("#ajaxfiller").select();
    document.execCommand('copy');
});

//Set up code for changing the modes

$('#googl').click(function(){
    
    $("#googl").addClass("active");
    $("#bitly").removeClass("active");
    $("#vco").removeClass("active");
    $("#tinyurl").removeClass("active");
    $("#supr").removeClass("active");
    $("#owly").removeClass("active");
});

$('#bitly').click(function(){

    $("#googl").removeClass("active");
    $("#bitly").addClass("active");
    $("#vco").removeClass("active");
    $("#tinyurl").removeClass("active");
    $("#supr").removeClass("active");
    $("#owly").removeClass("active");
    
});

$('#vco').click(function(){

    $("#googl").removeClass("active");
    $("#bitly").removeClass("active");
    $("#vco").addClass("active");
    $("#tinyurl").removeClass("active");
    $("#supr").removeClass("active");
    $("#owly").removeClass("active");
    
});

$('#tinyurl').click(function(){

    $("#googl").removeClass("active");
    $("#bitly").removeClass("active");
    $("#vco").removeClass("active");
    $("#tinyurl").addClass("active");
    $("#supr").removeClass("active");
    $("#owly").removeClass("active");

    
});

$('#supr').click(function(){

    $("#googl").removeClass("active");
    $("#bitly").removeClass("active");
    $("#vco").removeClass("active");
    $("#tinyurl").removeClass("active");
    $("#supr").addClass("active");
    $("#owly").removeClass("active");
    
});

$('#owly').click(function(){

    $("#googl").removeClass("active");
    $("#bitly").removeClass("active");
    $("#vco").removeClass("active");
    $("#tinyurl").removeClass("active");
    $("#supr").removeClass("active");
    $("#owly").addClass("active");

    
});