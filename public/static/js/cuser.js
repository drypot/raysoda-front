window.cuser = {}

cuser.initLogin = function () {
  let $form = formty.getForm('form.main')
  $form.$email.focus()
  $form.$send.click(function () {
    formty.post('/api/login', $form, function () {
      // formty.method 에서 에러처리 함
      location = '/'
    })
    return false
  })
}

cuser.logout = function () {
  request.post('/api/logout').end(function (err, res) {
    err = err || res.body.err
    if (err) return showError(err)
    console.log('logged out')
    location = '/'
  })
}

cuser.initRegister = function () {
  let $form = formty.getForm('form.main')
  $form.$send.click(function () {
    formty.post('/api/user-register', $form, function () {
      location = '/user-register-done'
    })
    return false
  })
}

cuser.initResetPassStep1 = function () {
  let $form = formty.getForm('form.main')
  $form.$email.focus()
  $form.$send.click(function () {
    formty.post('/api/password-send-reset-mail', $form, function () {
      location = '/password-reset-2'
    })
    return false
  })
}

cuser.initResetPassStep3 = function () {
  let $form = formty.getForm('form.main')
  $form.$password.focus()
  $form.$send.click(function () {
    formty.put('/api/password-reset', $form, { uuid: url.query.uuid, token: url.query.t }, function () {
      location = '/login'
    })
    return false
  })
}

cuser.initProfile = function () {
  let $profile = $('#profile-text')
  if ($profile.length) {
    $profile.html(tagUpText($profile.html()))
  }
}

cuser.initUpdateProfileForm = function () {
  let $form = formty.getForm('form.main')
  let uid = url.pathnames[1]
  $('#domain-url').text(location.origin + '/')
  $form.$send.click(function () {
    formty.put('/api/user-update/' + uid, $form, function () {
      location = '/user-id/' + uid
    })
    return false
  })
}

cuser.initDeactivate = function () {
  $('#dea-btn').click(function () {
    $('#dea-confirm-btn').removeClass('hide')
    return false
  })
  $('#dea-confirm-btn').click(function () {
    request.del('/api/user-deactivate/' + user.id).end(function (err, res) {
      err = err || res.body.err
      if (err) return showError(err)
      location = '/'
    })
    return false
  })
}

cuser.initUserList = function () {
}
