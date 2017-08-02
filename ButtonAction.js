postValueCheck();
function postValueCheck() {
  if (str != null) {
    document.getElementById("postformb").style.display = "block";
  } else {
    document.getElementById("postformb").style.display = "none";
  }
}

function codeFTP() {
  // if(str != ""){
  str = array.join(",");
  str = str.replace(/</g, "<");
  str = str.replace(/>/g, ">");
  str = str.replace(/,/g, "");
  document.write(str);

  console.log(str);

  // document.getElementById("code").value = str;
  // }else{
  //  document.getElementById("postform").action="";
  //
  // }
}
// document.write("<canvas id='nextLine' width='1000px;' height='1000px;'></canvas>");
//
// var canvas = document.getElementById( "nextLine" );
// var ctx = canvas.getContext( "2d" );
//
// ctx.beginPath();
// ctx.moveTo( 150, 310 );
// ctx.lineTo( 200, 150 );
// ctx.lineTo( 150, 310 );
// ctx.lineTo( 200, 250 );
// ctx.lineTo( 150, 310 );
// ctx.lineTo( 200, 380 );
// ctx.lineTo( 150, 310 );
// ctx.lineTo( 200, 480 );
//
// ctx.closePath();
// ctx.stroke();
var result1234 = "";
var str = "";
var sentwoleft = 0;
var array = [];
var kakkonum = 0;
var ketteinum = 0;
var ketteinum1 = 0;
var num = 0;
var n = 0;
var data = "";
var result = "";
var loopKetteiNum = 1;
var kurikaesi = 0;
var oneXpostion = 0;
var oneYpositon = 0;
var Xpositon = 0;
var moreNum = 0;
var current = "";
var list = {
  "<center>": ["<\u002fcenter>", "</p>", "<a>", "<li>", "<p>", "<button"],
  文字入力: ["href", "id", ">", "その他"],
  href: ["index.html", "test.html", ""],
  "index.html": [">", "</h1>", "<br>", "</p>"],
  ">": ["ホーム", "自己紹介", ""],
  ホーム: ["</a>", "", ""],
  "test.html": [">", "id", "style"],
  自己紹介: ["</a>", "", ""],
  "<hr": ["widht", "height", ""],
  width: ["300px", "400px", "500px", "600px", "100%"],
  "<img": ["src", "id", "alt"],
  src: ["url.jpg", "", ""],
  "url.jpg": [">", "", ""],
  "<p>": ["文字入力", "", ""],
  "<font": ["size", "color", ""],
  size: ["3", "5", "10"]
};

function kaigyo() {
  document.getElementById("first").onclick = new Function("first()");

  // str = array.join(',');
  // str = str.replace( /</g , "<" ) ;
  // str = str.replace( />/g , ">" ) ;
  // str = str.replace( /,/g , "" ) ;
  //
  // console.log(str);
  kurikaesi = 0;
  sentwoleft++;
  loopKetteiNum++;
  kakkonum = kakkonum + 1;
  // document.getElementById("button1").style.display="none";
  // document.getElementById("button2").style.display="none";
  // document.getElementById("button3").style.display="none";
  //   document.getElementById("next").style.display="none";
  //   document.getElementById("nextLine").style.display="none";
  //   document.getElementById("backGroundColor"+ketteinum+"").style.display="none";
  //   document.getElementById("kettei"+ketteinum+"").onclick = new Function( "" );
}

