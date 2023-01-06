<?php
namespace core;
use PDO;
class DB
{
    protected PDO $pdo;
    public function __construct($hostname, $login, $password, $database) {
        $this->pdo = new PDO(
            dsn: "mysql: host={$hostname};dbname={$database}",
            username: $login,
            password: $password
        );
    }
    public function select(string $tableName, array|string $fieldsList = "*", array $conditionArray = null): bool|array
    {
        $wherePartString = '';
        if (is_string(value: $fieldsList))
            $fieldsListString = $fieldsList;
        if (is_array(value: $fieldsList))
            $fieldsListString = implode(separator: ', ', array: $fieldsList);
        if (is_array(value: $conditionArray)) {
            $wherePart = [];
            foreach ($conditionArray as $key => $value)
                $wherePart [] = "{$key} = :{$key}";
            $wherePartString = 'WHERE '.implode(separator: ' AND ', array: $wherePart);
        }
        $res = $this->pdo->prepare(query: "SELECT {$fieldsListString} FROM {$tableName} {$wherePartString}");
        $res->execute(params: $conditionArray);
        return $res->fetchAll(mode: PDO::FETCH_ASSOC);
    }
    public function update($tableName, $newValuesArray, $conditionArray): void
    {
        $setParts = [];
        $paramsArray = [];
        foreach ($newValuesArray as $key => $value) {
            $setParts [] = "{$key} = :set{$key}";
            $paramsArray['set'.$key] = $value;
        }
        $setPartString = implode(separator: ', ', array: $setParts);

        $whereParts = [];
        foreach ($conditionArray as $key => $value) {
            $whereParts [] = "{$key} = :{$key}";
            $paramsArray[$key] = $value;
        }
        $wherePartString = implode(separator: ' AND ', array: $whereParts);
        $res = $this->pdo->prepare(query: "UPDATE {$tableName} SET {$setPartString} WHERE {$wherePartString}");
        $res->execute($paramsArray);
    }
    public function insert(string $tableName, array $newRowArray): void
    {
        $fieldsArray = array_keys($newRowArray);
        $fieldsListString = implode(separator: ', ', array: $fieldsArray);
        $paramsArray = [];
        foreach ($newRowArray as $key => $value)
            $paramsArray [] = ':'.$key;

        $valuesListString = implode(separator: ', ', array: $paramsArray);
        $res = $this->pdo->prepare(query: "INSERT INTO {$tableName} ({$fieldsListString}) VALUES($valuesListString)");
        echo $res->queryString;
        $res->execute($newRowArray);
    }
    public function delete($tableName, $conditionArray): void
    {
        $whereParts = [];
        foreach ($conditionArray as $key => $value) {
            $whereParts [] = "{$key} = :{$key}";
            $paramsArray[$key] = $value;
        }
        $wherePartString = implode(separator: ' AND ', array: $whereParts);
        $res = $this->pdo->prepare(query: "DELETE FROM {$tableName} WHERE {$wherePartString}");
        $res->execute($conditionArray);
    }
}