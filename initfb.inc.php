<?php
  require_once('lib/facebook.php');

  $config = array(
    'appId' => '323108537790813',
    'secret' => '402981d47f7103d8e106884bd5d41c74',
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