/**
 * @file Describe the file
 */
// 获取url中的值
function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
// 为什么要这俩个参数，经验使然。
// 代码中大量的接口调用，rd，qa，online等各环境的切换，都需要改动我们的连接
// API用于接口的连接。。。不同域的链接请先转移到我们自己的后端再输入，谢谢。
// STATIC用于静态文件的链接
// 不同的项目可能还需要不同的PATH
window.PATH = {
    API: '',
    STATIC: ''
};
// 线上与测试的配置
// if (location.host.match(/m/)) {
//     window.PATH = {
//         API: '/,
//         STATIC: '/
//     };
//     console.log = function () {};
//     console.error = function () {};
// }
// if (location.host.match(/m:/)) {
//     window.PATH = {
//         API: '/,
//         STATIC: '/
//     };
//     console.log = function () {};
//     console.error = function () {};
// }
// 使用ueditor的配置要求。
// window.UEDITOR_HOME_URL = '/builder/static/js/third_party/ueditor/';
var requirePATH = "https://localhost/demos/zz_Angular_study/withRequire";
var require = {
    // baseUrl: window.PATH.STATIC + '/builder/static/js',
    baseUrl: window.PATH.STATIC + '/static/js',
    paths: {
        jquery: requirePATH + '/lib/jquery.min',
        // angular: requirePATH + '/lib/angular.min',
        // angularRoute: requirePATH + '/lib/angular-route.min'
    },
    shim: {
        jquery: {
            exports: '$'
        },
    }
};
