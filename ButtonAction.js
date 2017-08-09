postValueCheck();
function postValueCheck() {
  if (str != null) {
    document.querySelector(".postformb").style.display = "block";
  } else {
    document.querySelector(".postformb").style.display = "none";
  }
}

function codeFTP() {
  // if(str != ""){
  str = array.join(",");
  str = str.replace(/</g, "<");
  str = str.replace(/>/g, ">");
  str = str.replace(/,/g, "");
  document.write(str);
}
// document.write("<canvas id='nextLine' width='1000px;' height='1000px;'></canvas>");
//
// var canvas = document.querySelector( "nextLine" );
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
var decisionLineleft = 0;
var array = [];
var kakkonum = 0;
var ketteinum = 0;
var ketteinum1 = 0;
var num = 0;
var n = 0;
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
  文字入力: ["href", "id", ">", "</p>"],
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
  size: ["3", "5", "10"],
  "1": ["<center>", "<p>", "<img"],
  HTML: ["<center>", "</p>", "<a>", "<li>", "<button"],
  "": ["<center>", "<p>", "<a>"]
};

var commentList = {
  "<center>": ["中央に配置"],
  href: ["表示するサイトのURL"],
  ">": ["閉じる"],
  "<hr": ["線を描く"],
  width: ["横幅を指定"],
  "<img": ["画像を表示"],
  src: ["画像を指定"],
  "<p>": ["文字を表示"],
  "<font": ["文字の設定を変える"],
  size: ["文字サイズを指定"],
  color: ["文字の色を指定"],
  id: ["その部品の名前を指定"],
  "</p>": ["pタグを終わらせる"],
  "<a>": ["サイトのURLを表示する"],
  "<li>": ["表を作る"],
  "<button": ["ボタンを作るf"],
  "": [""],
  "": [""],
  "": [""],
  "": [""],
  "": [""]
};

function kaigyo() {
  document.querySelector(".first").onclick = new Function("first()");

  // str = array.join(',');
  // str = str.replace( /</g , "<" ) ;
  // str = str.replace( />/g , ">" ) ;
  // str = str.replace( /,/g , "" ) ;
  //
  kurikaesi = 0;
  decisionLineleft++;
  loopKetteiNum++;
  kakkonum = kakkonum + 1;
  // document.querySelector(".button1").style.display="none";
  // document.querySelector(".button2").style.display="none";
  // document.querySelector(".button3").style.display="none";
  //   document.querySelector(".next").style.display="none";
  //   document.querySelector(".nextLine").style.display="none";
  //   document.querySelector(".backGroundColor"+ketteinum+"").style.display="none";
  //   document.querySelector(".decisionButton"+ketteinum+"").onclick = new Function( "" );
}

