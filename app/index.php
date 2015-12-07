<?php
    include('lang/en-lang.php');
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title><?php echo TXT_TITLE; ?></title>
      <meta name="description" content="<?php echo META_TITLE; ?>">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta property="og:title" content="<?php echo META_TITLE; ?>" />
      <meta property="og:site_name" content="<?php echo META_NAME; ?>"/>
      <meta property="og:url" content="<?php echo META_URL; ?>" />
      <meta property="og:description" content="<?php echo META_DESCRIPTION; ?>" />
      <meta property="og:image" content="<?php echo META_IMG; ?>" />
      <link rel="stylesheet" href="../node_modules/normalize.css/normalize.css" />
      <link rel="stylesheet" href="sass/main.css" />
      <link rel="icon" type="image/x-icon" href="./img/favicon.ico">
  </head>
  <body>

    <div class="main">

      <div class="background">
        <div class="block top-left"></div>
        <div class="block top-right"></div>
        <div class="block bottom-left"></div>
        <div class="block bottom-right"></div>
      </div>

      <div class="content" style="visibility: hidden;">

          <div class="hello">
          <span class="begin"><?php echo TXT_HELLO; ?></span>
          <!-- <span class="next">i'm</span> -->
          </div>
          <!-- <h1></h1> -->
          <h1><?php echo TXT_NAME; ?></h1>

          <div class="cartridge">
              <span class="border"></span>
            <span class="top"></span>
            <span class="left"></span>
            <span class="bottom"></span>
            <span class="right"></span>
            <p><?php echo TXT_SITUATION; ?>

            </p>
            <span class="dash"></span>
          </div>

          <div class="ad">
            <p><?php echo TXT_AD; ?></p>
          </div>

          <div class="link">
            <a href="<?php echo URL_LINK1; ?>#"><?php echo TXT_LINK1; ?></a>
            <a href="<?php echo URL_LINK2; ?>#"><?php echo TXT_LINK2; ?></a>
          </div>

        </div>

  </div>


    <!-- Google Analytics -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', '<?php echo GOOGLE_ANALYTICS; ?>', 'auto');
        ga('send', 'pageview');
    </script>
    <!-- End Google Analytics -->


    <script src="scripts/jquery/dist/jquery.min.js"></script>
    <script src="scripts/modernizr-custom.js"></script>
    <script src="scripts/gsap/src/minified/TweenMax.min.js"></script>
    <script src="scripts/main.js"></script>

    <!--Old Browser-->
    <script>
    (function(m, d) {
        if( !m.csstransforms ) { // !m.csstransforms
            d.body.className += ' error--browser';
            d.write('<div id="error_browser_wrapper"><div id="error_browser"><div class="link_navigateur"><?php
            ?><h3>Ce site web n\'est pas optimisé pour votre navigateur.<br /><br /> Vous pouvez le mettre à jour ou choisir l\'un des navigateur suivant&nbsp;:</h3><ul><?php
            ?><li><a target="_blank" href="http://www.google.com/intl/fr_fr/chrome/browser/"><img src="img/navigateur/chrome.png" alt="Chrome"><br/>Chrome</a></li><?php
            ?><li><a target="_blank" href="http://support.apple.com"><img src="img/navigateur/safari.png" alt="Safari"><br/>Safari</a></li><?php
            ?><li><a target="_blank" href="https://www.mozilla.org/fr/firefox/new/"><img src="img/navigateur/firefox.png" alt="Firefox"><br/>Firefox</a></li><?php
            ?><li><a target="_blank" href="http://windows.microsoft.com/fr-fr/internet-explorer/ie-11-worldwide-languages"><img src="img/navigateur/ie.png" alt="IE"><br/>Internet<br/>Explorer</a></li><?php
        ?></ul></div></div></div>');}
    })(Modernizr, document);

    </script>
  </body>
</html>
