<?php
  require_once("initfb.inc.php");
  require_once("database.inc.php");
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
        var facebook = {};
        <?php
            // prüfen, ob gültiger User vorhanden
            $userId = $facebook->getUser();
            echo "facebook.loginUrl=\"" . $loginUrl . "\";";
            echo "facebook.logoutUrl=\"" . $logoutUrl . "\";";
            $username = "";
            if($userId != 0){
              try {
                $userProfile = $facebook->api('/me','GET');
                $username = $userProfile['name'];
              }catch(FacebookApiException $e){
                $facebook->destroySession();
                $userId = 0;
              }
            }

            echo "facebook.userId=" . $userId . ";";
            echo "facebook.username=\"" . $username . "\";";
        ?>
    </script>
    
    <script type="text/javascript">
        var appState = {};
        <?php
            if($userId != 0){
                // Prüfe, ob Benutzer bereits Test ausgeführt hat
                $params = array(
                    ":fbId" => intval($userId)
                );
                $queryStatement = "SELECT 1 FROM user WHERE fbId = :fbId";
                $query = $pdo->prepare($queryStatement);
                $statementSuccessful = $query->execute($params);
                if(!$statementSuccessful)
                    throw new Exception("Error fetching database information.");
                if($query->rowCount() == 0 || true){ // FÜR TESTZWECKE SCHUMMELN
                    echo "appState.userknown = false;";
                    
                    // Setze Benutzer als "bereits ausgeführt"
                    
                    $queryStatement = "SELECT firsttest FROM user GROUP BY firsttest ORDER BY COUNT(*) ASC LIMIT 0,1";
                    $query = $pdo->prepare($queryStatement);
                    $statementSuccessful = $query->execute($params);
                    if(!$statementSuccessful)
                        throw new Exception("Error fetching database information (2).");
                    $queryresult = $query->fetchAll();
                    $nextFirsttest = $queryresult[0]["firsttest"];
                    if($nextFirsttest != "a" && $nextFirsttest != "b")
                        $nextFirsttest = "a";
                        
                    $params = array(
                        ":fbId" => intval($userId),
                        ":fbName" => $username,
                        ":firsttest" => $nextFirsttest
                    );                    
                    $queryStatement = "INSERT INTO user (`fbId`, `fbName`, `starttime`, `firsttest`) VALUES (:fbId, :fbName, NOW(), :firsttest);";
                    $query = $pdo->prepare($queryStatement);
                    $statementSuccessful = $query->execute($params);
                    if(!$statementSuccessful){
                        var_dump($query->errorInfo());
                        throw new Exception("Error inserting new user into database.");
                    }
                    echo "appState.firstTest = '" . $nextFirsttest . "';";
                }else{
                    echo "appState.userknown = true;";
                }
                
            }
        ?>
    </script>    

</head>
<body></body>
</html>