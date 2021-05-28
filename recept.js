
$(function () {
    $("article").on("click", "tr", megjelenit);
    
    $.ajax(
            {url: "receptek.json", success: function (result) {
//                console.log(result);
                    receptekTomb = result;
                    console.log(receptekTomb);
//                $("article").append(receptekTomb);
                    tablazatbaKiir();
//                    $("table tr").click(megjelenit);
                }});

});

function megjelenit() {
    var ID = Number($(this).attr("id"));
    console.log(ID);
    if (ID > 0)
        megjelenitRecept(receptekTomb[ID - 1]);
   
}

function megjelenitRecept(recept) {
    $("section").empty();
    //az adott receptnek az adatait kell megjeleníteni, section h2be akarjuk a recept nevét
    $("section").append("<h2></h2>");
    $("section h2").append("neve");
    //section <p> tagbe a leírást, section <div>be a felsorolást, hozzávalójat
    $("section ").append("<div></div>");
    $("section div").append("hozzavalok");
    
   
    //section img-be a képet
    $("section ").append("<div></div>");
    $("section div").append("img0");
    $("section div").append("img1");
    $("section div").append("img2");
    $("section div").append("img3");
    $("section div").append("slidprev");
    $("section div").append("slidnext");
    
    
    $("section").append("<p>");
    $("section p").append(recept.leiras);


}
//táblázat formázása a házi!
//képek megjelenítése, hozzá kell adni egy image taget, attributum beállítása attr

function tablazatbaKiir() {
    csakFejlec();
   for (var i = 0; i < receptekTomb.length; i++) {
        $("article table").append("<tr id='"+(i+1)+"'></tr>");
        for (var item in receptekTomb[i]) {
            if (item==="hozzavalok") {
                for (var item2 in receptekTomb[i][item]) {
                    for (var item3 in receptekTomb[i][item][item2]) {
                         $("article table tr").eq(i+1).append("<td>" +item3+" "+ receptekTomb[i][item][item2][item3] +" </td>");
                    }
                   
                    
                }
                
            }
            else {
                
            

            $("article table tr").eq(i + 1).append("<td>" + receptekTomb[i][item] + "</td>" );
            }
            
        }
        
    }
    for (var item in receptekTomb[1].hozzavalok) {
        console.log(receptekTomb[1].hozzavalok[item]);
        
    }
}
;



function csakFejlec() {
   $("article").empty();
    $("article").append("<table></table>");
$("article table").append("<tr id='-1'><th>Név</th><th>db</th><th>Elkészítési idő</th><th>Elérési út</th><th>Leírás</th><th>Hozzávalók</th></tr>");
    


}
var receptekTomb=[];
var hozzavalokTomb=[];


function csakFejlec() {
$("article").append("<table></table>");
$("article table").append("<tr>\n\
<th>Név</th>\n\
<th>Elkészítési idő</th>\n\
<th>Elérési út</th>\n\
<th>Leírás</th>\n\
<th>Hozzávalók</th>\n\
</tr>");
$("section ").append("<div></div>");
$("article div").append("<h2></h2>");


}

$(document).ready(function(){
    $('"slidnext"').on('click', function(){
        var currentimg = $('"img0"');
        var netImg = currentImg.next();
        
        if(nextImg.length){
            currentImg.removeClass('"img0"').css('z-index', -10);
            nextImg.addClass('"img0"').css('z-index', 10);
            
        }
    });
    
    $('"prevnext"').on('click', function(){
        var currentimg = $('"img0"');
        var netImg = currentImg.prev();
        
        if(prevImg.length){
            currentImg.removeClass('"img0"').css('z-index', -10);
            prevImg.addClass('"img0"').css('z-index', 10);
            
        }
    });
    
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