function first(datan) {
  // alert("aiueo");
  selected = "";
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
    render(); //一番最初の候補をrender()で自動で作成するため

    if (ketteinum == 1) {
      // document.querySelector(".first").onclick = new Function("");
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
      // document.write("<img src='sen.png' id='decisionLine' style='position:absolute; top:250px;  left:150px; width:150px; height:50px;'>");
      // var hintcontainer = document.createElement("div");
      // hintcontainer.className = "hintcontainer";
      // document.body.appendChild(hintcontainer); //候補div
      //
      // var nextLine = document.createElement("img");
      // nextLine.className = "nextLine";
      // nextLine.src = "sen.png";
      // hintcontainer.appendChild(nextLine); //候補を表示するための線
      //
      // var backGroundColor = document.createElement("img");
      // backGroundColor.className = "backGroundColor";
      // backGroundColor.src = "backGroundColor.png";
      // hintcontainer.appendChild(backGroundColor); //候補を表示するところの背景
      //
      // var one = document.createElement("button");
      // one.className = "button1";
      // one.style = "position:absolute;";
      // one.style = "top:1250px;";
      // one.textContent = "HTML";
      // hintcontainer.appendChild(one); // hintcontainer(候補のdiv ) に Button(候補) を追加
      //
      // one.addEventListener("click", function() {
      //   first(0);
      // });
      //
      // var two = document.createElement("button");
      // two.className = "button2";
      // two.textContent = "2";
      // hintcontainer.appendChild(two); // hintcontainer(候補のdiv ) に Button(候補) を追加
      // two.addEventListener("click", function() {
      //   first(1);
      // });
      //
      // var three = document.createElement("button");
      // three.className = "button3";
      // three.textContent = "3";
      // hintcontainer.appendChild(three); // hintcontainer(候補のdiv ) に Button(候補) を追加
      // three.addEventListener("click", function() {
      //   first(2);
      // });
      //
      // var four = document.createElement("button");
      // four.className = "next";
      // four.textContent = "4";
      // hintcontainer.appendChild(four); // hintcontainer(候補のdiv ) に Button(候補) を追加
      // four.addEventListener("click", function() {
      //   render();
      // });
      // var objBody = document.getElementsByTagName("body").item(0);
      // objBody.appendChild(element);
      // body要素にdivエレメントを追加;
    } else {
      if (kakkonum == 0) {
        var left = ketteinum * 200;
        // var newleft = left - 51;
        // document.write("<img src='backGroundColor.png' id='backGroundColor"+ketteinum+"' style='position:absolute; top:140px;  left:"+newleft+"px; width:200px; height:370px;'>");

        var element = document.querySelector(".button1");
        element.style.display = "block";
        element.style.left = left;

        var element1 = document.querySelector(".button2");
        element1.style.display = "block";
        element1.style.left = left;

        var element2 = document.querySelector(".button3");
        element2.style.display = "block";
        element2.style.left = left;

        var element3 = document.querySelector(".next");
        element3.style.display = "block";
        element3.style.left = left;

        var element4 = document.querySelector(".nextLine");
        var senleft = left - 105;
        element4.style.display = "block";
        element4.style.left = senleft;

        // document.querySelector(".backGroundColor").style.display="block";
        var element5 = document.querySelector(".backGroundColor");
        var senleftA = left - 51;
        element5.style.display = "block";
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
          var element1234 = document.querySelector(
            ".decisionButton" + ddd + ""
          );
          var rect1234 = element1234.getBoundingClientRect();

          // ???W???v?Z????
          oneXpostion = rect1234.left + window.pageXOffset; // ?v?f??X???W
          oneYpositon = rect1234.top + window.pageYOffset; // ?v?f??Y???W
          // n = 200*num;
          left1 = oneXpostion + 200;

          // left1 = kurikaesi1 * 205;
        }

        var element = document.querySelector(".button1");
        element.style.display = "block";
        element.style.left = left1;
        var top = loopKetteiNum * 80;
        element.style.top = top;
        element.innerHTML = "<center>";

        var element1 = document.querySelector(".button2");
        element1.style.display = "block";
        element1.style.left = left1;
        var top1 = top + 85;
        element1.style.top = top1;
        element1.innerHTML = "<hr";

        var element2 = document.querySelector(".button3");
        element2.style.display = "block";
        element2.style.left = left1;
        var top2 = top1 + 85;
        element2.style.top = top2;
        element2.innerHTML = "<a";

        var element3 = document.querySelector(".next");
        element3.style.display = "block";
        element3.style.left = left1;
        var top3 = top2 + 105;
        element3.style.top = top3;
        element3.innerHTML = "もっと見る";

        var element4 = document.querySelector(".nextLine");
        var senleft = left1 - 105;
        element4.style.display = "block";
        element4.style.left = senleft;

        var element5 = document.querySelector(".backGroundColor");
        var senleftA = left1 - 50;
        element5.style.display = "block";
        element5.style.left = senleftA;

        // var element5 = document.querySelector(".backGroundColor");
        // var sentopA = left1 - 105;
        // element5.style.top = sentopA;
      }

      // document.querySelector(".decisionButton").style.display="none";
    }

    nextcode();
  } else if (num == 2) {
    if (datan == 3) {
    } else {
      // document.querySelector(".button1").style.display = "none";
      // document.querySelector(".button2").style.display = "none";
      // document.querySelector(".button3").style.display = "none";
      // document.querySelector(".next").style.display = "none";
      // document.querySelector(".nextLine").style.display = "none";
      // document.querySelector(".backGroundColor").style.display = "none";
      // document.querySelector(".commentText1").style.display = "none";
      // document.querySelector(".commentText2").style.display = "none";
      // document.querySelector(".commentText3").style.display = "none";
    }

    num = 0;

    // $("#html").append(
    //   "<button type='button' id='kettei" +
    //     ketteinum +
    //     "' onClick='first()' style='position:absolute; top:100px;  left:200px; width:150px; height:50px;'><h</button>"
    // );

    if (kakkonum == 0) {
      // var left = ketteinum * 200;
      // var element = document.querySelector(".decisionButton" + ketteinum + "");
      // element.style.left = left;
      // document.querySelector(".decisionButton" + ketteinum + "").style.display =
      //   "block";
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
      // var ddd = ketteinum - 1;
      // var element = document.querySelector(".decisionLine" + ddd + "");
      // var rect = element.getBoundingClientRect();
      // var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
      // var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
      // n = 200 * num;

      if (kakkonum == 0) {
        var senleft1 = positionX + 195;
        var element1 = document.querySelector(".decisionLine" + ketteinum + "");
        element1.style.left = senleft1;
        document.querySelector(".decisionLine" + ketteinum + "").style.display =
          "block";
      } else {
        var senleft1 = positionX + 200;
        var element1 = document.querySelector(".decisionLine" + ketteinum + "");
        element1.style.left = senleft1;
        document.querySelector(".decisionLine" + ketteinum + "").style.display =
          "block";
      }
    } else {
      var ddd = ketteinum - 1;
      if (ketteinum == 1) {
      } else {
        var element = document.querySelector(".decisionLine" + ddd + "");
        var rect = element.getBoundingClientRect();

        // ???W???v?Z????
        var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
        var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
        n = 200 * num;
        positionX = positionX + 200;
        if (kakkonum == 0) {
          var senleft1 = ketteinum * 170;
          var element1 = document.querySelector(
            "decisionLine" + ketteinum + ""
          );
          element1.style.left = positionX;
          document.querySelector(
            ".decisionLine" + ketteinum + ""
          ).style.display =
            "block";
        } else {
          var ddd = ketteinum - 1;
          if (decisionLineleft == 1) {
            var ddd = ketteinum - 1;

            var element = document.querySelector(
              ".decisionButton" + ketteinum + ""
            );
            var rect = element.getBoundingClientRect();

            // ???W???v?Z????
            var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
            var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
            n = 200 * num;
            positionX = positionX + 135;
            element.style.left = positionX;
            element.style.top = loopKetteiNum * 132.5;
            // alert("haihai");

            var element = document.querySelector(
              ".decisionLine" + ketteinum + ""
            );
            var rect = element.getBoundingClientRect();

            // ???W???v?Z????
            var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
            var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
            n = 200 * num;
            positionX = positionX + 150;

            element.style.left = 145;
            element.style.top = loopKetteiNum * 132.5;
            var senleft1 = ketteinum1 * 145; //kettei??{?^その他その他@?@?@??????top??????
            var element1 = document.querySelector(
              ".decisionLine" + ketteinum + ""
            );
            element1.style.left = 145;
            element1.style.top = loopKetteiNum * 132.5;
            document.querySelector(
              ".decisionLine" + ketteinum + ""
            ).style.display =
              "block";
            decisionLineleft = 0;
          } else {
            // if(ketteinum1 == 1){
            var ddd = ketteinum - 1;

            var element = document.querySelector(
              ".decisionButton" + ketteinum + ""
            );
            var rect = element.getBoundingClientRect();

            // ???W???v?Z????
            var positionX = rect.left + window.pageXOffset; // ?v?f??X???W
            var positionY = rect.top + window.pageYOffset; // ?v?f??Y???W
            n = 200 * num;
            positionX = positionX + 135;
            element.style.left = positionX;
            element.style.top = loopKetteiNum * 232.5;
            // alert("haihai");

            //     var senleft1 = ketteinum1 * 145;//kettei??{?^その他その他@?@?@??????top??????
            //     var element1 = document.querySelector(".decisionLine"+ketteinum+"");
            //     element1.style.left = senleft1;
            //     element1.style.top = 265;
            //     document.querySelector(".decisionLine").style.display="block";
            // }else{
            var senleft1 = ketteinum1 * 175; //kettei??{?^その他その他@?@?@??????top??????
            var element1 = document.querySelector(
              ".decisionLine" + ketteinum + ""
            );
            element1.style.left = positionX;
            element1.style.top = loopKetteiNum * 132.5;
            document.querySelector(
              ".decisionLine" + ketteinum + ""
            ).style.display =
              "block";
          }

          // }
        }
      }
    }

    // var count = 0;
    //   var countup = function(){
    if (datan == 0) {
      // var element = document.querySelector(".button1");
      // result1234 = element.innerHTML.replace(/</g, "<");
      // var elem = document.querySelector(".decisionButton" + ketteinum + "");
      // elem.innerHTML = result1234;
      if (result1234.indexOf("\u002f") != -1) {
        // kurikaesi = 0;
        //               decisionLineleft ++;
        // loopKetteiNum++;
        //       kakkonum = kakkonum + 1;
        // document.querySelector(".button1").style.display="none";
        // document.querySelector(".button2").style.display="none";
        // document.querySelector(".button3").style.display="none";
        //   document.querySelector(".next").style.display="none";
        //   document.querySelector(".nextLine").style.display="none";
        //   document.querySelector(".backGroundColor"+ketteinum+"").style.display="none";
        //   document.querySelector(".decisionButton"+ketteinum+"").onclick = new Function( "" );
      }

      // data = document.querySelector(".button1").innerHTML;
    } else if (datan == 1) {
      // var element = document.querySelector(".button2");
      // result1234 = document.querySelector(".button2").innerHTML;
      //
      // // var dadada = ketteinum - 1;
      // var elem = document.querySelector(".decisionButton" + ketteinum + "");
      // elem.innerHTML = result1234;
      // data = document.querySelector(".button2").innerHTML;
    } else if (datan == 2) {
      // var element = document.querySelector(".button3");
      // result1234 = document.querySelector(".button3").innerHTML;
      // var elem = document.querySelector(".decisionButton" + ketteinum + "");
      // elem.innerHTML = result1234;
      // data = document.querySelector(".button3");
    } else if (datan == 3) {
      // document.querySelector(".next");
    }
    var minusoneKN1 = ketteinum - 1;

    if (datan == 3) {
    } else {
      // var hint = document.querySelector(".decisionButton" + ketteinum + "")
      //   .innerHTML;
      // //?f?[?^?o??
      //
      // var data2 = data1+ "<"
      // document.write(data1);
      //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // var text = convertHintText(hint);
    }

    // var element = document.querySelector(".button1");
    // var result = element.innerHTML.replace(/</g, "<");
    // var elem = document.querySelector(".decisionButton" + ketteinum + "");
    // elem.innerHTML = result;
    if (result.indexOf("\u002f") != -1) {
      // str = array.join(',');
      // str = str.replace( /</g , "<" ) ;
      // str = str.replace( />/g , ">" ) ;
      // str = str.replace( /,/g , "" ) ;
      //
      // if(ketteinum == 1){
      //   var elem = document.querySelector(".decisionButton");
      //   elem.innerHTML = str;
      // }else{
      //   var elem = document.querySelector(".decisionButton"+ketteinum+"");
      //   elem.innerHTML = str;
      // }
      // document.write(str);
      // document.write("<button type='button' id='previewButton' onClick='preview()' style='position:absolute; top:93.3%;  left:0%; width:100%; height:50px;'>?v???r???[</button>");
      // document.write("<img src='<imgpng' id='backGroundColor"+ketteinum+"' style='position:absolute; top:60px;  left:100px; width:200px; height:600px;'>");
      // document.querySelector(".button1").style.display="none";
      // document.querySelector(".button2").style.display="none";
      // document.querySelector(".button3").style.display="none";
      //   document.querySelector(".next").style.display="none";
      //   document.querySelector(".nextLine").style.display="none";
      //   document.querySelector(".backGroundColor"+ketteinum+"").style.display="none";
      //   document.querySelector(".decisionButton"+ketteinum+"").onclick = new Function( "" );
    }
  }
  //   setTimeout(countup, 1000);
  // }
}

