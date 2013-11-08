/**
 * Created with JetBrains RubyMine.
 * User: kimio
 * Date: 11/8/13
 * Time: 2:37 PM
 * To change this template use File | Settings | File Templates.
 */

NProgress.configure({
    speed: 500
});

$(document).ready(function () {
    NProgress.start();
});

$(window).load(function(){
    NProgress.done();
});
