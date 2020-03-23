const { src, dest } = require('gulp')

exports.default = function() {
  console.log(
    '\x1b[31m',
    `
    ███████  ███████  ██   ██  ██  ██  ██   ██  ███████
    ██       ██   ██  ██   ██      ██  ██   ██  ██   ██
    ██       ████ ██  ██   ██  ██  ██  ███████  ████ ██
    ██       ██   ██   █   █   ██  ██  ██   ██  ██   ██
    ███████  ██   ██    ███    ██  ██  ██   ██  ██   ██
  `
  )

  src('resources/fonts/**/*').pipe(dest('dist/fonts'))
  return src('resources/icons/**/*').pipe(dest('dist/icons'))
}
