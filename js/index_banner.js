//页面准备
window.onload = function () {
    //banner
    banner();
};
//banner轮播
var banner = function () {
    var banner = document.querySelector('.banner');
    var width = banner.offsetWidth;
    //图片容器
    var imageBox = banner.querySelector('ul:first-child');
    //点容器
    var pointBox = banner.querySelector('ul:last-child');
    //所有的点
    var points = pointBox.querySelectorAll('li');

    //公用方法
    //加过渡
    var addTransition = function () {
        imageBox.style.transition = 'all 0.2s';
        imageBox.style.webkitTransition = 'all 0.2s';
    }
    //清过渡
    var removeTransition = function () {
        imageBox.style.transition = 'null';
        imageBox.style.webkitTransition = 'null';
    }
    //设置位移
    var setTranslateX = function (translate) {
        imageBox.style.transform = 'translateX(' + translate + 'px)';
        imageBox.style.webkitTransform = 'translateX(' + translate + 'px)';
    }

    var index = 1; //当前索引为1
    var timer = setInterval(function () {
        index++;
        addTransition();
        setTranslateX(-index * width);

    }, 5000);

    imageBox.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 1;
            //清除过度
            removeTransition();
            //定位
            setTranslateX(-index * width);
        } else if (index <= 0) {
            index = 3;
            removeTransition();
            setTranslateX(-index * width);
        }
        setPoint();
    });

    var setPoint = function () {
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove('now');
        }
        points[index - 1].classList.add('now');
    }
}