//その他A????R?[?h???\その他???[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[

function nextcode() {
  //候補を表示する
  // alert("aiueo");
  if (num == 1) {
    // document.querySelector(".button1").style.display = "block";
    // document.querySelector(".button2").style.display = "block";
    // document.querySelector(".button3").style.display = "block";
    // document.querySelector(".next").style.display = "block";
    // document.querySelector(".nextLine").style.display = "block";
    // document.querySelector(".backGroundColor").style.display = "block";

    // if(datan == 0){

    if (kurikaesi == 1) {
      // document.querySelector(".button1").innerHTML = "<center>";
      // document.querySelector(".button2").innerHTML = "<hr";
      // document.querySelector(".button3").innerHTML = "<a";
      // document.querySelector(".next").innerHTML = "その他"; //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
    } else {
      // var element="button2";
      var minusoneKN = ketteinum - 1;
      //?f?[?^???????
      // data = document.querySelector(".decisionButton" + minusoneKN + "")
      // .innerHTML;
      // result = data.replace(/</g, "<");

      // current = document.querySelector()にする。。。。

      // alert(result);

      // var elem = document.querySelector(".decisionButton"+ketteinum+"");
      // elem.innerHTML = result;

      // if (result == "<center>") {
      //   document.querySelector(".button1").innerHTML = "<h1>";
      //   var elem1 = (document.querySelector(".button1").innerHTML = "<h1>");
      // }
      // if (result == "<h1>" || result == "<h2>" || result == "<br>") {
      //   document.querySelector(".button1").innerHTML = "文字入力";
      // }
      // if (result == "文字入力") {
      //   var elem1 = document.querySelector(".button1");
      //   elem1.innerHTML = "<\u002fh1>";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "<a") {
      //   document.querySelector(".button1").innerHTML = "href";
      //   document.querySelector(".button2").innerHTML = "id";
      //   document.querySelector(".button3").innerHTML = ">";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      //
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "href") {
      //   document.querySelector(".button1").innerHTML = "index.html";
      //   document.querySelector(".button2").innerHTML = "test.html";
      //   document.querySelector(".button3").innerHTML = "";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "index.html") {
      //   document.querySelector(".button1").innerHTML = ">";
      //   document.querySelector(".button2").innerHTML = "<\u002fh2>";
      //   document.querySelector(".button3").innerHTML = "<br>";
      //   document.querySelector(".next").innerHTML = "<\u002fp>";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == ">") {
      //   document.querySelector(".button1").innerHTML = "ホーム";
      //   document.querySelector(".button2").innerHTML = "自己紹介";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      //
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "ホーム") {
      //   document.querySelector(".button1").innerHTML = "<\u002fa>";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "test.html") {
      //   document.querySelector(".button1").innerHTML = ">";
      //   document.querySelector(".button2").innerHTML = "id";
      //   document.querySelector(".button3").innerHTML = "";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "自己紹介") {
      //   document.querySelector(".button1").innerHTML = "<\u002fa>";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "<hr") {
      //   document.querySelector(".button1").innerHTML = "width";
      //   document.querySelector(".button2").innerHTML = "height";
      //   document.querySelector(".button3").innerHTML = "";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "width") {
      //   document.querySelector(".button1").innerHTML = "300";
      //   document.querySelector(".button2").innerHTML = "400";
      //   document.querySelector(".button3").innerHTML = "500";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (
      //   result == "500" ||
      //   result == "400" ||
      //   result == "300" ||
      //   result == "3" ||
      //   result == "5" ||
      //   result == "10"
      // ) {
      //   document.querySelector(".button1").innerHTML = ">";
      //   document.querySelector(".button2").innerHTML = "";
      //   document.querySelector(".button3").innerHTML = "";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "<img") {
      //   document.querySelector(".button1").innerHTML = "src";
      //   document.querySelector(".button2").innerHTML = "id";
      //   document.querySelector(".button3").innerHTML = "alt";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "src") {
      //   document.querySelector(".button1").innerHTML = "url.jpg";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // } else if (result == "url.jpg") {
      //   //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      //   //.jpg??.pngその他その他?
      //   document.querySelector(".button1").innerHTML = ">";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "<p>") {
      //   document.querySelector(".button1").innerHTML = "文字入力";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "<font") {
      //   document.querySelector(".button1").innerHTML = "size";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "size") {
      //   document.querySelector(".button1").innerHTML = "3";
      //   document.querySelector(".button2").innerHTML = "5";
      //   document.querySelector(".button3").innerHTML = "10";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "") {
      //   document.querySelector(".button1").innerHTML = "<\u002fh1>";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
      // if (result == "") {
      //   document.querySelector(".button1").innerHTML = "<\u002fh1>";
      //   document.querySelector(".button2").innerHTML = "<h1>";
      //   document.querySelector(".button3").innerHTML = "<h1>";
      //   document.querySelector(".next").innerHTML = "その他";
      // }
      // render();
      // document.querySelector(".next").innerHTML = "その他";
    }
  }
  var center = ["<h1", "<hr", "<h2"];
  // function upcode() {
  //   if (ketteinum < 3) {
  //   } else {
  //     var minusoneKN = ketteinum - 1;
  //
  //     var data = document.querySelector(".decisionButton" + minusoneKN + "").innerHTML;
  //     //?f?[?^?o??
  //
  //     document.write(data);
  //   }
  // }
}

