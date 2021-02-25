$(document).ready(function () {
    $('a').click(function () {
        $('img').eq($(this).index())
            .css({ 'opacity': '1' })
            .siblings()
            .css({ 'opacity': '0' })
    });
    //var alinks = $('a');
    //for (var i = alinks.length - 1; i >= 0; i--){
        //alinks[i].style.background ='red';
        //alinks[i].style.border='5px solid yellow';
        //alinks[i].style.color='#fff';
    //    alinks.eq(i).css({
    //        'background':'red', 
    //        'border':'5px solid yellow',
    //        'color':'#fff'
    //    }).html('<strong>电脑壁纸' + i + '</strong>')
        //.text('电脑壁纸'+i);
    //}
});