<?php
  error_reporting(E_ALL);
  function errorHandler($errno, $errstr, $errfile, $errline) {
    echo $errstr;
    return true;
  }
  set_error_handler("errorHandler");

  if(!isset($_REQUEST['id']) || empty($_REQUEST['id']))
    throw new Exception("Keine ID für Event angegeben.");

  $event = $_REQUEST['id'];
  $action = (!isset($_REQUEST['action']) || empty($_REQUEST['action'])) ? "info" : $_REQUEST['action'];

  require_once("events.inc.php");

  switch($action){
    case "info":
	require "event.info.inc.php";
	break;
    case "mark":
	include("event.mark.inc.php");
	break;
    default:
	throw new Exception("Unknown action \"" . $action . "\" defined.");
  }
?>