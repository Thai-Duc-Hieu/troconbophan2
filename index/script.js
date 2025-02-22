function fadeIn(){
    var text = $('.content').text().replace(/^\s+|\s+$/g,'');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for(;i<length;i+=sp) {
        txt = text.substring(i,i+sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));
    

    for(i = 0,length = html.length;i<length;i++) {
        !function(i){
            setTimeout(function(){
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            },i*400);
        }(i);
    }
};

const myText = document.getElementById('myText');

myText.addEventListener('canplay', function() {
  if (myText.style.color === 'black') {
    myText.style.color = '#ec9696'; // Thay đổi sang màu đỏ
  } else {
    myText.style.color = 'black'; // Thay đổi về màu đen
  }
});
document.querySelectorAll(".animated, .content").forEach(element => {
    element.onclick = () => {
      document.querySelector("#heart").hidden = false;
      document.querySelector("body").style.backgroundColor = "#ffffff";
      document.querySelector("#heart").hidden = false;
      fadeIn();
      // Thêm hiệu ứng hoạt hình cho phần tử được click
      element.classList.add("animated");
    }
  });