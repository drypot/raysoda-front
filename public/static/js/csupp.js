window.csupp = {}

csupp.initUpdateBanners = function () {
  let $form = formty.getForm('form.main')
  $form.$send.click(function () {
    let obj = formty.getObject($form)
    let e
    try {
      obj.banners = JSON.parse(obj.banners)
    } catch (_e) {
      e = _e
      alert(_e)
    }
    if (!e) {
      formty.put('/api/banner-update', $form, obj, function () {
        formty.hideSending($form)
        //alert('done');
        location = '/'
      })
    }
    return false
  })
}

csupp.initCounterList = function () {
  let $form = formty.getForm('form.main')
  let $result = $('#result')
  $form.find('input[name=id]').val('adng') // for test
  $form.$send.click(function () {
    let obj = formty.getObject($form)
    let url = url2.url('/api/counter/' + $form.$id.val(), { b: $form.$b.val(), e: $form.$e.val() })
    request.get(url).end(function (err, res) {
      err = err || res.body.err
      if (err) return showError(err)
      let c = res.body.counters
      let sum = 0
      let html = '<pre class="clean">'
      for (let i = 0; i < c.length; i++) {
        html += '' + date2.makeDateString(new Date(c[i].d)) + '\t' + c[i].c + '<br>'
        sum += c[i].c
      }
      html += '<br>' + sum + '<br>'
      html += '</pre>'
      $result.html(html)
    })
    return false
  })
}

