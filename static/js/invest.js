$(document).ready(function () {
    $('#firstDetail').click(function () {
        if ($('#firstDetail').attr('class') == 'fas fa-search-plus') {
            $('#firstName').fadeIn("slow", function () {
                $('#firstDetail').attr("class", "fas fa-search-minus")
            });
        }else{
            $('#firstName').fadeOut("slow", function () {
                $('#firstDetail').attr("class", "fas fa-search-plus")
            });
        }
    });
    $('#secondDetail').click(function () {
        if ($('#secondDetail').attr('class') == 'fas fa-search-plus') {
            $('#secondName').fadeIn("slow", function () {
                $('#secondDetail').attr("class", "fas fa-search-minus")
            });
        }else{
            $('#secondName').fadeOut("slow", function () {
                $('#secondDetail').attr("class", "fas fa-search-plus")
            });
        }
    });
    $('#thirdDetail').click(function () {
        if ($('#thirdDetail').attr('class') == 'fas fa-search-plus') {
            $('#thirdName').fadeIn("slow", function () {
                $('#thirdDetail').attr("class", "fas fa-search-minus")
            });
        }else{
            $('#thirdName').fadeOut("slow", function () {
                $('#thirdDetail').attr("class", "fas fa-search-plus")
            });
        }
    });
    $('.bannerWord').css('color','black');
    $('#loginBtn').css('color','black');
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop<=0){
            console.log('test');
            $('.bannerWord').css('color','black');
            $('#loginBtn').css('color','black');
        }else{
            $('.bannerWord').css('color','#ffffff');
            $('#loginBtn').css('color','#ffffff');
        }
    });
    // $( "#firstProfolio" ).progressbar({
    //     value: 37
    // });

    function progress(percent, $element) {
        var widthProgress = $('.progress').width() ;
        var progressBarWidth = percent * widthProgress / 100;
        $element.animate({ width: progressBarWidth }, 3000).html(percent + "% ");
    }
    progress(80, $('#firstProfolio'));
    progress(100, $('#secondProfolio'));
    progress(45, $('#thirdProfolio'));
    // var element = document.getElementById("firstProfolio");   
    // var width = 1;
    // var id = setInterval(frame, 40);
    // function frame() {
    //     if (width >= 100) {
    //     clearInterval(id);
    //     } else {
    //     width++; 
    //     element.style.width = width + '%'; 
    //     }
    // }
});


