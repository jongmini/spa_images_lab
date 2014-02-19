// $(document).ready(function(){
//     var i = Math.floor(Math.random()*images.length);
//     var context = {img: images[i]};
//     var $show_image = $(HandlebarsTemplates.template(context));
//     $('#images').append($show_image);
//   });


$(function(){
  var images=[
  "https://github-camo.global.ssl.fastly.net/0634f55ffcb56c8e43b0b84893ce06f3ca3fb89c/687474703a2f2f36363661363538633632346133633033613662322d32356364613035396439373564326633313863303365393062636631376334302e7239322e6366312e7261636b63646e2e636f6d2f756e73706c6173685f353264356262656638613631335f312e4a5047",
  "https://github-camo.global.ssl.fastly.net/1957d530873109df90a52077f098c17b09ec5d90/687474703a2f2f36363661363538633632346133633033613662322d32356364613035396439373564326633313863303365393062636631376334302e7239322e6366312e7261636b63646e2e636f6d2f756e73706c6173685f353235303961666162613762315f312e4a5047",
  "https://github-camo.global.ssl.fastly.net/1fec18fa9c02a6607519bcadb880d2b5e87c0e91/687474703a2f2f36363661363538633632346133633033613662322d32356364613035396439373564326633313863303365393062636631376334302e7239322e6366312e7261636b63646e2e636f6d2f756e73706c6173685f353263326432616164313537365f312e4a5047"
  ];

  // for (var i=0;i<images.length;i++){
  //   var context = {img: images[i]};
  //   var $show_image = $(HandlebarsTemplates.template(context));
  //   $('#images').append($show_image);
  // }

    var i = Math.floor(Math.random()*images.length);
    var context = {img: images[i]};
    var $show_image = $(HandlebarsTemplates.template(context));
    $('#images').append($show_image);


  $('#button').click(function(){

  var src = $('#images div img').attr('src');
  var $show_src = $(HandlebarsTemplates.src({src: src}));
  $('#displayLink').append($show_src);

  });

  $('#shuffleImage').click(function(){
    // $('#images').remove();

    var i = Math.floor(Math.random()*images.length);
    var context = {img: images[i]};
    var $show_image = $(HandlebarsTemplates.template(context));

    $('#images').append($show_image);

    // $("#images").attr('src', $show_image);

  });





});




