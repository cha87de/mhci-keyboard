<?php
  require_once('lib/facebook.php');

  $config = array(
    'appId' => '*****',
    'secret' => '*****',
  );
  $facebook = new Facebook($config);


  $loginParams = array(
    "display" => "touch",
    "scope" => "publish_actions"
  );
  $loginUrl = $facebook->getLoginUrl($loginParams);

  $logoutParams = array(
//    "next" => "http://eventmarker.somehost.eu/logout.php"
  );
  $logoutUrl = $facebook->getLogoutUrl($logoutParams);
?>