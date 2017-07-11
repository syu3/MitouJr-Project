<!-- echo $_POST['name']; -->
<?php
if(isset($_POST["name"]) && preg_match("http://typingcode.16mb.com/index.php"){

    echo file_get_contents($_POST["name"]);
}else{
    echo "error";
}
?>
