import eslint from 'gulp-eslint'
import gulp from 'gulp'
import webpackStream from 'webpack-stream'
import jsonlint from 'gulp-jsonlint'
import path from 'path'
import del from 'del'
import eslintThreshold from 'gulp-eslint-threshold'

import WebpackDevCfg from './webpack/dev'

const SRC_DIR = './src'
const DIST_DIR = './dist'
const DIST_WWW_DIR = path.resolve(DIST_DIR, 'www')
const JS_FILES = [path.resolve(SRC_DIR, '**.js'), '*.js']
const JSON_FILES = [path.resolve(SRC_DIR, '**.json'), '*.json']

gulp.task('lint', ['jsonlint', 'jslint'])

gulp.task('jsonlint', () => {
  return gulp
    .src(JSON_FILES)
    .pipe(jsonlint())
    .pipe(jsonlint.reporter())
})

gulp.task('jslint', () => {
  return gulp
    .src(JS_FILES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslintThreshold.afterWarnings(0, (warnings) => {
      throw new Error(`${warnings} ESLint warnings`)
    }))
})

gulp.task('clean', () => {
  return del(DIST_DIR)
})

gulp.task('default', ['pack:dev'])

gulp.task('pack:dev', bundleTask(WebpackDevCfg))

/** @param {object} cfg
    @return {function} */
function bundleTask(cfg) {
  return () => {
    return gulp
      .src(SRC_DIR)
      .pipe(webpackStream(cfg))
      .pipe(gulp.dest(DIST_WWW_DIR))
  }
}