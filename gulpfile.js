const gulp = require('gulp')

gulp.task('start', function(done) {

  console.log(
    '\x1b[31m',
    `Already moving svgs`
  )

  done()

})

gulp.task('material-design-icons', function(done) {
  let material_icons = ['action', 'alert', 'av', 'communication', 'content', 'device', 'editor', 'file', 'hardware', 'image', 'maps', 'navigation', 'notification', 'places', 'social', 'toggle']
  material_icons.forEach(
      function(folder) {
        gulp.src(`node_modules/material-design-icons/${folder}/svg/production/**.*`).pipe(gulp.dest('public/icons/material-design'))
      }
  )
  done()
})

gulp.task('font-awesome-icons', function(done) {
  let font_awesome_icons = ['brands', 'regular', 'solid']
  font_awesome_icons.forEach(
      function(folder) {
        gulp.src(`node_modules/@fortawesome/fontawesome-free/svgs/${folder}/**.*`).pipe(gulp.dest('public/icons/font-awesome'))
      }
  )
  done()
})

gulp.task('finish', function(done) {

  console.log(
    '\x1b[31m',
    `Finishing moving svgs`
  )

  done()

})

gulp.task('default', gulp.series('start', 'material-design-icons', 'font-awesome-icons', 'finish'))
