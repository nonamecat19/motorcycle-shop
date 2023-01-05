<?php
    class DbConnect {
		private static string $server = 'localhost';
		private static string $dbname = 'MotoShop';
		private static string $user = 'root';
		private static string $pass = '';
		public static function connect(): PDO | string
        {
			try
            {
                $dsn = 'mysql:host=' .DbConnect::$server .';dbname=' . DbConnect::$dbname;
				$conn = new PDO($dsn, DbConnect::$user, DbConnect::$pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			}
            catch (\Exception $exception)
            {
                return "Помилка бази даних: " . $exception->getMessage();
			}
		}
	}
