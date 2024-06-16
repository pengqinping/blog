
# Grunt

> **Grunt JavaScript 世界的构建工具** 这是学习JavaScript 的必备技能 .关于NPM的知识有兴趣的可以了解,不了解也没有关系,按照命令执行就行了.

1. [官网介绍](http://www.gruntjs.net/)
2. [环境搭建,快速开始](http://www.gruntjs.net/getting-started)
3. 实例,我以这个博客为例,其中用到了**GruntFile** 来编译压缩Js,css

```Javascript
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'js/hux-blog.js',
                dest: 'js/hux-blog.min.js'
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    // general less/hux-blog.less to css/hux-blog.css file.
                    "css/hux-blog.css": "less/hux-blog.less"
                }
            },
            minified: {
                options: {
                    paths: ["css"],
                    cleancss: true,
                    compress: true //去掉空格和换行
                },
                files: {
                    "css/hux-blog.min.css": "less/hux-blog.less"
                }
            }
        },
        //添加编译文件顶部注释
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/hux-blog.css', 'css/hux-blog.min.css', 'js/hux-blog.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/hux-blog.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less', 'usebanner']);
    grunt.registerTask('lessMinicss','less:minified');

};
```

> <code>grunt.registerTask('lessMinicss','less:minified');</code> 举例,定义一个 **task** __lessMinicss__ 然后会执行我们 less下面的minified 这个是grunt中的less插件,针对less语法的编译为css文件和对css文件的压缩. 