function preview() {
  //プレビュー

  str = array.join("");
  str = str.replace(/</g, "<");
  str = str.replace(/>/g, ">");
  str = str.replace(/,/g, "");
  document.write(str);

  var previewText = document.querySelector(".#preview");
  previewText.srcdoc = str;

  //   decisionLineleft ++;
  // loopKetteiNum++;
  // kakkonum = kakkonum + 1;
}

function more() {
  getHints();
  // data = document.querySelector(".decisionButton").innerHTML;
  // var ddd = ketteinum - 1;
  // var result = "";
  // if (ddd == 0) {
  // } else if (ddd == 1) {
  //   result = document
  //     .querySelector(".decisionButton" + ddd + "")
  //     .innerHTML.replace(/</g, "<");
  // }
  // moreNum++;
  // var moreNum1 = moreNum * 3;
  //
  // // var array = ['a', 'b', 'c'];
  // var value1 = keyWordList[moreNum1 - 3];
  // var value2 = keyWordList[moreNum1 - 2];
  // var value3 = keyWordList[moreNum1 - 1];
  //
  // if (value1 == null && value2 == null && value3 == null) {
  //   moreNum = 1;
  //   var moreNum1 = moreNum * 3;
  //
  //   var value1 = keyWordList[moreNum1 - 3];
  //   var value2 = keyWordList[moreNum1 - 2];
  //   var value3 = keyWordList[moreNum1 - 1];
  //   document.querySelector(".button1").innerHTML = value1;
  //   document.querySelector(".button2").innerHTML = value2;
  //   document.querySelector(".button3").innerHTML = value3;
  //   document.querySelector(".next").innerHTML = "その他";
  // } else {
  //   document.querySelector(".button1").innerHTML = value1;
  //   document.querySelector(".button2").innerHTML = value2;
  //   document.querySelector(".button3").innerHTML = value3;
  //   document.querySelector(".next").innerHTML = "その他";
  // }
}

