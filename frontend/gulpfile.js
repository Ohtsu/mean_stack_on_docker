var gulp = require('gulp');
var path = require('path');
var minimist = require('minimist');
var pathvar = path.parse(__dirname);
var current_dir = pathvar.name;
const SOLUTION_NAME = current_dir;
var argv = minimist(process.argv.slice(2));

var dateFormat = {
  fmt : {
    "yyyy": function(date) { return date.getFullYear() + ''; },
    "MM": function(date) { return ('0' + (date.getMonth() + 1)).slice(-2); },
    "dd": function(date) { return ('0' + date.getDate()).slice(-2); },
    "hh": function(date) { return ('0' + date.getHours()).slice(-2); },
    "mm": function(date) { return ('0' + date.getMinutes()).slice(-2); },
    "ss": function(date) { return ('0' + date.getSeconds()).slice(-2); }
  },
  format:function dateFormat (date, format) {
    var result = format;
    for (var key in this.fmt)
      result = result.replace(key, this.fmt[key](date));
    return result;
  }
};

var time_version = dateFormat.format(new Date(),'yyyyMMddhhmm');

const message = argv['m'];

var TARGET = "../"+SOLUTION_NAME+"_"+time_version;
if (message != undefined) {
    TARGET = TARGET  +"_"+message;
}
const TARGET_ANGULAR = TARGET + "/node_modules/@angular";



gulp.task('localbackup',function(){
  console.log('current_dir -------',current_dir);
  console.log('time_version ------',time_version);
  console.log('target_path  ------',TARGET);
  console.log('message      ------',argv['m']);
  gulp
	.src(['./**','./.**','!./node_modules/**'])
	.pipe(gulp.dest(TARGET));
});


gulp.task('default',['localbackup']);