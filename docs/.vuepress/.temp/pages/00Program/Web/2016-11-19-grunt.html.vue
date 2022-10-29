<template><div><h1 id="相关知识" tabindex="-1"><a class="header-anchor" href="#相关知识" aria-hidden="true">#</a> 相关知识</h1>
<blockquote>
<p><strong>Grunt JavaScript 世界的构建工具</strong> 这是学习JavaScript 的必备技能 .关于NPM的知识有兴趣的可以了解,不了解也没有关系,按照命令执行就行了.</p>
</blockquote>
<ol>
<li><a href="http://www.gruntjs.net/" target="_blank" rel="noopener noreferrer">官网介绍<ExternalLinkIcon/></a></li>
<li><a href="http://www.gruntjs.net/getting-started" target="_blank" rel="noopener noreferrer">环境搭建,快速开始<ExternalLinkIcon/></a></li>
<li>实例,我以这个博客为例,其中用到了<strong>GruntFile</strong> 来编译压缩Js,css</li>
</ol>
<div class="language-Javascript line-numbers-mode" data-ext="Javascript"><pre v-pre class="language-Javascript"><code>module.exports = function(grunt) {

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
                    paths: [&quot;css&quot;]
                },
                files: {
                    // general less/hux-blog.less to css/hux-blog.css file.
                    &quot;css/hux-blog.css&quot;: &quot;less/hux-blog.less&quot;
                }
            },
            minified: {
                options: {
                    paths: [&quot;css&quot;],
                    cleancss: true,
                    compress: true //去掉空格和换行
                },
                files: {
                    &quot;css/hux-blog.min.css&quot;: &quot;less/hux-blog.less&quot;
                }
            }
        },
        //添加编译文件顶部注释
        banner: '/*!\n' +
            ' * &lt;%= pkg.title %&gt; v&lt;%= pkg.version %&gt; (&lt;%= pkg.homepage %&gt;)\n' +
            ' * Copyright &lt;%= grunt.template.today(&quot;yyyy&quot;) %&gt; &lt;%= pkg.author %&gt;\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '&lt;%= banner %&gt;'
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code>grunt.registerTask('lessMinicss','less:minified');</code> 举例,定义一个 <strong>task</strong> <strong>lessMinicss</strong> 然后会执行我们 less下面的minified 这个是grunt中的less插件,针对less语法的编译为css文件和对css文件的压缩.</p>
</blockquote>
</div></template>