function first(datan) {
  console.log("firstが呼ばれた");
  // alert("aiueo");
  moreNum = 0;
  num++;
  var link = document.createElement("link");
  link.href = "style.css";
  link.rel = "stylesheet";
  link.type = "text/css";
  var h = document.getElementsByTagName("head")[0];
  h.appendChild(link);
  // document.write("<link rel='stylesheet' type='text/css' href='style.css'>");
  kurikaesi++;
  if (ketteinum == 0) {
    // document.write(
    //   '<iframe id="preview" srcdoc=""　style="margin-top:100px;"></iframe>'
    // ); //仮
    //
    // //プレビューを表示するiframe
    // var headerDiv = document.createElement("div");
    //
    // var previewIframe = document.createElement("iframe");
    // previewIframe.classList.add("previewIframe");
    // headerDiv.appendChild(previewIframe);
    //
    // var header = document.createElement("header"); //headerを作る
    // headerDiv.appendChild(header);
    // var nameH1 = document.createElement("h1"); //h1タグを作る
    // header.appendChild(nameH1);
    // var nameFont = document.createElement("font"); //fontタグを作る
    // nameFont.textContent = "サイトを作成";
    // nameH1.appendChild(nameFont);
    //
    // document.body.appendChild(headerDiv); //画面上部のヘッダー部分のDiv
    // // <li><a href=''>コードを書く</a></li><li><a href=''>他のプロジェクトを見る</a></li>
    // document.write(
    //   "<header id='global-header'><center><h1 id='logo'><font color='#333333'>サイトを作成</font></h1></center><nav id='nav'><ul></ul></nav></header>"
    // );
    // document.write(
    //   "<button type='button' id='previewButton' onClick='preview()' style='left:" +
    //     (window.innerWidth - 299) +
    //     ";'>プレビュー</button>"
    // );
    // document.write(
    //   "<button type='button' id='saveButton' onClick='save()' style='left:" +
    //     (window.innerWidth - 398) +
    //     ";'>保存</button>"
    // );
    //
    // document.write(
    //   "<form method='post' target='_blank' action='fff.php'><input type='hidden' name='code' id='code' value=''><button type='submit' id='postformb' value='Send' onclick='codeFTP();'  style='left:" +
    //     (window.innerWidth - 100) +
    //     ";'>公開</button></form>"
    // );
    //
    // document.write(
    //   "<button type='button' id='kaigyo' onClick='kaigyo()' style='position:absolute; top:60%; width:20%; height:50px;'>改行</button>"
    // );
    // document.write(
    //   "<div id='html'><button type='button' id='first' onClick='first()' style='position:absolute; top:300px; width:150px; height:50px;'>HTML</button></div>"
    // );
  }
  // var x = document.getElementsByClassName("firstb");

  if (num == 1) {
    ketteinum++;

    if (ketteinum == 1) {
      // document.getElementById("first").onclick = new Function("");

      // document.write(
      //   "<img src='backGroundColor.png' id='backGroundColor' style='position:absolute; top:140px;  left:158px; width:200px; height:370px; z-index:1;'>"
      // );
      // document.write(
      //   "<img src='sen.png' id='nextLine' style='position:absolute; top:60px;  left:100px; width:200px; height:600px; z-index:2;'>"
      // );
      //
      // document.write(
      //   "<div class='hintcontainer'><button type='button' id='button1' onClick='first(0)' style='position:absolute; top:150px;  left:200px; width:150px; height:50px; z-index:2;'><center></button>"
      // );
      // document.write(
      //   "<button type='button' id='button2' onClick='first(1)' style='position:absolute; top:250px;  left:200px; width:150px; height:50px; z-index:3;'><hr</button>"
      // );
      // document.write(
      //   "<button type='button' id='button3' onClick='first(2)' style='position:absolute; top:350px;  left:200px; width:150px; height:50px; z-index:4;'><a</button>"
      // );
      // document.write(
      //   "<button type='button' id='next' onClick='more()' style='position:absolute; top:450px;  left:200px; width:150px; height:50px; z-index:5;'>もっと見る</button></div>"
      // );

      //????
      // document.write("<img src='sen.png' id='sentwo' style='position:absolute; top:250px;  left:150px; width:150px; height:50px;'>");

      var hintcontainer = document.createElement("div");
      hintcontainer.className = "hintcontainer";
      document.body.appendChild(hintcontainer); //候補div

      var nextLine = document.createElement("img");
      nextLine.className = "nextLine";
      nextLine.src = "sen.png";
      hintcontainer.appendChild(nextLine); //候補を表示するための線

      var backGroundColor = document.createElement("img");
      backGroundColor.className = "backGroundColor";
      backGroundColor.src = "backGroundColor.png";
      hintcontainer.appendChild(backGroundColor); //候補を表示するところの背景

      var one = document.createElement("button");
      one.className = "button1";
      one.style = "position:absolute;";
      one.style = "top:1250px;";
      one.textContent = "1";
      hintcontainer.appendChild(one); // hintcontainer(候補のdiv ) に Button(候補) を追加

      console.log(one);
      one.addEventListener("click", function() {
        console.log("addEventListenerが呼ばれた");
        first(0);
      });

      var two = document.createElement("button");
      two.className = "button2";
      two.textContent = "2";
      hintcontainer.appendChild(two); // hintcontainer(候補のdiv ) に Button(候補) を追加

      var three = document.createElement("button");
      three.className = "button4";
      three.textContent = "3";
      hintcontainer.appendChild(three); // hintcontainer(候補のdiv ) に Button(候補) を追加

      var four = document.createElement("button");
      four.className = "next";
      four.textContent = "4";
      hintcontainer.appendChild(four); // hintcontainer(候補のdiv ) に Button(候補) を追加

      // var objBody = document.getElementsByTagName("body").item(0);
      // objBody.appendChild(element);
      // body要素にdivエレメントを追加;
    } else {
      document.getElementById("first").onclick = new Function("");

      if (kakkonum == 0) {
        var left = ketteinum * 200;
        // var newleft = left - 51;
        // document.write("<img src='backGroundColor.png' id='backGroundColor"+ketteinum+"' style='position:absolute; top:140px;  left:"+newleft+"px; width:200px; height:370px;'>");

        var element = document.getElementById("button1");
        element.style.left = left;
        var element1 = document.getElementById("button2");
        element1.style.left = left;
        var element2 = document.getElementById("button3");
        element2.style.left = left;
        var element3 = document.getElementById("next");
        element3.style.left = left;
        var element4 = document.getElementById("nextLine");
        var senleft = left - 105;
        element4.style.left = senleft;

        // document.getElementById("backGroundColor").style.display="block";
        var element5 = document.getElementById("backGroundColor");
        var senleftA = left - 51;
        element5.style.left = senleftA;
      } else {
        var left1 = 0;
        ketteinum1 = ketteinum1 + 1; //その他その他???????
        var kurikaesi1 = kurikaesi - 1;
        if (kurikaesi1 == 0) {
          // Xpositon = 205;
          left1 = 205;
        } else {
          var ddd = ketteinum - 1;
          var element1234 = document.getElementById("kettei" + ddd + "");
          var rect1234 = element1234.getBoundingClientRect();

          // ???W???v?Z????
          oneXpostion = rect1234.left + window.pageXOffset; // ?v?f??X???W
          oneYpositon = rect1234.top + window.pageYOffset; // ?v?f??Y???W
          // n = 200*num;
          left1 = oneXpostion + 200;

          // left1 = kurikaesi1 * 205;
        }

        var element = document.getElementById("button1");
        element.style.left = left1;
        var top = loopKetteiNum * 80;
        element.style.top = top;
        element.innerHTML = "<center>";

        var element1 = document.getElementById("button2");
        element1.style.left = left1;
        var top1 = top + 85;
        element1.style.top = top1;
        element1.innerHTML = "<hr";

        var element2 = document.getElementById("button3");
        element2.style.left = left1;
        var top2 = top1 + 85;
        element2.style.top = top2;
        element2.innerHTML = "<a";

        var element3 = document.getElementById("next");
        element3.style.left = left1;
        var top3 = top2 + 105;
        element3.style.top = top3;
        element3.innerHTML = "もっと見る";

        var element4 = document.getElementById("nextLine");
        var senleft = left1 - 105;
        element4.style.left = senleft;

        var element5 = document.getElementById("backGroundColor");
        var senleftA = left1 - 50;
        element5.style.left = senleftA;

        // var element5 = document.getElementById("backGroundColor");
        // var sentopA = left1 - 105;
        // element5.style.top = sentopA;
      }

      // document.getElementById("kettei").style.display="none";
    }

    nextcode();
  } else if (num == 2) {
    if (datan == 3) {
    } else {
      document.getElementById("button1").style.display = "none";
      document.getElementById("button2").style.display = "none";
      document.getElementById("button3").style.display = "none";
      document.getElementById("next").style.display = "none";
      document.getElementById("nextLine").style.display = "none";
      document.getElementById("backGroundColor").style.display = "none";
    }

    num = 0;

    if (datan == 3) {
    } else {
      // document.write(
      //   "<img src='sentwo.png' id='sentwo" +
      //     ketteinum +
      //     "' style='position:absolute; top:75px;  left:145px; width:70px; height:100px;'>"
      // );
      var decisionDiv = document.createElement("div"); //決定したコードが格納されるDiv
      decisionDiv.className = "decisionDiv";

      var decisionLine = document.createElement("img"); //決定したボタンを繋げる線
      decisionLine.src = "sentwo.png";
      decisionDiv.appendChild("decisionLine");

      var decisionButton = document.createElement("button"); //決定したボタン
      decisionButton.className = "kettei";
      decisionDiv.appendChild("decisonButton");

      document.body.appendChild("decisionDiv");

      // document.write(
      //   "<button type='button' id='kettei" +
      //     ketteinum +
      //     "' onClick='render()' style='position:absolute; top:100px;  left:200px; width:150px; height:50px;'><h</button>"
      // );
    }

    // $("#html").append(
    //   "<button type='button' id='kettei" +
    //     ketteinum +
    //     "' onClick='first()' style='position:absolute; top:100px;  left:200px; width:150px; height:50px;'><h</button>"
    // );

    if (kakkonum == 0) {
      var left = ketteinum * 200;
      var element = document.getElementById("kettei" + ketteinum + "");
      element.style.left = left;
      document.getElementById("kettei" + ketteinum + "").style.display =
        "block";
    } else {
      //   var left = 0;
      //   var kurikaesi1 = kurikaesi - 1;
      //
      //   if(kurikaesi1 == 0){
      //     left = kurikaesi1 * 210;
      //
      //   }else{
      //     left = kurikaesi1 * 205;
      //
      // }
      // }
    }

    if (ketteinum == 2) {
      var element = document.getElementById("sentwo" + ketteinum + "");
      var rect = element.getBoundingClientRect();
      var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
      var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
      n = 200 * num;

      if (kakkonum == 0) {
        var senleft1 = positionX + 195;
        var element1 = document.getElementById("sentwo" + ketteinum + "");
        element1.style.left = senleft1;
        document.getElementById("sentwo" + ketteinum + "").style.display =
          "block";
      } else {
        var senleft1 = positionX + 200;
        var element1 = document.getElementById("sentwo" + ketteinum + "");
        element1.style.left = senleft1;
        document.getElementById("sentwo" + ketteinum + "").style.display =
          "block";
      }
    } else {
      var ddd = ketteinum - 1;
      if (ketteinum == 1) {
      } else {
        var element = document.getElementById("sentwo" + ddd + "");
        var rect = element.getBoundingClientRect();

        // ???W???v?Z????
        var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
        var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
        n = 200 * num;
        positionX = positionX + 200;
        if (kakkonum == 0) {
          var senleft1 = ketteinum * 170;
          var element1 = document.getElementById("sentwo" + ketteinum + "");
          element1.style.left = positionX;
          document.getElementById("sentwo" + ketteinum + "").style.display =
            "block";
        } else {
          var ddd = ketteinum - 1;
          if (sentwoleft == 1) {
            var ddd = ketteinum - 1;

            var element = document.getElementById("kettei" + ketteinum + "");
            var rect = element.getBoundingClientRect();

            // ???W???v?Z????
            var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
            var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
            n = 200 * num;
            positionX = positionX + 135;
            element.style.left = positionX;
            element.style.top = loopKetteiNum * 132.5;
            alert("haihai");

            var element = document.getElementById("sentwo" + ketteinum + "");
            var rect = element.getBoundingClientRect();

            // ???W???v?Z????
            var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
            var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
            n = 200 * num;
            positionX = positionX + 150;

            element.style.left = 145;
            element.style.top = loopKetteiNum * 132.5;
            var senleft1 = ketteinum1 * 145; //kettei??{?^その他その他@?@?@??????top??????
            var element1 = document.getElementById("sentwo" + ketteinum + "");
            element1.style.left = 145;
            element1.style.top = loopKetteiNum * 132.5;
            document.getElementById("sentwo" + ketteinum + "").style.display =
              "block";
            sentwoleft = 0;
          } else {
            // if(ketteinum1 == 1){
            var ddd = ketteinum - 1;

            var element = document.getElementById("kettei" + ketteinum + "");
            var rect = element.getBoundingClientRect();

            // ???W???v?Z????
            var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
            var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
            n = 200 * num;
            positionX = positionX + 135;
            element.style.left = positionX;
            element.style.top = loopKetteiNum * 132.5;
            alert("haihai");

            //     var senleft1 = ketteinum1 * 145;//kettei??{?^その他その他@?@?@??????top??????
            //     var element1 = document.getElementById("sentwo"+ketteinum+"");
            //     element1.style.left = senleft1;
            //     element1.style.top = 265;
            //     document.getElementById("sentwo").style.display="block";
            // }else{
            var senleft1 = ketteinum1 * 175; //kettei??{?^その他その他@?@?@??????top??????
            var element1 = document.getElementById("sentwo" + ketteinum + "");
            element1.style.left = positionX;
            element1.style.top = loopKetteiNum * 132.5;
            document.getElementById("sentwo" + ketteinum + "").style.display =
              "block";
          }

          // }
        }
      }
    }

    // var count = 0;
    //   var countup = function(){
    if (datan == 0) {
      var element = document.getElementById("button1");
      result1234 = element.innerHTML.replace(/</g, "<");
      var elem = document.getElementById("kettei" + ketteinum + "");
      elem.innerHTML = result1234;
      if (result1234.indexOf("\u002f") != -1) {
        // kurikaesi = 0;
        //               sentwoleft ++;
        // loopKetteiNum++;
        //       kakkonum = kakkonum + 1;
        // document.getElementById("button1").style.display="none";
        // document.getElementById("button2").style.display="none";
        // document.getElementById("button3").style.display="none";
        //   document.getElementById("next").style.display="none";
        //   document.getElementById("nextLine").style.display="none";
        //   document.getElementById("backGroundColor"+ketteinum+"").style.display="none";
        //   document.getElementById("kettei"+ketteinum+"").onclick = new Function( "" );
      }

      data = document.getElementById("button1").innerHTML;
    } else if (datan == 1) {
      var element = document.getElementById("button2");
      result1234 = document.getElementById("button2").innerHTML;
      console.log(result1234);

      // var dadada = ketteinum - 1;
      var elem = document.getElementById("kettei" + ketteinum + "");
      console.log("kettei" + ketteinum + "," + result1234 + "");
      elem.innerHTML = result1234;

      data = document.getElementById("button2").innerHTML;
    } else if (datan == 2) {
      var element = document.getElementById("button3");
      result1234 = document.getElementById("button3").innerHTML;
      var elem = document.getElementById("kettei" + ketteinum + "");
      elem.innerHTML = result1234;

      data = document.getElementById("button3");
    } else if (datan == 3) {
      document.getElementById("next");
    }
    var minusoneKN1 = ketteinum - 1;
    if (minusoneKN1 == 0) {
      if (datan == 3) {
      } else {
        var data1 = document.getElementById("kettei" + ketteinum + "")
          .innerHTML;
        // //?f?[?^?o??
        //

        // var data2 = data1+ "<"
        // document.write(data1);
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "href") {
          data1 = ["href='"];
          // data1[ketteinum-1] = '???j??';
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "index.html") {
          data1 = "index.html'";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "width") {
          data1 = "width='";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "300" && data1 == "400" && data1 == "500") {
          data1 = data1 + "'";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1.indexOf("<") != -1 && data1.indexOf(">") == -1) {
          data1 = data1 + " ";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "src") {
          data1 = "src=''";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "url.jpg") {
          data1 = "url.jpg'";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "size") {
          data1 = "size='";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "3" || data1 == "5" || data1 == "10") {
          data1 = data1 + "'";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }

        array.push(data1);
        console.log(array); // ['a', 'b', 'c']
      }
    } else {
      if (datan == 3) {
      } else {
        var data1 = document.getElementById("kettei" + ketteinum + "")
          .innerHTML;
        //?f?[?^?o??

        // document.write(data1);
        if (data1 == "href") {
          data1 = ["href='"];
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "index.html") {
          data1 = "index.html'";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "width") {
          data1 = "width='";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "300" || data1 == "400" || data1 == "500") {
          data1 = data1 + "'";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1.indexOf("<") != -1 && data1.indexOf(">") == -1) {
          data1 = data1 + " ";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "src") {
          data1 = "src='";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "url.jpg") {
          data1 = "url.jpg'";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        if (data1 == "") {
          data1 = "";
        }
        array.push(data1);
        console.log(array);

        // var count1 = 0;
        // var countup1 = function() {
        //   var elem = document.getElementById("kettei" + ketteinum + "");
        //   elem.innerHTML = result1234;
        // };
        // setTimeout(countup1, 10);
      }
    }
    // var element = document.getElementById("button1");
    // var result = element.innerHTML.replace(/</g, "<");
    // var elem = document.getElementById("kettei" + ketteinum + "");
    // elem.innerHTML = result;
    if (result.indexOf("\u002f") != -1) {
      // str = array.join(',');
      // str = str.replace( /</g , "<" ) ;
      // str = str.replace( />/g , ">" ) ;
      // str = str.replace( /,/g , "" ) ;
      //
      // console.log(str);
      // if(ketteinum == 1){
      //   var elem = document.getElementById("kettei");
      //   elem.innerHTML = str;
      // }else{
      //   var elem = document.getElementById("kettei"+ketteinum+"");
      //   elem.innerHTML = str;
      // }
      // document.write(str);
      // document.write("<button type='button' id='previewButton' onClick='preview()' style='position:absolute; top:93.3%;  left:0%; width:100%; height:50px;'>?v???r???[</button>");
      // document.write("<img src='<imgpng' id='backGroundColor"+ketteinum+"' style='position:absolute; top:60px;  left:100px; width:200px; height:600px;'>");
      // document.getElementById("button1").style.display="none";
      // document.getElementById("button2").style.display="none";
      // document.getElementById("button3").style.display="none";
      //   document.getElementById("next").style.display="none";
      //   document.getElementById("nextLine").style.display="none";
      //   document.getElementById("backGroundColor"+ketteinum+"").style.display="none";
      //   document.getElementById("kettei"+ketteinum+"").onclick = new Function( "" );
    }
  }
  //   setTimeout(countup, 1000);
  // }
}

