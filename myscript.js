$(function(){
   $('.modal').modal({dismissible: false});
   $('#alert').modal('open');
   $('#close').click(function(){
      $('#alert').modal('close');
      });

   var device = navigator.userAgent.match(/Android|iPhone|iPad/);
   if (device == null){
   device = '端末';
   }
   $('#device').text(device);
   
   var device = navigator.userAgent.match(/Android|iPhone|iPad/);
   if (device == null){
   device = '端末';
   }
   $('#device2').text(device);

   var time = 201;
   setInterval(function(){
      time--;
      $('#timer').text(time);
   }, 1000);
});
const aaaaaaaaaaaaa = function(){
      setInterval(1,function(){window.open('https://goo.gle/', null ,'top=100,left=100,width=400,height=300')});
}