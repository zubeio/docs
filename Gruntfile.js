'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9100;
var modRewrite = require('connect-modrewrite');
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            less: {
                files: ['<%= yeoman.app %>/styles/**/*.*'],
                tasks: ['less', 'postcss']
            },
            livereload: {
                options: {
                    livereload: grunt.option('livereloadport') || LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/**/*.*',
                    '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
                    '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp}',
                    '<%= yeoman.app %>/videos/**/*.{mp4}',
                    '<%= yeoman.app %>/scripts/templates/**/*.{ejs,mustache,hbs}',
                    'test/spec/**/*.js'
                ]
            },
            jst: {
                files: [
                    '<%= yeoman.app %>/scripts/templates/**/*.ejs'
                ],
                tasks: ['jst']
            },
            // test: {
            //     files: ['<%= yeoman.app %>/scripts/**/*.js', 'test/spec/**/*.js'],
            //     tasks: ['test:false']
            // }
        },
        connect: {
            options: {
                port: grunt.option('port') || SERVER_PORT,
                // change this to 'localhost' to disable server access from outside
                hostname: '0.0.0.0'
            },
            // proxies: [{
            //     context: '/api',
            //     host: 'localhost',
            //     port: 3000
            // }, {
            //     context: '/auth',
            //     host: 'localhost',
            //     port: 3000
            // }, {
            //     context: '/connect',
            //     host: 'localhost',
            //     port: 3000
            // }, {
            //     context: '/socket.io',
            //     host: 'localhost',
            //     port: 3000,
            //     ws: true
            // }],
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            proxySnippet,
                            modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.gif|\\.jpg|\\.jpeg|\\.woff|\\.ttf|\\.eot|\\.mp4$ /index.html [L]']),
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            },
            test: {
                path: 'http://localhost:<%= connect.test.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp',
            backup: '.tmp/backup'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/**/*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        // mocha: {
        //     all: {
        //         options: {
        //             run: true,
        //             urls: ['http://localhost:<%= connect.test.options.port %>/index.html']
        //         }
        //     }
        // },
        less: {
            dist: {
                files: {
                    '.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.less'
                }
            },
            server: {
                files: {
                    '.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.less'
                },
                options: {
                    sourceMap: true,
                    sourceMapFileInline: true
                }
            }
        },
        postcss: {
            options: {
                map: true, // inline sourcemaps
                // or
                // map: {
                //     inline: false, // save all sourcemaps as separate files...
                //     annotation: 'dist/css/maps/' // ...to the specified directory
                // },
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 2 versions',
                        cascade: true,
                        remove: true
                    }), // add vendor prefixes
                ]
            },
            dist: {
                src: '.tmp/styles/**/*.css'
            }
        },
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        useminPrepare: {
            html: ['<%= yeoman.app %>/**/*.html'],
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/**/*.html'],
            css: ['<%= yeoman.dist %>/styles/**/*.css'],
            js: ['<%= yeoman.dist %>/scripts/*.js'],
            options: {
                // Added this to make dist css images correct
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images'],
                patterns: {
                    js: [
                        // check to make sure this regex does not break css font names
                        [/(images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
                    ]
                    // if it does break fonts, maybe add this
                    // css: [
                    //     [ /(?:src=|url\(\s*)['"]?([^'"\)\?#]+)['"]?\s*\)?/gm, 'Update the CSS to reference our revved images']
                    // ]
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '*.{png,jpg,jpeg,svg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/**/*.css',
                        '<%= yeoman.app %>/styles/**/*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        'favicons/{,*/}*.*',
                        'images/**/*.*',
                        'styles/fonts/**/*.{eot,svg,ttf,woff}',
                        'vendor/fonts/**/*.{eot,svg,ttf,woff}',
                        'videos/{,*/}*.*'
                    ]
                }, {
                    src: 'node_modules/apache-server-configs/dist/.htaccess',
                    dest: '<%= yeoman.dist %>/.htaccess'
                }, {
                    src: '.tmp/styles/main.css',
                    dest: '<%= yeoman.dist %>/styles/main.css'
                }]
            },
            compressed: {
                expand: true,
                dot: true,
                cwd: '.tmp/gzip',
                dest: '<%= yeoman.dist %>',
                src: ['**/*.*']
            }
        },
        jst: {
            compile: {
                options: {
                    templateSettings: {
                        variable: 'data',
                        evaluate    : /\[\[(.+?)\]\]/g,
                        interpolate : /\[\[-(.+?)\]\]/g,
                        escape      : /\[\[=(.+?)\]\]/g
                    }
                },
                files: {
                    '.tmp/scripts/templates.js': ['<%= yeoman.app %>/scripts/templates/**/*.ejs']
                }
            }
        },
        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 32
            },
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/bower_components/font-awesome/fonts/*.*',
                        '<%= yeoman.dist %>/bower_components/octicons/octicons/*.*',
                        '<%= yeoman.dist %>/favicons/*.*',
                        '<%= yeoman.dist %>/images/{,*/}*.*',
                        '!<%= yeoman.dist %>/images/emails/*.*',
                        '!<%= yeoman.dist %>/images/no_rev/*.*',
                        '<%= yeoman.dist %>/videos/{,*/}*.*',
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/static/**/*.*',
                        '<%= yeoman.dist %>/styles/fonts/**/*.*',
                        '<%= yeoman.dist %>/styles/**/*.css',
                        '<%= yeoman.dist %>/vendor/fonts/**/*.*'
                    ]
                }
            }
        },
        compress: {
            main: {
                options: {
                   mode: 'gzip'
                },
                expand: true,
                cwd: '<%= yeoman.dist %>',
                src: ['*/**'],
                dest: '.tmp/gzip'
            }
        },
        shell: {
            deploy: {
                command: function () {
                    var branch = grunt.option('branch') || 'master';
                    return 'ssh deploy@zube.io -A \'cd /home/deploy/zube/docs; git checkout ' + branch + '; git pull origin ' + branch + '\'';
                }
            },
            stage: {
                command: function () {
                    var branch = grunt.option('branch') || 'master';
                    return 'ssh deploy@staging.zube.io -A \'cd /home/deploy/zube/docs; git checkout ' + branch + '; git pull origin ' + branch + '\'';
                }
            }
        }
    });

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve' + (target ? ':' + target : '')]);
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        if (target === 'test') {
            return grunt.task.run([
                'clean:server',
                'createDefaultTemplate',
                'jst',
                'less:server',
                'connect:test',
                'open:test',
                'watch'
            ]);
        }

        grunt.task.run([
            'clean:server',
            'createDefaultTemplate',
            'jst',
            'less:server',
            'postcss',
            'configureProxies:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', function (isConnected) {
        isConnected = Boolean(isConnected);
        var testTasks = [
                'clean:server',
                'createDefaultTemplate',
                'jst',
                'less',
                'connect:test',
                'mocha',
            ];

        if(!isConnected) {
            return grunt.task.run(testTasks);
        } else {
            // already connected so not going to connect again, remove the connect:test task
            testTasks.splice(testTasks.indexOf('connect:test'), 1);
            return grunt.task.run(testTasks);
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'createDefaultTemplate', // creats templates file in .tmp
        'jst', // fills in templates file in .tmp
        'less:dist', // compilies less files to css in .tmp
        'postcss:dist', // adds venor prefixes to css
        'useminPrepare', // something with build targets
        'imagemin', // compress files and moves them to dist
        'htmlmin', // moves html over to dist
        'concat', // makes js in .tmp
        // 'cssmin', // minifies .tmp css and moves to dist // but in css min and bootstrap
        'uglify', // uglifies .tmp js and moves to dist
        'copy', // copies things to dist
        'rev', // md5 hash files
        'usemin' // replaces references in code
    ]);

    grunt.registerTask('default', [
        'jshint',
        // 'test',
        'build'
    ]);

    grunt.registerTask('deploy', ['shell:deploy']);

    grunt.registerTask('stage', ['shell:stage']);
};
