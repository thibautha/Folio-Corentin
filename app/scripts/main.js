(function($w) {

    var $background = $('.background'),
        $topLeft = $('.top-left'),
        $topRight = $('.top-right'),
        $bottomLeft = $('.bottom-left'),
        $bottomRight = $('.bottom-right'),
        $content = $('.content'),
        $hello = $('.hello'),
        $title = $('h1'),
        $cartridge = $('.cartridge'),
        $cartridgeContent = $('.cartridge p')
        $ad = $('.ad'),
        $link = $('.link'),
        $top = $('.top'),
        $left = $('.left'),
        $bottom = $('.bottom'),
        $right = $('.right'),
        $dash = $('.dash'),
        $contentHidde =[$hello, $title, $cartridge, $ad, $link];

  $( window ).load(function() {
      console.log('hello Corentin');
      TweenLite.to($topLeft, 1 ,{ y: 20, x: 20});
      TweenLite.to($topRight, 1 ,{ y: 20, x: -20});
      TweenLite.to($bottomLeft, 1 ,{ y: -20, x: 20});
      TweenLite.to($bottomRight, 1 ,{ y: -20, x: -20, onComplete: function() {
          TweenLite.set($content, { visibility : 'visible'});
          TweenLite.set($contentHidde, { opacity: 0});
          TweenLite.to($hello, 1, { opacity: 1, onComplete: function() {
              TweenLite.to($title, 1, { opacity: 1, onComplete: cartridgeEffect() })
          }})

      }});
  });

  function cartridgeEffect() {
      TweenLite.set($cartridge, { opacity: 1});
      TweenLite.set($cartridgeContent, { opacity: 0});
      TweenLite.to($top, 0.4, { width: '100%', onComplete: function() {
          TweenLite.to($left, 0.3, { height: '100%', onComplete: function() {
              TweenLite.to($bottom, 0.2, { width: '100%', onComplete: function() {
                  TweenLite.to($right, 0.4, { height: '100%', onComplete: function() {
                      TweenLite.to($cartridgeContent, 0.4,{ opacity: 1, onComplete: follow()});
                  }});
              }});
          }});
      }});
  }

  function follow() {
      console.log('follow me');
    //   TweenLite.set($ad,{ y: -30})
    //   TweenLite.set($link,{ y: -30})
            TweenLite.set(([$ad,$link]),{ y: -30})
      TweenLite.to($dash, 0.4,{ height: 70, onComplete: function() {
          TweenLite.to($ad, 0.3, { y: 10, opacity: 1})
          TweenLite.to($link, 0.7, { y: 10, opacity: 1})

      }})
  }

//Variables
//     var $contentLeft = $('.content-left'),
//         $contentRight = $('.content-right'),
//         $leftSlides = $contentLeft.find('li'),
//         $rightSlides = $contentRight.find('li'),
//         $contentCenter = $('.content-center'),
//         $centerSlides = $contentCenter.find('li'),
//         $centerList = $('.content-center ul'),
//         $nav = $('.navigation'),
//         $slider = $('.slider'),
//         $logo = $('#logo'),
//         $legal = $('#legal'),
//         $legalM = $('#legalM'),
//         $mobile = $('.main-mobile'),
//         $desktop = $('.main-desktop'),
//         $selectModal = $('.background'),
//         $coverLoad = $('#cover-load'),
//         $loadBar = $('.cover-mask img'),
//         $link = '',
//         $current = '',
//         oldSlide ='',
//         numSlide = 0,
//         numSlideM = 0,
//         isMoving = false,
//         deskoptInit = false,
//         onLoad = false,
//         sizeH = $w.height(),
//         sizeW = $w.width(),
//         duration = 1.8,
//         durationM = 0.9,
//         easing = Power4.easeInOut,
//         easingM = Power4.easeInOut,
//         scrollManagerDesktop = new ScrollManager($('.main-desktop'), goUp, goDown),
//         scrollManagerMobile = new ScrollManager($('.main-mobile'), goUpM, goDownM),
//         link = ['Image 1','Image 2','Image 3','Image 4','Text slide'];
//
// //Init
//
//
//     onLoad = true;
//     loader();
//
//     for( var i=0; i<$rightSlides.length; i++) {
//         var makeLink = i+1;
//
//         $($rightSlides[i]).addClass('slide'+makeLink);
//         $($leftSlides[i]).addClass('slide'+makeLink);
//
//         //Ajoute un lien de pagination
//         $current += '<li class="link' + makeLink + '" data-index="' + i + '">' + link[i] + '</li>';
//     }
//
//     function constructDesktop() {
//         onLoad = true
//         loader();
//         var imgLoaded = 0;
//         for( var i=0; i<$leftSlides.length-1; i++) {
//
//             var src = $($leftSlides[i]).data('src');
//             var img= $($leftSlides[i]).data('img');
//             $($leftSlides[i]).find('img').attr('src',img);
//             $($leftSlides[i]).addClass(src);
//
//             $($leftSlides[i]).find('img').load(function() {
//                 console.log('plop');
//                 imgLoaded++;
//                 console.log(imgLoaded);
//
//                 if ( imgLoaded == $leftSlides.length-1) {
//                     console.log("false");
//                     onLoad = false;
//                     $coverLoad.css('display','none');
//                 }
//             });
//         }
//
//         initDesktop()
//         sliderResize();
//         deskoptInit = true;
//     }
//
//     //Ajoute les classes aux slides
//
//     $nav.html($current);
//     $nav.find('.link1').addClass('select');
//     $link = $nav.children('li');
//
//     //Si le js est disponible on affiche les élements
//
//     $( window ).load(function() {
//         $coverLoad.css('display','none');
//         console.log('ready');
//         onLoad = false;
//
//     $($slider).removeClass('hidden');
//     $($logo).removeClass('hidden');
//     $($legal).removeClass('hidden');
//     $($logo).css('display','block');
//     switchMobile()
//     })
//
// //Listener
//     $w.resize(function() {
//         sizeH = $w.height();
//         sizeW = $w.width();
//         switchMobile();
//     });
//
//     $link.on('click', function() {
//         if ( isMoving === true ) return;
//         isMoving = true;
//
//         var index = parseInt($(this).data('index'));
//
//         transition(index);
//     });
//
//     $legal.on('click', function() {
//         openLegal();
//     });
//
//     $legalM.on('click', function() {
//         openLegal();
//     });
//
//     $logo.on('click', function() {
//
//         window.open(
//           $(this).data('url'),
//           '_blank'
//         );
//     });
//
//     $w.keydown(function(e) {
//
//         if ( e.keyCode === 38 ){
//             goDown();
//         }else if( e.keyCode === 40){
//                 goUp();
//     }});
//
// //Function
//     function switchMobile() {
//         if ( sizeW <= 767 && $mobile.css('display') === 'none'){
//             initMobile();
//             initSlideMobile();
//         }else if (sizeW <= 767) {
//                 mobileResize();
//             }
//          else if ($desktop.css('display') === 'none'){
//
//              if( deskoptInit === false ) {
//                  constructDesktop()
//              }else{
//                  initDesktop()
//                  sliderResize();
//              }
//         }else{
//             sliderResize();
//     }}
//
//     function mobileResize() {
//         var translate = -(numSlideM*sizeH);
//         TweenLite.set($centerList,{y: translate});
//     }
//
//     function sliderResize() {
//         $slider.children('li').css('height',sizeH);
//         TweenLite.set($('.selected'),{top: sizeH});
//         TweenLite.set([$contentLeft,$contentRight],{y:-sizeH});
//     };
//
//     function initMobile() {
//         $desktop.css('display','none');
//         $mobile.css('display','block');
//         $legal.css('display','none');
//         $nav.css('display','none');
//     }
//
//     function initDesktop() {
//         $mobile.css('display','none');
//         $legal.css('display','block');
//         $nav.css('display','block');
//         $desktop.css('display','block');
//     }
//
//     function initSlideMobile() {
//         var collapse = $('.expand'),
//             text = collapse.find('.text'),
//             img = collapse.find('.image');
//
//         isMoving = false;
//         TweenLite.set($(img),{y: 0});
//         TweenLite.set($(text),{y: 0});
//         $(collapse).removeClass('expand').addClass('collapsed');
//     }
//
//     function loader() {
//         $coverLoad.css('display','block');
//         TweenLite.set($($loadBar),{x:20, delay: .2, onComplete: function() {
//             TweenLite.set($($loadBar),{x:40, delay: .2, onComplete: function() {
//                 TweenLite.set($($loadBar),{x:0, delay: .2, onComplete: function() {
//                     // console.log(onLoad);
//                     if( onLoad === true) {
//                         loader();
//     }}});}});}});}
//
//     function transition(index) {
//         var $transitionLeft = $($leftSlides[index]),
//             $transitionRight = $($rightSlides[index]);
//         oldSlide = $slider.find($('.selected'));
//
//         if ( $transitionLeft.hasClass('selected')){
//             isMoving = false;
//             return
//         };
//
//         if ( index > numSlide) {
//             $transitionLeft.removeClass('hidden');
//             TweenLite.set($transitionLeft,{top: sizeH*2})
//             $transitionRight.removeClass('hidden');
//             TweenLite.set($transitionRight,{top: 0})
//
//             goToPage($transitionLeft,-sizeH*2,$contentLeft);
//             goToPage($transitionRight,0,$contentRight);
//
//         }else{
//             $transitionLeft.removeClass('hidden');
//             TweenLite.set($transitionLeft,{top: 0})
//             $transitionRight.removeClass('hidden');
//             TweenLite.set($transitionRight,{top: sizeH*2})
//
//             goToPage($transitionLeft,0,$contentLeft);
//             goToPage($transitionRight,-sizeH*2,$contentRight);
//         }
//
//         pagination(index);
//     }
//
//     function pagination(index) {
//         setTimeout(function(){
//             $($link[numSlide]).removeClass('select');
//             $($link[index]).addClass('select');
//             numSlide = index;
//         }, 1000);
//     }
//
//     function goToPage($a,d,s) {
//         TweenLite.to($(s), duration, {y: d, force3D: true, ease: easing, onComplete: function() {
//             $a.addClass('selected');
//             TweenLite.set($a,{top:sizeH});
//             $(oldSlide).removeClass('selected').addClass('hidden');
//             TweenLite.set($(s),{y:-sizeH});
//             isMoving = false;
//     }});}
//
//     function goUp() {
//        if ( isMoving === true || numSlide === $link.length-1) return;
//        isMoving = true;
//        var index = numSlide+1;
//        transition(index);
//     }
//
//     function goDown() {
//        if ( isMoving === true || numSlide === 0 ) return;
//        isMoving = true;
//        var index = numSlide-1;
//        transition(index);
//     }
//
//     //Function mobile
//     function goUpM() {
//         if ( isMoving === true || numSlideM === 0 ) return;
//         isMoving = true;
//         transitionMobile('decrement');
//     }
//
//     function goDownM() {
//         if ( isMoving === true || numSlideM === $centerSlides.length-1 ) return;
//         isMoving = true;
//         transitionMobile('increment');
//     }
//
//     function transitionMobile(index) {
//         var $currentSlide =$('.show') ,
//             type = $currentSlide.data('type');
//
//         if ( type != 'simple') {
//             if ( $currentSlide.hasClass('collapsed') && index === 'increment'  ){
//                 expandSlideMobile($currentSlide);
//                 return;
//         }}
//         if (index === 'increment'){
//             numSlideM = numSlideM+1;
//         }else{
//             numSlideM = numSlideM-1;
//         }
//
//         var $nextSlide = $centerSlides[numSlideM];
//
//         $($currentSlide).removeClass('show');
//         $($nextSlide).addClass('show');
//         changeMobileSlide();
//     }
//
//     function changeMobileSlide() {
//         var translate = -(numSlideM*sizeH);
//
//         TweenLite.to($centerList, duration, {y: translate, force3D: true, ease: easing, onComplete: function() {
//             initSlideMobile();
//     }});}
//
//     function expandSlideMobile(c) {
//         TweenLite.to($(c.find('.image')), durationM, {y: -60, force3D: true, ease: easing});
//         TweenLite.to($(c.find('.text')), durationM, {y: -90, force3D: true, ease: easing, onComplete: function() {
//             c.removeClass('collapsed').addClass('expand');
//             isMoving = false;
//     }});}
//
//     function openLegal(){
//         modalOpen = true;
//         TweenLite.set($('.background'),{display:'block'});
//         TweenLite.to($('.background'),0.5,{opacity:1, ease: Cubic.easeInOut});
//         $selectModal.on('click','.close',closeLegal);
//     }
//
//     function closeLegal(e){
//         e.preventDefault();
//         modalOpen = false;
//         TweenLite.to($('.background'),0.5,{opacity:0, ease: Cubic.easeInOut, onComplete: function() {
//             TweenLite.set($('.background'),{display:'none'});
//     }});}
//
//     var modalOpen = false;
//         document.body.addEventListener('touchmove', function(event) {
//       if ( modalOpen != true) {
//           event.preventDefault();
//           console.log('touch');
//       }
//     }, false);

})($(window));
