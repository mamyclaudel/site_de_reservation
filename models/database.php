<?php 

class Database{
    private $conn;

    public function connect($host,$dbname,$user,$pass) {
        $host = htmlspecialchars($host) ;
        $dbname = htmlspecialchars($dbname) ;
        $user = htmlspecialchars($user) ;
        $pass = htmlspecialchars($pass) ;
        $dsn = "mysql:host={$host};dbname={$dbname}" ;
        $username = $user ;
        $password = $pass ;
        try {
            $this->conn = new PDO($dsn,$username,$password) ;
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "connecter";
        }
        catch(PDOException $e) {
            echo $e ;
            die() ;
        }
    }

    public function select($table, $condition, $valeur){
        $select = $this->conn->prepare("SELECT * FROM $table WHERE $condition");
        $result_select = $select->execute($valeur);
        $donnee = $select->fetchAll();
        $row = $select->rowCount(); 
        return [$donnee, $row];
        $select->closeCursor();
    }

    public function insert($table, $champs,$condition, $valeur){
        $insert = $this->conn->prepare("INSERT INTO $table ($champs) VALUES ($condition)");
        $result_insert = $insert->execute($valeur);
        $donnee_insert = $insert->fetchAll(PDO::FETCH_OBJ);
        return $donnee_insert;
    }

}



