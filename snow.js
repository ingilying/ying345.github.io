$(function () {
    setInterval(function() {
        var maxW = document.body.clientWidth,
            maxH = document.body.clientHeight,
            left = Math.random() * maxW,
            bottom = left - (Math.random() - 0.5) * 0.2 * maxW, //保证落下的位置水平有变化，但不大
            opacity = 0.7 + 0.3 * Math.random();
        speed = 0.1;
        size = 20 + 10 * Math.random(), //字体20-30
            color = '#fff';
        // num = Math.floor(Math.random() * 10) //产生0-9随机数，当然你们可以自己设置
        num ='*';
        var style = 'position:absolute;top:0px;font-size:' + size + 'px;color:' + color + ';left:' + left + 'px;opacity:' + opacity;
        var div = '<span class = "dd" style="' + style + '">' + '<img src="/snow.png" />' + '</span>'
        $('body').append(div)
        $('span').animate({
            top: maxH,
            left: bottom
        }, 3000, function() {
            $(this).remove() //这一步很关键，要把落下的去掉，不然会越积越多
        });
    }, 20) //20ms产生一个
});