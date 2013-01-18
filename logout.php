<?php
  require_once("initfb.inc.php");
  $facebook->destroySession();
  Header("Location: /");
?>