var offset = 0;
var offsetplus = 3;

function getHints() {
  //その他ボタン
  //４つの候補の中身を変える
  var minusoneKN = ketteinum - 1;
  console.log(ketteinum);
  // alert(minusoneKN);

  // data = document.querySelector(".decisionButton" + ketteinum + "").innerHTML;
  var data = selected || "";
  // alert(data);

  // var hitns = list[current].slice(offset, offsetplus);
  // if (hints[0] != null) {
  return list[data].slice(offset, offsetplus);
  // } else {
  //   offset = 0;
  //   offsetplus = 3;
  //   var hints = getHints();
  // }
}
// var renderNum = 0; //render関数が何回呼ばれたか
var selected = null;
function render() {
  console.log("render関数");

  //renderとは、その他ボタンが押された時の挙動

  //getHints関数のoffsetをここで設定するーー→getHints関数内に書くと、３回呼ばれてしまうから。

  // if (renderNum == 0) {
  //   alert("eeeee!!!");
  //４つの候補を作る
  // if (offset != 3) {
  var container = document.querySelector(".hintcontainer");
  if (container != null) {
    document.body.removeChild(container); //４つの候補を表示するDivを消す
  }
  var comment = document.querySelector(".commentDiv");
  if (comment != null) {
    document.body.removeChild(comment); //４つの候補を表示するDivを消す
  }

  var decision = document.querySelector(".decisionDiv");
  if (decision != null) {
    document.body.removeChild(decision);
  }
  // }
  //bodyの中にあるhintcontainerを削除する
  // if (container != null) {
  // } else {
  //   renderNum = 0;
  // }
  // }

  var parent = document.createElement("div");
  parent.classList.add("hintcontainer");

  var decisionDiv = document.createElement("div");
  decisionDiv.classList.add("decisionDiv");
  document.body.appendChild(decisionDiv);

  var decisionLine = document.createElement("img"); //決定したボタンを繋げる線
  decisionLine.src = "sentwo.png";
  decisionLine.className = "decisionLine" + ketteinum + " decisionLine";
  decisionDiv.appendChild(decisionLine);
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    var decisionButton = document.createElement("button"); //決定したボタン
    decisionButton.className = "decisionButton" + (i + 1) + "";
    decisionButton.style = "margin-top:400px;";
    decisionButton.textContent = array[i];
    var text = array[i];
    decisionButton.addEventListener("click", function() {
      if (list[text]) {
        selected = text;
      } else {
        selected = "";
        offset = 0;
        offsetplus = 3;
      }
      render();
    });
    decisionDiv.appendChild(decisionButton);
  }
  //createHintButton関数に以下の３つの情報を投げて、appendChildさせる
  if (selected != null) {
    createHintButton("button1", 0, parent);
    createHintButton("button2", 1, parent);
    createHintButton("button3", 2, parent);

    //その他ボタンの作成
    var next = document.createElement("button");
    next.classList.add("next");
    next.textContent = "その他";
    next.addEventListener("click", function() {
      offset = offset + 3;
      offsetplus = offset + 3; //ここを別の場所に移す
      var hints = getHints();
      if (hints.length <= 0) {
        // renderNum = 1;
        offset = 0;
        offsetplus = 3;
        nullNum = 0;
      }
      render();
    });
    parent.appendChild(next);

    //候補を表示する４つに分かれた線
    var nextLine = document.createElement("img");
    nextLine.classList.add("nextLine");
    nextLine.src = "sen.png";
    parent.appendChild(nextLine);

    //候補を表示する所のバック背景
    var backGroundColor = document.createElement("img");
    backGroundColor.classList.add("backGroundColor");
    backGroundColor.src = "backGroundColor.png";
    parent.appendChild(backGroundColor);

    document.body.appendChild(parent);
  }
}
var nullNum = 0;

