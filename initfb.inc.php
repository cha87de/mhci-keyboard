<?php
  require_once('lib/facebook.php');

  $config = array(
    'appId' => '406669366034876',
    'secret' => '793276b816556659b2d0f3c510843b50',
  );
  $facebook = new Facebook($config);


  $loginParams = array(
    "display" => "touch",
    "scope" => "publish_actions"
  );
  $loginUrl = $facebook->getLoginUrl($loginParams);

  $logoutParams = array(
    "next" => "http://eventmarker.somehost.eu/logout.php"
  );
  $logoutUrl = $facebook->getLogoutUrl($logoutParams);
?>