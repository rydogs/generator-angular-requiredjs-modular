'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var AngularRequiredjsModularGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous AngularRequiredjsModular generator!'));

    var prompts = [
      {
        name: 'appName',
        message: 'What is the name of your new app?'
      },
      {
        name: 'appVersion',
        message: 'What is the initial version number?',
        default: '0.1.0'
      },
      {
        type: 'confirm',
        name: 'bootstrap',
        message: 'Would you like to include Bootstrap?',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.bootstrap = props.bootstrap;
      this.appName = props.appName;
      this.appVersion = props.appVersion;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/common');
    this.template('app/app.js', 'app/app.js');
    this.template('app/main.js', 'app/main.js');
    this.template('app/index.html', 'app/index.html');

    this.mkdir('test');
    this.mkdir('test/specs');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AngularRequiredjsModularGenerator;
