
  var openEl = document.getElementById('open')
  if (openEl) {
    openEl.addEventListener('click', function(e) {

      var sidebar = document.getElementById('sidebar')
      if (sidebar) {
        if (sidebar.classList.contains('sidebar--is-open')) {
          sidebar.classList.remove('sidebar--is-open')
        } else {
          sidebar.classList.add('sidebar--is-open')
        }
      }
      e.preventDefault()
    })
  }
