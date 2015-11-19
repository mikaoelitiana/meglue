module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "assets/css/styles.css": "less/styles.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
}
