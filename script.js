var elem = document.querySelectorAll('.rond');
   var taupe = document.querySelector('.taupe');
   var btn = document.querySelector('.btn');
   var start = document.querySelector('.start');
   var btn2 = document.querySelector('.restart');
   var end = document.querySelector('.stop');
   var spanPoint = document.querySelector('span');
   var spanPoint2 = document.querySelector('.number');
   var spanTime = document.querySelector('.timeSpan');
   var points = 0;
   var cpt = 31;

   btn.addEventListener('click', function() {
     start.style.display = 'none';
   });



   function hasard() {
     var max = 10;
     return 1 + Math.floor(Math.random() * max);
   }
   setInterval(function(a) {


     var cptActu = --cpt;
     spanTime.textContent = cptActu;

     if (cpt <= 0) {
     end.style.display="block";
     cpt=31;
   };

     var random = hasard();
     elem[random].appendChild(taupe);
   }, 1000);


     taupe.addEventListener('mousedown', function() {
     points++;
     spanPoint.innerHTML = points;
     spanPoint.style.color = 'red';
     spanPoint2.innerHTML = points;
     spanPoint2.style.color = 'red';
   });

     taupe.addEventListener('mouseup', function() {
     taupe.style.width = "100px";
     taupe.style.height = "100px";
   });

     btn2.addEventListener('click', function() {
     end.style.display = "none";
     spanPoint.innerHTML = 0;
     cpt=31;
     a();
   });

   setInterval(function() {
     end.style.display = 'block';
   }, 30000)