//その他A????R?[?h???\その他???[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[

function nextcode() {
  if (num == 1) {
    // document.getElementById("button1").style.display = "block";
    // document.getElementById("button2").style.display = "block";
    // document.getElementById("button3").style.display = "block";
    // document.getElementById("next").style.display = "block";
    // document.getElementById("nextLine").style.display = "block";
    // document.getElementById("backGroundColor").style.display = "block";

    // if(datan == 0){

    if (kurikaesi == 1) {
      // document.getElementById("button1").innerHTML = "<center>";
      // document.getElementById("button2").innerHTML = "<hr";
      // document.getElementById("button3").innerHTML = "<a";
      // document.getElementById("next").innerHTML = "その他"; //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
    } else {
      // var element="button2";
      var minusoneKN = ketteinum - 1;
      //?f?[?^???????
      data = document.getElementById("kettei" + minusoneKN + "").innerHTML;
      current = data.replace(/</g, "<");

      // current = document.querySelector()にする。。。。

      // alert(result);
      console.log(list[result]);

      // var elem = document.getElementById("kettei"+ketteinum+"");
      // elem.innerHTML = result;

      if (result == "<center>") {
        document.getElementById("button1").innerHTML = "<h1>";
        var elem1 = (document.getElementById("button1").innerHTML = "<h1>");
      }
      if (result == "<h1>" || result == "<h2>" || result == "<br>") {
        document.getElementById("button1").innerHTML = "文字入力";
      }
      if (result == "文字入力") {
        var elem1 = document.getElementById("button1");
        elem1.innerHTML = "<\u002fh1>";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "<a") {
        document.getElementById("button1").innerHTML = "href";
        document.getElementById("button2").innerHTML = "id";
        document.getElementById("button3").innerHTML = ">";
        document.getElementById("next").innerHTML = "その他";
      }

      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "href") {
        document.getElementById("button1").innerHTML = "index.html";
        document.getElementById("button2").innerHTML = "test.html";
        document.getElementById("button3").innerHTML = "";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "index.html") {
        document.getElementById("button1").innerHTML = ">";
        document.getElementById("button2").innerHTML = "<\u002fh2>";
        document.getElementById("button3").innerHTML = "<br>";
        document.getElementById("next").innerHTML = "<\u002fp>";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == ">") {
        document.getElementById("button1").innerHTML = "ホーム";
        document.getElementById("button2").innerHTML = "自己紹介";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }

      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "ホーム") {
        document.getElementById("button1").innerHTML = "<\u002fa>";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "test.html") {
        document.getElementById("button1").innerHTML = ">";
        document.getElementById("button2").innerHTML = "id";
        document.getElementById("button3").innerHTML = "";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "自己紹介") {
        document.getElementById("button1").innerHTML = "<\u002fa>";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "<hr") {
        document.getElementById("button1").innerHTML = "width";
        document.getElementById("button2").innerHTML = "height";
        document.getElementById("button3").innerHTML = "";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "width") {
        document.getElementById("button1").innerHTML = "300";
        document.getElementById("button2").innerHTML = "400";
        document.getElementById("button3").innerHTML = "500";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (
        result == "500" ||
        result == "400" ||
        result == "300" ||
        result == "3" ||
        result == "5" ||
        result == "10"
      ) {
        document.getElementById("button1").innerHTML = ">";
        document.getElementById("button2").innerHTML = "";
        document.getElementById("button3").innerHTML = "";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "<img") {
        document.getElementById("button1").innerHTML = "src";
        document.getElementById("button2").innerHTML = "id";
        document.getElementById("button3").innerHTML = "alt";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "src") {
        document.getElementById("button1").innerHTML = "url.jpg";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      } else if (result == "url.jpg") {
        //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
        //.jpg??.pngその他その他?
        document.getElementById("button1").innerHTML = ">";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "<p>") {
        document.getElementById("button1").innerHTML = "文字入力";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "<font") {
        document.getElementById("button1").innerHTML = "size";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "size") {
        document.getElementById("button1").innerHTML = "3";
        document.getElementById("button2").innerHTML = "5";
        document.getElementById("button3").innerHTML = "10";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "") {
        document.getElementById("button1").innerHTML = "<\u002fh1>";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      if (result == "") {
        document.getElementById("button1").innerHTML = "<\u002fh1>";
        document.getElementById("button2").innerHTML = "<h1>";
        document.getElementById("button3").innerHTML = "<h1>";
        document.getElementById("next").innerHTML = "その他";
      }
      document.getElementById("next").innerHTML = "その他";
    }
  }
  var center = ["<h1", "<hr", "<h2"];
  // function upcode() {
  //   if (ketteinum < 3) {
  //   } else {
  //     var minusoneKN = ketteinum - 1;
  //
  //     var data = document.getElementById("kettei" + minusoneKN + "").innerHTML;
  //     //?f?[?^?o??
  //
  //     document.write(data);
  //   }
  // }
}

