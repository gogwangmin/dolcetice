$(function(){
    //review list toggle
    $(".review_sec .list li >button").each(function(){
        $(this).click(function(){
            $(this).parent().toggleClass("open")
            $(this).parent().find(".desc").stop().slideToggle()
            $(this).parent().siblings().removeClass("open").find(".desc").stop().slideUp()
        });
    });

    //date picker
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',	//날짜 포맷이다. 'yy-mm-dd' 를 보편적으로 사용
        prevText: '이전 달',	// 마우스 오버시 이전달 텍스트
        nextText: '다음 달',	// 마우스 오버시 다음달 텍스트
        closeText: '닫기', // 닫기 버튼 텍스트 변경
        currentText: '오늘', // 오늘 텍스트 변경
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
        showMonthAfterYear: true,	// true : 년 월  false : 월 년 순으로 보여줌
        yearSuffix: '년',	
        showButtonPanel: true,	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
        buttonImageOnly: true,	// input 옆에 조그만한 아이콘으로 캘린더 선택가능하게 하기
        buttonImage: "images/calendar.gif",	// 조그만한 아이콘 이미지
        buttonText: "Select date"	// 조그만한 아이콘 툴팁
    });
    $("#datepicker_01").datepicker();
    $("#datepicker_02").datepicker();
    $("#datepicker_03").datepicker();

    //detail swiper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 15,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        effect: "fade",
        thumbs: {
            swiper: swiper,
        },
    });

    //detail tab
    $(".datail_sec .tab_menu ul li button").each(function(){
        $(this).click(function(){
            let idxNum = $(this).parent().index();
            $(this).parent().addClass("active").siblings().removeClass("active")
            $(".datail_sec .tab_cont ul li").eq(idxNum).addClass("active").siblings().removeClass("active")
        });
    });

    //detail tab option toggle
    $(".datail_sec .option_open_wrap .btn_option_open").click(function(){
        $(".datail_sec .right").addClass("active")
    });
    $(".datail_sec .option_hide_wrap .btn_option_hide").click(function(){
        $(".datail_sec .right").removeClass("active")
    });
});//raedy


