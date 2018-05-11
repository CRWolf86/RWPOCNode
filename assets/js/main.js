$(document).ready(function(){

    $('form').on('submit', function(){
        var wodName = $('form #wodName');
        var restSec = $('form #restSec');
        var demo3 = $('form #demo3');
        var warmup = $('form #warmup');
        var Wod = $('form #Wod');
        var extime = $('form #extime');
        var restime = $('form #restime');
        var youtubevid = $('form #youtubevid');
        var selectlap = $('form #selectlap');
        var exercise = {wodName: wodName.val(), restSec: restSec.val(), demo3: demo3.val(), warmup: warmup.val(), Wod: Wod.val(),extime: extime.val(),restime: restime.val(),youtubevid: youtubevid.val(),selectlap: selectlap.val() };
    
        $.ajax({
            type: 'POST',
            url: '/form',
            data: exercise,
            success: function(data){
                location.reload();
            }
        });

        return false;
    
    });

    $('td#borrar').on('click', function(){
        var wodName = $(this).text().replace(/ /g,"-");
        console.log('clickeado');
        $.ajax({
            type: 'DELETE',
            url:'/form/'+wodName,
            success: function(data){
                //location.reload();
                console.log('borrado');
            }
        })
    })


})