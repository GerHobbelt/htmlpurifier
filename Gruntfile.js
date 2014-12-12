// vim: set ts=2 sw=2 sts=2 et :
/*jshint camelcase: false */
/*global module:false */


module.exports = function(grunt) {
  grunt.initConfig({
    upstream: {
      options: {
        upstreamBranch: 'master',
        devBranch: 'debian'
      }
    },
    bump: {
      options: {
        files: ['package.json'],
        commitFiles: ['package.json'],
        push: false,
        pushTo: 'origin',
        createTag: false
      }
    },

    changelog: {
      options: {
        editor: 'editor'
      }
    }

  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  grunt.registerTask('default', [
  ]);
  

};
