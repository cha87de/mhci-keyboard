<?php

$result = array(
    "success" => true
);

try {
    require_once("initfb.inc.php");
    require_once("database.inc.php");

    $userId = $facebook->getUser();
    if ($userId == 0) {
        throw new Exception("No facebook-user given.");
    }

  $title = "";
  $description = "";
  $picture = "";
  $link = "http://www.somehost.eu/keyboardGame";
  $message = "...";

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
  
  // store in database
    $params = array(
        ":fbId" => intval($userId),
        ":feedId" => $feedId
    );
    $queryStatement = "UPDATE user SET
    feedId = :feedId
    WHERE `fbId` = :fbId;";
    $query = $pdo->prepare($queryStatement);
    $statementSuccessful = $query->execute($params);
    if (!$statementSuccessful) {
        var_dump($query->errorInfo());
        throw new Exception("Error updating user in database.");
    }  
  
} catch (Exception $e) {
    $result = array(
        "success" => false,
        "errorInfo" => $e->getMessage()
    );
}

echo json_encode($result);
?>