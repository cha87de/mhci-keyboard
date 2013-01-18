<?php
  require_once("initfb.inc.php");
?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>KeyboardPrototype</title>
    <script src="http://extjs.cachefly.net/touch/sencha-touch-2.0.1.1/sencha-touch-all.js"></script>
    <link rel="stylesheet" href="http://extjs.cachefly.net/touch/sencha-touch-2.0.1.1/resources/css/sencha-touch.css">
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript">
        if (!Ext.browser.is.WebKit) {
            alert("The current browser is unsupported.\n\nSupported browsers:\n" +
                "Google Chrome\n" +
                "Apple Safari\n" +
                "Mobile Safari (iOS)\n" +
                "Android Browser\n" +
                "BlackBerry Browser"
            );
        }
    </script>
    <script type="text/javascript">
        <?php
/*
	  // prüfen, ob gültiger User vorhanden
	  $userId = $facebook->getUser();
	  if($userId != 0){
	    try {
	      $userProfile = $facebook->api('/me','GET');
	      $username = $userProfile['name'];
	    }catch(FacebookApiException $e){
	      $facebook->destroySession();
	      $userId = 0;
	    }
	  }
	  if($userId == 0){
	    // anmelden!
	    echo "<a style=\"font-size: 12px; color: #AEAEAE;\" href=\"".$loginUrl."\">login</a>";
	  }else{
	    echo $username . " " . "<a style=\"font-size: 12px; color: #AEAEAE;\" href=\"".$logoutUrl."\">logout</a>";
	  }
*/
	?>
    </script>

</head>
<body></body>
</html>