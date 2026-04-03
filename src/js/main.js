document.addEventListener('DOMContentLoaded', function() {
  console.log(sysReady);
  var f = 0;
  rotatePhone();
  window.addEventListener('resize', rotatePhone);

  function rotatePhone() {
    if( window.innerWidth < 420 ) {
      document.querySelector('.rotate-page').classList.add('pleaseRotate');
    }else {
      document.querySelector('.rotate-page').classList.remove('pleaseRotate');
    }
  }

  document.getElementById('bizcard').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelectorAll('.row').forEach(function(row) {
      if(row.id !== 'portfolio') {
        row.classList.toggle('hidden');
      }
    });

    if(document.getElementById('bizcard').classList.contains('hidden')) {
      document.querySelector('.back-btn').classList.remove('hidden');
    }
  });

  document.querySelector('.back-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    var backBtn = document.querySelector('.back-btn');
    if(!backBtn.classList.contains('hidden')) {
      document.querySelectorAll('.row').forEach(function(row) {
        row.classList.toggle('hidden');
      });
      backBtn.classList.add('hidden');
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
  });
});