function createHintButton(className, num, parent) {
  var hints = getHints();
  //getHints()で取得した候補の数と、numが同じになったらプログラムをそこで止める
  if (hints.length <= num) {
    return;
  }
  var plusNum = num + 1;
  var buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttonDiv" + plusNum);

  var button = document.createElement("button");
  button.classList.add(className);
  //addeventlistnerを追加
  button.addEventListener("click", function() {
    selected = null;
    array.push(hints[num]);
    console.log(array);
    render();
  });

  button.textContent = hints[num];
  buttonDiv.appendChild(button);
  parent.appendChild(buttonDiv);
  console.log(button.parentNode.parentNode);
  //タグの説明を表示をappendChild
  var buttonValue = hints[num];
  var commentName = "commentText" + (num + 1) + "";
  // if (num == 0) {
  comment(commentName, num, buttonValue, buttonDiv);

  // } else if (num == 1) {
  // } else {
  // }
}

//そのコードが何のコードかを表示
function comment(commentName, num, hints, buttonDiv) {
  var commentText = document.createElement("span");
  commentText.textContent = commentList[hints];
  commentText.classList.add(commentName);
  buttonDiv.appendChild(commentText);
}
//決定されたコードをちゃんとしたコードに変更する関数
function convertHintText(hint) {
  if (hint == "href") {
    hint = "href='";
    // hint[ketteinum-1] = '???j??';
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "index.html") {
    hint = "index.html'";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "width") {
    hint = "width='";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "300" && hint == "400" && hint == "500") {
    hint = hint + "'";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint.indexOf("<") != -1 && hint.indexOf(">") == -1) {
    hint = hint + " ";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "src") {
    hint = "src=''";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "url.jpg") {
    hint = "url.jpg'";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "size") {
    hint = "size='";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "3" || hint == "5" || hint == "10") {
    hint = hint + "'";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "") {
    hint = "";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "") {
    hint = "";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "") {
    hint = "";
  }
  //?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[?[
  if (hint == "") {
    hint = "";
  }
  return hint;
}
