<?php
namespace core;
include 'DB.php';
include 'headers.php';

class Core
{
    private static ?Core $instance = null;
    public static DB $db;
    public static function getInstance(): Core
    {
        include 'headers.php';
        if (empty(self::$instance)) {
            self::$instance = new self();
            self::$db = self::getDB();
        }
        return self::$instance;
    }
    public static function getDB(): DB
    {
//        session_start();
        include 'config.php';
        return new DB(
            hostname: DATABASE_HOST,
            login:    DATABASE_LOGIN,
            password: DATABASE_PASSWORD,
            database: DATABASE_BASENAME
        );
    }
}