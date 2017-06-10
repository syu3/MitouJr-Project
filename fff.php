<html>
<head>
</head>
<body>
  <center>
    <div id="loading" style="display:none; position:relative; top:50px;">
  	   <img src="loading.gif"><br>
       <font size="5">アップロード中...</font>
    </div>
  </center>
  <div id="ok" style="display:none;">
    <center><h1>サイトを公開しました</h1>
      <font size="5"><a href="#" onclick="CloseWindow()">戻る</a>　
        <a href="http://typingcode.16mb.com/index1234567890.html">サイトを見る</a></font>
    </center>
  </div>
</body>
<script>
  document.getElementById("loading").style.display="block";


  function back(){
    history.back();
  }


  function CloseWindow() {
    window.close();
  }
  var count = 0;
  var countup = function(){
    // alert("はいhフィアhfジョイあdjフォイアfじゃおいf兵オアhfヂオヒアヒアヒアヒアfひはい");
    document.getElementById("loading").style.display="none";
    document.getElementById("ok").style.display="block";
    <?php $ch = curl_init();$localfile = 'index1234567890.html';$fp = fopen($localfile, 'r');curl_setopt($ch, CURLOPT_URL, "ftp://u613191873:Syu2004320@typingcode.16mb.com/$localfile");curl_setopt($ch, CURLOPT_UPLOAD, 1);curl_setopt($ch, CURLOPT_INFILE, $fp);curl_setopt($ch, CURLOPT_INFILESIZE, filesize($localfile));curl_exec($ch);$error_no = curl_errno($ch);curl_close($ch); ?>
    <?php $ch = curl_init();$localfile = 'index1234567890.html';$fp = fopen($localfile, 'r');curl_setopt($ch, CURLOPT_URL, "ftp://u613191873:Syu2004320@typingcode.16mb.com/$localfile");curl_setopt($ch, CURLOPT_UPLOAD, 1);curl_setopt($ch, CURLOPT_INFILE, $fp);curl_setopt($ch, CURLOPT_INFILESIZE, filesize($localfile));curl_exec($ch);$error_no = curl_errno($ch);curl_close($ch); ?>

  }
  setTimeout(countup, 25000);

</script>
<?php
// echo $_POST['code'];

  $a = fopen("index1234567890.html", "w");
  $data = "<html><head><body>". $_POST['code'] ."</body></html>";

  fwrite($a, $data);
  fclose($a);
 // echo $a;
// echo "は��?は��?は��?は��?は��?";
// $file = 'sentwo.png';
// $remote_file = 'readme.txt';
// $ftp_user_name = 'u613191873';
// $ftp_user_pass = 'Syu2004320';
// $ftp_server = 'typingcode.16mb.com';
// $port=21;
// // 接続を確立す��?
// $conn_id = ftp_connect($ftp_server);
//
// // ユーザー名とパスワードでログインする
// $login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
//
// // ファイルをア��?プロードす��?
// if (ftp_put($conn_id, $remote_file, $file, FTP_ASCII)) {
//  echo "successfully uploaded $file\n";
// } else {
//  echo "There was a problem while uploading $file\n";
// }
//
// // 接続を閉じ��?
// ftp_close($conn_id);



// // ア��?プロー��?
// $ch = curl_init();
// $localfile = 'aaa.html';
// $fp = fopen($localfile, 'r');
// curl_setopt($ch, CURLOPT_URL, "ftp://u515953016:Syu2004320@mitou.16mb.com/$localfile");
// curl_setopt($ch, CURLOPT_UPLOAD, 1);
// curl_setopt($ch, CURLOPT_INFILE, $fp);
// curl_setopt($ch, CURLOPT_INFILESIZE, filesize($localfile));
// curl_exec($ch);
// $error_no = curl_errno($ch);
// curl_close($ch);









// // ダウンロー��?
// $ch = curl_init();
// $localfile = 'hoge';
// $fp = fopen($localfile, 'w');
// curl_setopt($ch, CURLOPT_URL, "ftp://syusite:Syu2004320@kodomonokuni.sakuraweb.com/www/index.html");
// curl_setopt($ch, CURLOPT_FILE, $fp);
// curl_setopt($ch, CURLOPT_HEADER, 0);
// curl_exec($ch);
// $error_no = curl_errno($ch);
// curl_close($ch);
// fclose($fp);
?>

</html>
