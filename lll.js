var myLazyLoad = new LazyLoad({
  threshold: 50,
  callback_load: function(e) {
    console.log($(e).attr("data-original") + " loaded" );
  }
});
