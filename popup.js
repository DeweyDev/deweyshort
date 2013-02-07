 $(document).ready(function () {
                $("a").tooltip({
                  'selector': '',
                  'placement': 'top'
                });
                $("#input").tooltip({
                  'selector': '',
                  'placement': 'top'
                });
                $("#input2").tooltip({
                  'selector': '',
                  'placement': 'top'
                });
                console.log("done");
              });
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
    
    if ($('#googl').hasClass('active')) {
        //do something
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
    }

});

//Set up code for url shortening

$("#button2").click(function () {
    
    if ($('#vco').hasClass('active')) {

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
   
    }

    if ($('#googl').hasClass('active')) {
       
        //Do something here
        $("#ajaxfiller").text("");
        //Get URL entered
        var longUrl = $("#input2").val();
        longUrl = '"'+longUrl+'"';
        
        
        function googlurl(url, cb) {
        jsonlib.fetch({
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        header: 'Content-Type: application/json',
        data: JSON.stringify({longUrl: "https://google.com"})
        }, function (m) {
        var result = null;
        try {
            result = JSON.parse(m.content).id;
            if (typeof result != 'string') result = null;
            } catch (e) {
            result = null;
            }
            cb(result);
        });


        }

        googlurl(longUrl , function(s) { alert(s);$("#kinchyj").show();$("#ajaxfiller").val(s); });

        }
    if ($('#tinyurl').hasClass('active')) {
       
       //Get URL entered
        var urlgiven = $("#input2").val();
        var fully = "http://tinyurl.com/api-create.php?url="+urlgiven;
        $("#ajaxfiller").text("");
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",fully,false);
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML;
        alert(xmlDoc);
        
        
        
        $("#kinchyj").show();

        $("#ajaxfiller").val(data);
        
       
        
   
    }

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