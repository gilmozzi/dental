$("#banner-container > div:gt(0)").hide();

setInterval(function() {
  $('#banner-container > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#banner-container');
}, 5000);