/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var totalDays = Math.floor(seconds / (3600 * 24));
	// 计算年、月、日
    var years = current.getFullYear() - date.getFullYear();
    var months = current.getMonth() - date.getMonth();
    var days = current.getDate() - date.getDate();
    // 调整月份和天数
    if (days < 0) {
        months--;
        // 获取上个月的天数
        var lastDay = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
        days += lastDay;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
	//计算时分秒
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
    var result = "<span class=\"digit\">" + totalDays + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒 【<span class=\"digit\">" + years + "</span>年<span class=\"digit\">" + months + "</span>个月<span class=\"digit\">" + days + "</span>天】"; 
	$("#clock").html(result);
}

function timeElapseTogether(date){
	var current = new Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var totalDays = Math.floor(seconds / (3600 * 24));
	// 计算年、月、日
    var years = current.getFullYear() - date.getFullYear();
    var months = current.getMonth() - date.getMonth();
    var days = current.getDate() - date.getDate();
    // 调整月份和天数
    if (days < 0) {
        months--;
        // 获取上个月的天数
        var lastDay = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
        days += lastDay;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
    var result = "<span class=\"digit\">" + totalDays + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒 【<span class=\"digit\">" + years + "</span>年<span class=\"digit\">" + months + "</span>个月<span class=\"digit\">" + days + "</span>天】"; 
    $("#clock-together").html(result);
}
