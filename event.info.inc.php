<?php
  require_once("initfb.inc.php");
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
       "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /> 
	<meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>

	<link rel="stylesheet" type="text/css" href="/default.css"/>

	<title><? echo $events[$event]['title']; ?></title> 
	<meta name="description" content="<? echo $events[$event]['description']; ?>" />
</head>
<body>

  <p style="font-size: 12px; color: #AEAEAE;">
    <?php
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
      //echo "<a style=\"font-size: 12px; color: #AEAEAE;\" href=\"".$loginUrl."\">login</a> " . "<a style=\"font-size: 12px; color: #AEAEAE;\" href=\"".$logoutUrl."\">logout</a>";
    ?>   
  </p>

  <h1>eventmarker</h1>
  <h2><? echo $events[$event]['title']; ?></h2>
  <p>
    <img src="<?php echo $events[$event]['image'];?>" alt="<? echo $events[$event]['title']; ?>" width="200" /> <br/>
    <? echo $events[$event]['description']; ?>
  </p> 

  <table border="0" width="80%" align="center"> 
<?php
if(empty($_REQUEST['feedId'])){
?>
    <tr> 
      <td> 
	<a href="event.php?id=<? echo $event; ?>&action=mark"> 
	  <div class="box">Markieren &amp; Gutschein holen</div> 
	</a> 
      </td> 
    </tr>
<?php
}else{
?>
    <tr> 
      <td> 
	<div class="box">Post <?php echo $_REQUEST['feedId']?></div> 
      </td> 
    </tr>
<?php
}
?>
    <tr> 
      <td> 
	<a href="/"> 
	  <div class="box">Zur &Uuml;bersicht</div> 
	</a> 
      </td> 
    </tr>
  </table> 

<?php
  $url = "http://eventmarker.somehost.eu/event.php?id=".$event."&action=mark";
?>
<img src="http://chart.apis.google.com/chart?chs=100x100&cht=qr&chl=<?=$url?>" />

</body> 
</html> 
