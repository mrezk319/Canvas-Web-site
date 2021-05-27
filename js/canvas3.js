wow = new WOW(
  {
      animateClass: 'animated',
      offset: 100,
      callback: function (box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
  }
);
wow.init();
$('moar').onclick = function () {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};
$(".navbar-light .navbar-nav li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active")
    console.log("ki")
})
