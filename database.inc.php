<?php
    $strDBLocation = "mysql:dbname=mhci-keyboard;host=localhost";
    $pdo = new PDO(
            $strDBLocation, 
            "mhci-keyboard",  
            "e95agfasg2safsa987", 
            array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\'')
        );
?>