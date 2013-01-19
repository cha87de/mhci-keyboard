<?php
  require_once('initfb.inc.php');

  // prüfen, ob gültiger User vorhanden, sonst direkt anmelden!
  $userId = $facebook->getUser();
  if($userId != 0){
    try {
      $userProfile = $facebook->api('/me','GET');
      $username = $userProfile['name'];
    }catch(FacebookApiException $e){
      //$facebook->destroySession();
      var_dump($e);
      $userId = 0;
    }
  }
  if($userId == 0){
    // anmelden!
    header("Location: " . $loginUrl);
  }
?>