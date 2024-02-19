$(document).ready(function(){  
    
   	// 메인배너 텍스트 슬라이드
    $('.first-visual-list').slick({
        infinite: true,
    	fade: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    
        prevArrow : $('.first-btn-prev'), 
        nextArrow : $('.first-btn-next'),
        

    });
    

    // 초기에 페이지 번호 및 토탈 넘버 설정
    var initialCurrentSlide = $('.first-visual-list').slick('slickCurrentSlide') + 1;
    var totalSlides = $('.first-visual-list').slick('getSlick').slideCount;

    // 초기 페이지 번호 설정
    $('.first-current-num').text(initialCurrentSlide);
    // 초기 토탈 넘버 설정
    $('.first-total-num').text(totalSlides);

    // 슬라이더의 afterChange 이벤트 핸들러
    $('.first-visual-list').on('afterChange', function (event, slick, currentSlide) {
        // 현재 슬라이드 번호를 가져옵니다.
        var currentSlideNumber = currentSlide + 1;

        // 페이지 번호 업데이트
        $('.first-current-num').text(currentSlideNumber);
    });


       	// 메인배너 텍스트 슬라이드
           $('.second-visual-list').slick({
            infinite: true,
            fade: true,
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
        
            prevArrow : $('.second-btn-prev'), 
            nextArrow : $('.second-btn-next'),
            
    
        });
        
    
        // 초기에 페이지 번호 및 토탈 넘버 설정
        var initialCurrentSlide = $('.second-visual-list').slick('slickCurrentSlide') + 1;
        var totalSlides = $('.second-visual-list').slick('getSlick').slideCount;
    
        // 초기 페이지 번호 설정
        $('.second-current-num').text(initialCurrentSlide);
        // 초기 토탈 넘버 설정
        $('.second-total-num').text(totalSlides);
    
        // 슬라이더의 afterChange 이벤트 핸들러
        $('.second-visual-list').on('afterChange', function (event, slick, currentSlide) {
            // 현재 슬라이드 번호를 가져옵니다.
            var currentSlideNumber = currentSlide + 1;
    
            // 페이지 번호 업데이트
            $('.second-current-num').text(currentSlideNumber);
        });

});
