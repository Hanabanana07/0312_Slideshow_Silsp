$(function(){

    setInterval(fnSlide, 3000);
    //              함수명만!, 1/1000
//    fnSlide();         // 함수를 실행시키는 코드(=함수의 호출, Call)

    function fnSlide() {       // 함수가 호출되었을 때 실행해야하는 내용(=함수의 정의 Define, Definition)

    $("#slideShuttleFrame").animate({
            "margin-left": "-1000px"
        },
        1000,
        function(){

        //  insertAfter 적용위치
        $("#slideShuttleFrame>a:first-child").insertAfter("#slideShuttleFrame>a:last-child");

                $("#slideShuttleFrame").css({
                    "margin-left": "0"
                });
        });

    }

});
