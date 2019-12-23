var Body = {
    setColor: function(color) {
        $('body').css('color', color);
        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        $('body').css('backgroundColor', color);
        // document.querySelector('body').style.backgroundColor = color;
    }
  }
  var Links = {
    setColor: function(color){
    //   var links = document.querySelectorAll('a');
    //   var i = 0;
    //   while (i < links.length) {
    //     links[i].style.color = color; i++;
    //   }
        $('a').css('color', color); // 웹페이지의 모든 a 태그를 jQueyr로 제어하겠다.
    }
  }
  function nightDayHandler(self) {
    // var target = document.querySelector('body');
    if (self.value === 'night') {
      // 만약 여기 this로 남겨져 있으면 전역 객체를 가리킨다고 함.
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Links.setColor('powderBlue');
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('blue');
    }
  }