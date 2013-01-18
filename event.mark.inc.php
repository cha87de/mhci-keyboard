<?php
  require_once("initfbSession.inc.php");

  if($userId == 0){
    // no valid user logged in
    exit;
  }

  $id = $event;
  $title = $events[$event]['title'];
  $description = $events[$event]['description'];
  $picture = $events[$event]['image'];
  $link = "http://eventmarker.somehost.eu/event.php?id=" . $id;
  $message = "ist bei " . $title . " und bekommt ein Getränk gratis!";

  $messageParams = array(
      'message' => $message,

      'link' => $link,
      'picture' => $picture,
      'description' => $description,
      'caption' => "",
      'name' => $title
  );

  $response = $facebook->api('/me/feed', 'POST', $messageParams);
  $feedId = $response["id"];
  // TODO verarbeiten

  header("Location: event.php?id=".$id."&feedId=" . $feedId);
?>