$(function() {
    $(".search-btn").on('touchstart', function(event) {
        event.preventDefault();
        var city = $("#city").val();
        getCityWeather(city);
    });
    function getCityWeather(city) {
        console.log(city);
        $.get('http://wthrcdn.etouch.cn/weather_mini?city='+city, function(data) {
            console.log(data);
            createWeather(JSON.parse(data));
        });
    }
    function createWeather(data) {
        console.log(data.status);
       if (data.status != 1000) {
            $(".con").html('');
            $('<p id="tip">请填写正确的城市！</p>').appendTo('.con');
       }else{
            $(".con").html('');
            $(data.data.forecast).each(function(index, el) {
                var _html = "";
                _html += '<ul class="list-group"><li class="list-group-item list-group-item-success">日期：'+el.date;
                _html += '</li><li class="list-group-item list-group-item-info">天气：'+ el.type;
                _html += '</li><li class="list-group-item list-group-item-warning">最高温："' + el.high;
                _html += '</li><li class="list-group-item list-group-item-danger">最低温："' + el.low + "</li></ul>";
                  $(_html).appendTo('.con');
            });
       }
    }
    window.setInternal(function () {
        var ct = navigator.connection.type;
        if (ct == Connection.CELL_4G) {
            alert("Connection.CELL_4G");
        }else if (ct == Connection.NONE) {
            alert("Connection.NONE");
        }else if (ct == Connection.WIFI) {
            alert("Connection.WIFI");
        }
    },3000);
})
