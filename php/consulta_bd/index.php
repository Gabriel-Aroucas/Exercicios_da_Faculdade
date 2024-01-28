<?php 
    require_once "config.php";

    function obterAlunos(){
        global $dsn, $user,$pass;
        $alunos = Array();

        try{
            $pdo =new PDO($dsn,$user,$pass,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
            $sql = "SELECT * FROM alunos";
            $stm = $pdo -> prepare($sql);
            $stm -> execute();
            $alunos  = $stm -> fetchAll(PDO::FETCH_OBJ);
        }catch(PDOException $err){
            $alunos = [];
        }finally{
            if($pdo){
                $pdo = null;
            }
        }
        return $alunos;
    }