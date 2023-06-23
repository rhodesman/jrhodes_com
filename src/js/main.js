$(document).ready(function() {
  console.log(sysReady);
  var f = 0;
  rotatePhone();
  $( window ).resize(function() {
    rotatePhone();
  });
  function rotatePhone() {
    if( window.innerWidth < 420 ) {
      $('.rotate-page').addClass('pleaseRotate');
    }else {
      $('.rotate-page').removeClass('pleaseRotate');
    }
  }


  $('#bizcard').on('click', function(e) {
    e.stopPropagation();
    $('.row').each(function() {
      if($(this).attr('id') != "portfolio") {
        $(this).toggleClass('hidden');
      }
    })

    if($('#bizcard').hasClass('hidden')) {
      $('.back-btn').removeClass('hidden');
    }
  });//row

  $('.back-btn').on('click', function(e) {
    e.stopPropagation();
    if(!$('.back-btn').hasClass('hidden')) {
      $('.row').toggleClass('hidden');
      $('.back-btn').addClass('hidden');
    }else {
      f++;
      if(f == 1) {
        console.log("> access security");
        console.log("access: PERMISSION DENIED.");

      }else if(f == 2) {
        console.log("> access security grid");
        console.log("access: PERMISSION DENIED.");
      }else {
        console.log("> access main security grid");
        console.log("access: PERMISSION DENIED....and....");
        var n=34;
          for( i = 0; i < n; i++ ) {
            (function (i) {
              setTimeout(function () {
                console.log("YOU DIDN'T SAY THE MAGIC WORD!");
                console.log("\n");
                if(i == (n - 1)) {
                  console.log(newman);
                }
              }, 150*i);
            })(i);
          }
        }
    }
  });//back-btn

  /*$('#options a').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var thisElm = $(this).parent().attr('class').split(' ')[1];
    var theFrame;
    if(thisElm == "desginer"){
      theFrame = "/live-demos/curious-george/";
    }

  });*/
});
