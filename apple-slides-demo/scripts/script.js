(function () {
  let $buttons = $('.button-wrapper > button')
  let $slide = $('.slide')
  let $images = $('.slide > img')
  let $anchors = $('.button-wrapper > button > a')
  let n = 0
  let timer = setTimer()

  for (var i = 0; i < $buttons.length; i++) {
      $buttons.eq(i).on('click', function (e) {
          clearInterval(timer)
          let i = $(e.currentTarget).index()
          goToSlide(i)
          n = i
          timer = setTimer()
      })
  }

  $(document).on('visibilitychange', function () {
      if (document.hidden) {
          clearInterval(timer)
      } else {
          timer = setTimer()
      }
  })

  function goToSlide(index) {
      $slide.css({
          'transform': `translateX(${- (index * 920)}px)`
      })
      $anchors.removeClass('active')
      $anchors.eq(index).addClass('active')
  }

  function setTimer() {
      return setInterval(function () {
          if (n > $images.length - 1) {
              n = 0
          }
          goToSlide(n)
          n += 1
      }, 3000)
  }
})()