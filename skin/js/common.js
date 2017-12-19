/**

 * mainFun : 로그인 클릭과 검색클릭시 하위메뉴 보임.

 */

jQuery(function($) {



    // globalFun

    var globalFun = {

        init: function() {

            // this.loginFun();

            this.searchFun();

            this.gnbFun();

            this.familyFun();

        },

        searchFun: function() {

            //검색 보이고 감추기

            $('.top-menu .search-icon a').on('click', function(event) {

                event.preventDefault();

                if ($('#search').css('display') == 'none') {

                    if ($('#gnb').hasClass('gnb')) {

                        $('#gnb').removeClass('gnb').addClass('search');

                    }

                    $('#search').slideDown(200);

                } else {

                    if ($('#gnb').hasClass('search')) {

                        $('#gnb').removeClass('search').addClass('gnb');

                    }

                    $('#search').slideUp(200);

                };

            });

        },

        gnbFun: function() {

            var web;

            if ($(window).width() > 768) {

                web = true;

            };



            if (web) { //웹

                $('.gnb-ul-depth01 > li').mouseenter(function() {

                    $('.gnb-wrap').addClass('on');

                    $('.gnb-ul-depth02').hide();

                    $(this).children('ul').show();

                });

                $('#gnb').mouseleave(function() {

                    $('.gnb-wrap').removeClass('on');

                    $('.gnb-ul-depth02').hide();

                });

            } else { //모바일 

                /* gnb 보이고 감추기 */

                $('#gnb-btn').on('click', function(event) {

                    event.preventDefault();

                    if ($('#gnb .gnb-ul-wrap').css('display') == 'block') {

                        $('#gnb .gnb-ul-wrap').slideUp(200);

                    } else {

                        $('#gnb .gnb-ul-wrap').slideDown(200);

                        $('#gnb .gnb-ul-depth01 li').eq(0).addClass('active');

                    };

                });

                $('#gnb .gnb-ul-depth01> li>a').click(function(e) {

                    e.preventDefault();

                    $('#gnb .gnb-ul-depth01> li').removeClass('active');

                    $(this).parent('li').addClass('active');

                    $('#gnb .gnb-ul-depth01> li>.gnb-ul-depth02').hide();

                    $(this).next('ul').show();

                });

                $('#gnb .gnb-ul-depth02>li>a').click(function(e) {

                    var hasDepth03 = $(this).siblings('ul.gnb-ul-depth03');

                    if (!$(this).hasClass('on')) {

                        $('#gnb .gnb-ul-depth02>li>a').removeClass('on');

                        $('ul.gnb-ul-depth03').slideUp();

                    }

                    if (hasDepth03.length > 0) {

                        e.preventDefault();

                        $(this).addClass('on');

                        hasDepth03.slideDown();

                    }

                });

            }

        },

        // 패밀리 사이트 보이고 감추기

        familyFun: function() {

            $('.top-menu .family-link').on('click', function(event) {

                event.preventDefault();

                if ($('.top-menu .family-site').css('display') == 'none') {

                    $('.top-menu .family-site').show();

                } else {

                    $('.top-menu .family-site').hide();

                };

            });

        }



    }



    globalFun.init();





    function goTop() {

        var btn = $('#gotop');

        var scrTop = $(window).scrollTop();

        var winH = $(window).height();

        if (scrTop > winH) {

            btn.show();

        } else {

            btn.hide();

        };

        btn.click(function(e) {

            e.preventDefault();

            $(window).scrollTop(0);

            btn.hide();

        });

    }

    $(window).scroll(function() {

        goTop();

    });



    // 고객센터 faq

    var faqFun = {

        init: function() {

            this.faqToggle();

        },

        faqToggle: function() {

            var dt = $('.qna dt');



            dt.on('click', function(event) {

                event.preventDefault();

                if ($(this).next('dd').css('display') == 'none') {

                    // 닫혀있어서 열어야 됨.

                    dt.find('a').removeClass();

                    $(this).children('a').addClass('close');

                    $('.qna dd').slideUp(200);

                    $(this).next('dd').slideDown(200);



                } else {

                    // 열려있어 닫아야 됨.

                    dt.find('a').removeClass();

                    $(this).children('a').addClass('open');

                    $(this).next('dd').slideUp(200);



                }

            });

        }

    }

    faqFun.init();



    // Popup

    popupFun = function(num) {

        $('.next-img-wrap img').hide();

        $('.popup-img-' + num).show();

        $('.next-img').bPopup();

    };

    // function popupFun(num){

    //   $('.next-img-wrap img').hide();

    //   $('.popup-img-0' + num).show();

    //   $('.next-img').bPopup();

    // };



    // healthcare-0201 제품소개 하위탭부분.

    (function subtab() {

        var sb01 = $('.sub-tab-header .sb-tab-01'),

            sb02 = $('.sub-tab-header .sb-tab-02'),

            sb03 = $('.sub-tab-header .sb-tab-03');



        $('.sub-tab-header ul li').on('click', function(event) {

            event.preventDefault();



            if ($(this).hasClass('sb-tab-01')) {

                $('.sub-tab-contents').removeClass('show').addClass('hide');

                $('.sub-tab-header').find('a').removeClass('active');

                $('.sub-tab-contents.sub-tab-contents-01').addClass('show');

                $(this).children('a').addClass('active');

            } else if ($(this).hasClass('sb-tab-02')) {

                $('.sub-tab-contents').removeClass('show').addClass('hide');

                $('.sub-tab-header').find('a').removeClass('active');

                $('.sub-tab-contents.sub-tab-contents-02').addClass('show');

                $(this).children('a').addClass('active');

            } else {

                $('.sub-tab-contents').removeClass('show').addClass('hide');

                $('.sub-tab-header').find('a').removeClass('active');

                $('.sub-tab-contents.sub-tab-contents-03').addClass('show');

                $(this).children('a').addClass('active');

            };

        });



    }());



    //mobile 셀렉트 페이지 이동

    $(document).ready(function() {

        $('.select-tabmenu').change(function(event) {

            var url = $(this).val();

            if ($(this).hasClass('move-page')) window.location.href = url;

        });



        // 제품소개 요닥 마이페이지 드롭다운

        function yodocDropdown() {

            var fList01 = $('.top-module .custom-link .f-list-01'),

                fList02 = $('.top-module .custom-link .f-list-02'),

                fList03 = $('.top-module .custom-link .f-list-03');

            fList04 = $('.top-module .custom-link .f-list-04');

            fList05 = $('.top-module .custom-link .f-list-05');

            fList06 = $('.top-module .custom-link .f-list-06');



            fList01.on('click', function(event) {

                event.preventDefault();

                if (fList02.hasClass('hide')) {

                    fList02.removeClass('hide').addClass('block');

                    fList03.removeClass('hide').addClass('block');

                    fList04.removeClass('hide').addClass('block');

                    fList05.removeClass('hide').addClass('block');

                    fList06.removeClass('hide').addClass('block');

                } else {

                    fList02.removeClass('block').addClass('hide');

                    fList03.removeClass('block').addClass('hide');

                    fList04.removeClass('block').addClass('hide');

                    fList05.removeClass('block').addClass('hide');

                    fList06.removeClass('block').addClass('hide');

                }

            });

        }

        yodocDropdown();

    });



    //탭 버튼 ie bug fix

    $('button>a').click(function(event) {

        event.preventDefault();

    });

    $('button').click(function() {

        if ($(this).children('a').length > 0) {

            var link = $(this).children('a').attr('href');

            window.location.href = link;

        }

    });



    // 푸터 패밀리 사이트

    function footerFun() {

        var fList01 = $('#footer .custom-link .f-list-01'),

            fList02 = $('#footer .custom-link .f-list-02'),

            fList03 = $('#footer .custom-link .f-list-03');



        fList01.on('click', function(event) {

            event.preventDefault();

            if (fList02.hasClass('hide')) {

                fList02.removeClass('hide').addClass('block');

                fList03.removeClass('hide').addClass('block');

            } else {

                fList02.removeClass('block').addClass('hide');

                fList03.removeClass('block').addClass('hide');

            }

        });

    }

    footerFun();



    /* gnb 보이고 감추기 */

    $('#gnb-btn').on('click', function(event) {

        event.preventDefault();

        if ($('#gnb .gnb-ul-wrap.gnb-mobile').is(':visible')) {

            $('#gnb .gnb-ul-wrap.gnb-mobile').slideUp(200);

        } else {

            $('#gnb .gnb-ul-wrap.gnb-mobile').slideDown(200);

        }

    });

    $('#gnb .gnb-mobile .gnb-ul-depth01> li>a').click(function(e) {

        e.preventDefault();

        $('#gnb .gnb-mobile .gnb-ul-depth01> li').removeClass('active');

        $(this).parent('li').addClass('active');

        $('#gnb .gnb-mobile .gnb-ul-depth01> li>.gnb-ul-depth02').hide();

        $(this).next('ul').show();

    });

    $('#gnb .gnb-mobile .gnb-ul-depth02>li>a').click(function(e) {

        var hasDepth03 = $(this).siblings('ul.gnb-ul-depth03');

        if (!$(this).hasClass('on')) {

            $('#gnb .gnb-mobile .gnb-ul-depth02>li>a').removeClass('on');

            $('.gnb-mobile ul.gnb-ul-depth03').slideUp();

        }

        if (hasDepth03.length > 0) {

            e.preventDefault();

            $(this).addClass('on');

            hasDepth03.slideDown();

        }

    });



    // lnb 보이고 감추기, 현재 링크를 포함하면 클래스 추가

    var lnbFun = {

        init: function() {

            this.lnbMore();

        },

        lnbMore: function() {

            var lnb = $('#sidebar .lnb > li'),

                back = document.referrer,

                backPageFolder = back.split('/')[back.split('/').length - 2], //이전 주소

                current = location.href, //현재 주소

                currentPageFolder = current.split('/')[current.split('/').length - 2], // 카테고리

                currentLink = current.split('/')[current.split('/').length - 1], // 현재주소에서 마지막 부분(클래스)

                // currentLink3 = current.split('/'),

                currentLink2 = currentLink.split('?')[0], // 주소에 ? 앞부분 추출

                openLi = lnb.find('a[href*="' + currentLink2 + '"]'), // 사이드바에서 현재주소를 포함한 요소 찾기

                hasUl = openLi.parent().parent(), // 찾은 요소의 부모(ul)

                lnbA = lnb.find('a'); // 사이드바 링크 요소

            // currentLink = currentLnb[1],

            // currentLnb = current.split('-'),



            // console.log('back: ' + back);

            console.log('current: ' + current);

            console.log('currentPageFolder: ' + currentPageFolder);

            console.log('currentLink: ' + currentLink);

            console.log('currentLink2: ' + currentLink2);

            // console.log('openLi: ' + openLi);

            // console.log('hasUl: ' + hasUl);



            // ul hide

            $('#sidebar .lnb li .close').next('ul').hide();





            // 현재페이지 주소를 가지고 있는 링크찾아 열기

            hasUl.parent().children('a').removeClass('close').addClass('open');

            hasUl.show(0);



            lnb.on('click', function(event) {

                if ($(this).children('a').hasClass('close') && $(this).has('ul')) {

                    // 여는거

                    $(this).children('a').removeClass('close').addClass('open');

                    $(this).find('ul').slideDown(200);

                } else if ($(this).children('a').hasClass('open') && $(this).has('ul')) {

                    // 닫는거

                    $(this).children('a').removeClass('open').addClass('close');

                    $(this).find('ul').slideUp(200);

                }



            });





            // console.log(currentLink.length);



            // 현재주소와 사이드바 링크를 비교

           


        }



    };

    lnbFun.init();



});