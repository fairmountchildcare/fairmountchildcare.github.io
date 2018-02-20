(function () {
  'use strict'

  function hasClass (el, clzz) {
    if (el.hasOwnProperty('classList')) {
      return el.classList.contains(clzz) > -1
    } else {
      var clzzes = el.className.split(' ')
      return clzzes.indexOf(clzz) > -1
    }
  }

  function toggleClass (el, clzz) {
    if (el.hasOwnProperty('classList')) {
      el.classList.toggle(clzz)
    } else {
      var clzzes = el.className.split(' ')
      var idx = clzzes.indexOf(clzz)

      if (idx > -1) {
        clzzes.splice(idx, 1)
      } else {
        clzzes.push(clzz)
      }

      el.className = clzzes.join(' ')
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    //  Deobfuscate
    function haebg46 (a) {
      return a.replace(/[a-zA-Z0-9]/g, function (b) {
        var c = b.charCodeAt(0)
        if (c >= 48 && c <= 57) {
          //  number
          return +b >= 3 ? +b - 3 : +b + 7
        } else {
          return String.fromCharCode((b <= 'Z' ? 90 : 122) >= (b = c + 13) ? b : b - 26)
        }
      })
    }

    Array.apply(null, document.querySelectorAll('.hafpenzoyr')).forEach(function (x) {
      var href = x.getAttribute('href') || ''
      var html = x.textContent || ''

      if (hasClass(x, 'hafpenzoyr--rznvy')) {
        x.setAttribute('href', 'mailto:' + haebg46(href.replace(/^mailto:/, '')))
        toggleClass(x, 'hafpenzoyr--rznvy')
      } else if (hasClass(x, 'hafpenzoyr--gry')) {
        x.setAttribute('href', 'tel:' + haebg46(href.replace(/^tel:/, '')))
        toggleClass(x, 'hafpenzoyr--gry')
      }

      x.textContent = haebg46(html)
      toggleClass(x, 'hafpenzoyr')
    })
  })
})()
