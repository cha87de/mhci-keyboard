<?php
session_start();

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

    $params = array(
        ":fbId" => intval($userId),
        ":id" => $_SESSION["userId"],
        ":test11Characters" => $_REQUEST["test11Characters"],
        ":test11Errors" => $_REQUEST["test11Errors"],
        ":test12Characters" => $_REQUEST["test12Characters"],
        ":test12Errors" => $_REQUEST["test12Errors"],
        ":test13Characters" => $_REQUEST["test13Characters"],
        ":test13Errors" => $_REQUEST["test13Errors"],
        ":test21Characters" => $_REQUEST["test21Characters"],
        ":test21Errors" => $_REQUEST["test21Errors"],
        ":test22Characters" => $_REQUEST["test22Characters"],
        ":test22Errors" => $_REQUEST["test22Errors"],
        ":test23Characters" => $_REQUEST["test23Characters"],
        ":test23Errors" => $_REQUEST["test23Errors"],
        ":useragent" => $_SERVER["HTTP_USER_AGENT"],
        ":screenresolution" => $_REQUEST["screenresolution"]
    );
    $queryStatement = "UPDATE user SET
    testdone = 1,
    endtime = NOW(),
    
    test11Characters = :test11Characters,
    test11Errors = :test11Errors,

    test12Characters = :test12Characters,
    test12Errors = :test12Errors,

    test13Characters = :test13Characters,
    test13Errors = :test13Errors,

    test21Characters = :test21Characters,
    test21Errors = :test21Errors,

    test22Characters = :test22Characters,
    test22Errors = :test22Errors,

    test23Characters = :test23Characters,
    test23Errors = :test23Errors,
    
    useragent = :useragent,
    screenresolution = :screenresolution

    WHERE `id` = :id AND `fbId` = :fbId";
    $query = $pdo->prepare($queryStatement);
    $statementSuccessful = $query->execute($params);
    if (!$statementSuccessful) {
        var_dump($query->errorInfo());
        throw new Exception("Error inserting new user into database.");
    }
} catch (Exception $e) {
    $result = array(
        "success" => false,
        "errorInfo" => $e->getMessage()
    );
}

echo json_encode($result);
?>