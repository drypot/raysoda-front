window.cimage = {}

let fs = config.appNamel === 'rapixel' && fullscreen.enabled
let screenWidth = window.screen.width * (window.devicePixelRatio || 1)

function addFsHandler($list) {
  $list.each(function () {
    let $image = $(this)
    let $fs = $('<i class="fa fa-expand fs-icon"></i>')
    $fs.click(function () {
      let $img = $image.find('img').eq(0)
      let baseUrl = $img.attr('src').split('-', 1)[0]
      let vers = $img.attr('data-vers').split(',')
      let ver
      let i = 0
      let minWidth = Math.max(screenWidth, 2560) // rapixel 섬네일 사이즈가 2560
      do {
        ver = vers[i]
        i++
      } while (i < vers.length && vers[i] >= minWidth)
      let $fsImg = $('<img>').attr('src', baseUrl + '-' + ver + '.jpg')
      let $fs = $('#fullscreen')
      $fsImg.click(function () {
        fullscreen.exit()
      })
      $fs.append($fsImg)
      fullscreen.request($fs[0])
      return false
    })
    $image.append($fs)
  })
}

fullscreen.onchange(function () {
  if (!fullscreen.inFullscreen()) {
    $fs = $('#fullscreen').empty()
  }
})

cimage.initList = function () {
  sessionStorage.setItem('last-list-url', location)
  $('.image-thumb .comment').each(function () {
    let $this = $(this)
    $this.html(tagUpText($this.html()))
  })
  if (fs) {
    addFsHandler($('.image-thumb .image'))
  }
}

cimage.initNew = function () {
  let $form = formty.getForm('form.main')
  $form.$send.click(function (err, res) {
    formty.post('/api/image-upload', $form, function () {
      location = '/'
    })
    return false
  })
}

cimage.initUpdate = function (image) {
  let $form = formty.getForm('form.main')
  $form.$send.click(function (err, res) {
    formty.put('/api/image-update' + image.id, $form, function () {
      location = sessionStorage.getItem('last-list-url') || '/'
      //history.go(-2);
      //location = '/';
      //location = '/images/' + image.id;
    })
    return false
  })
}

cimage.initView = function (image) {
  $('.image-full img').click(function () {
    history.back()
    return false
  })
  if (fs) {
    addFsHandler($('.image-full .image'))
  }

  let $comment = $('.image-info .comment')
  $comment.html(tagUpText($comment.html()))

  $('#update-btn').click(function () {
    location = '/image-update/' + image.id
    return false
  })

  $('#del-btn').click(function () {
    $('#del-confirm-btn').removeClass('hide')
    return false
  })

  $('#del-confirm-btn').click(function () {
    request.del('/api/images/' + image.id).end(function (err, res) {
      //err = err || res.error || res.body.err;
      err = err || res.body.err
      if (err) return showError(res.body.err)
      location = '/'
    })
    return false
  })
}