function preview() {
  //プレビュー
  // console.log("押された");

  str = array.join("");
  str = str.replace(/</g, "<");
  str = str.replace(/>/g, ">");
  str = str.replace(/,/g, "");
  document.write(str);

  var previewText = document.querySelector("#preview");
  previewText.srcdoc = str;
  console.log(previewText.srcdoc);

  // console.log(str);
  //   sentwoleft ++;
  // loopKetteiNum++;
  // kakkonum = kakkonum + 1;
}

function more() {
  getHints();
  // data = document.getElementById("kettei").innerHTML;
  // var ddd = ketteinum - 1;
  // // console.log(ketteinum);
  // var result = "";
  // if (ddd == 0) {
  // } else if (ddd == 1) {
  //   result = document
  //     .getElementById("kettei" + ddd + "")
  //     .innerHTML.replace(/</g, "<");
  // }
  // console.log(result);
  // moreNum++;
  // var moreNum1 = moreNum * 3;
  //
  // // var array = ['a', 'b', 'c'];
  // var value1 = keyWordList[moreNum1 - 3];
  // var value2 = keyWordList[moreNum1 - 2];
  // var value3 = keyWordList[moreNum1 - 1];
  //
  // // console.log(value1); // ['a', 'b', 'c']
  // // console.log(value2); // ['a', 'b', 'c']
  // // console.log(value3); // ['a', 'b', 'c']
  // if (value1 == null && value2 == null && value3 == null) {
  //   moreNum = 1;
  //   var moreNum1 = moreNum * 3;
  //
  //   var value1 = keyWordList[moreNum1 - 3];
  //   var value2 = keyWordList[moreNum1 - 2];
  //   var value3 = keyWordList[moreNum1 - 1];
  //   document.getElementById("button1").innerHTML = value1;
  //   document.getElementById("button2").innerHTML = value2;
  //   document.getElementById("button3").innerHTML = value3;
  //   document.getElementById("next").innerHTML = "その他";
  // } else {
  //   document.getElementById("button1").innerHTML = value1;
  //   document.getElementById("button2").innerHTML = value2;
  //   document.getElementById("button3").innerHTML = value3;
  //   document.getElementById("next").innerHTML = "その他";
  // }
}

