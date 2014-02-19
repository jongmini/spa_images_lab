

$(function(){
  var images=[
  "http://31.media.tumblr.com/78ce1831f575f06a6ca966ee2c9198f1/tumblr_n10nb0TY4u1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/ad80d557aee5736d7b01ca13846781f5/tumblr_n10n5ygMJI1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/8fb80a2a6111ffbf05defc3a758a2f8a/tumblr_n10n4rpjvZ1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/d4955c5fb31743bd0740f5001adafb79/tumblr_n10n3wfcrl1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/350cbf6444f32fadff401d12c318cdbd/tumblr_n10n2x71Dz1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/18e25cdcdaaced3b2b8a467724720ece/tumblr_n10n1wmxiS1st5lhmo1_1280.jpg",
  "http://24.media.tumblr.com/afe9f67b4ec353bce470203300f68618/tumblr_n10mzgcbTV1st5lhmo1_1280.jpg",
  "http://24.media.tumblr.com/93a48760402963e177485f3af78240e0/tumblr_n10mycKEv41st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/f4f22b2eb234e51e3183fde267ccdc70/tumblr_n10mxm8L7u1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/738750bb061d484aad112a89548672d5/tumblr_n10mwz4NQo1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/b96eedd08ac55d61bae0534d812a9ee7/tumblr_n0hq1kxq7j1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/712c985b8c18226a0d394eb90b83e94b/tumblr_n0hq0nxdQd1st5lhmo1_1280.jpg",
  "http://25.media.tumblr.com/d55a509993790027240311c9f611aaf8/tumblr_n0hpzpKEfE1st5lhmo1_1280.jpg",
  "http://31.media.tumblr.com/7eaaac07f23f03cb51a296bd81d77569/tumblr_n0hpyugseU1st5lhmo1_1280.jpg",
  "http://24.media.tumblr.com/f87b54bbce49e59debf7606662f54862/tumblr_n0hpxxDOJ91st5lhmo1_1280.jpg"
  ];

  var length = images.length;


    var i = Math.floor(Math.random()*length);
    var context = {img: images[i]};
    var $show_image = $(HandlebarsTemplates.template(context));
    $('#images').append($show_image);


  $('#button').click(function(){

  var src = $('#images div img').attr('src');
  var $show_src = $(HandlebarsTemplates.src({src: src}));
  $('#displayLink').empty();
  $('#displayLink').append($show_src);

  });

  $('#shuffleImage').click(function(){

    var i = Math.floor(Math.random()*length);
    // var context = {img: images[i]};
    // var $show_image = $(HandlebarsTemplates.template(context));
    // $('#images').append($show_image);
    $('#displayLink').empty();
    $('#images div img').attr('src', images[i]);

  });


});