var offset = -3;
var offsetplus = 0;

function getHints() {
  //その他ボタン
  //４つの候補の中身を変える
  var minusoneKN = ketteinum + 1;
  // alert(minusoneKN);
  data = document.getElementById("kettei" + ketteinum + "").innerHTML;

  current = data.replace(/</g, "<");
  current = current.replace(/>/g, ">");
  // var hitns = list[current].slice(offset, offsetplus);
  // if (hints[0] != null) {
  return list[current].slice(offset, offsetplus);
  // } else {
  //   offset = 0;
  //   offsetplus = 3;
  //   var hints = getHints();
  // }
}
// var renderNum = 0; //render関数が何回呼ばれたか
function render() {
  //getHints関数のoffsetをここで設定するーー→getHints関数内に書くと、３回呼ばれてしまうから。
  offset = offset + 3;
  console.log(offset);
  offsetplus = offset + 3;
  console.log(offsetplus);
  // if (renderNum == 0) {
  //   alert("eeeee!!!");
  //４つの候補を作る
  var container = document.querySelector(".hintcontainer");
  //bodyの中にあるhintcontainerを削除する
  // if (container != null) {
  document.body.removeChild(container); //４つの候補を表示するDivを作る
  // } else {
  //   renderNum = 0;
  // }
  // }

  var parent = document.createElement("div");
  parent.classList.add("hintcontainer");

  //createHintButton関数に以下の３つの情報を投げて、appendChildさせる
  createHintButton("button1", 0, parent);
  createHintButton("button2", 1, parent);
  createHintButton("button3", 2, parent);

  //その他ボタンの作成
  var next = document.createElement("button");
  next.classList.add("next");
  next.textContent = "その他";
  next.onclick = render;
  parent.appendChild(next);

  document.body.appendChild(parent);
}
var nullNum = 0;
function createHintButton(className, num, parent) {
  var button = document.createElement("button");
  button.classList.add(className);
  //addeventlistnerを追加
  console.log(button);
  button.addEventListener("click", function() {
    console.log("addEventListenerが呼ばれた");
    first(num);
  });
  parent.appendChild(button);

  var hints = getHints();
  button.textContent = hints[num];
  if (hints[0] == null) {
    nullNum++;
    if (nullNum == 1) {
      var countup = function() {
        // alert("緊急");
        // renderNum = 1;
        offset = -3;
        offsetplus = 0;
        nullNum = 0;
        render();
      };
      setTimeout(countup, 10);
    }
  }
  console.log(hints[0]);
  console.log(hints[1]);
  console.log(hints[2]);
}
