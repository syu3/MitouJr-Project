postValueCheck();
function postValueCheck() {
  if (str != null) {
    document.querySelector(".postformb").style.display = "block";
  } else {
    document.querySelector(".postformb").style.display = "none";
  }
}

function codeFTP() {
  str = array.join(",");
  str = str.replace(/</g, "<");
  str = str.replace(/>/g, ">");
  str = str.replace(/,/g, "");
  document.write(str);

  console.log(str);
}
var result1234 = "";
var str = "";
var decisionLineleft = 0;
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
  document.querySelector(".first").onclick = new Function("first()");

  kurikaesi = 0;
  decisionLineleft++;
  loopKetteiNum++;
  kakkonum = kakkonum + 1;
}

function first(datan) {
  console.log("firstが呼ばれた");
  moreNum = 0;
  num++;
  var link = document.createElement("link");
  link.href = "style.css";
  link.rel = "stylesheet";
  link.type = "text/css";
  var h = document.getElementsByTagName("head")[0];
  h.appendChild(link);
  kurikaesi++;
  if (ketteinum == 0) {
  }
  console.log("numの値は", num);
  if (num == 1) {
    ketteinum++;

    if (ketteinum == 1) {
      var hintcontainer = document.createElement("div");
      hintcontainer.className = "hintcontainer";

      var nextLine = document.createElement("img");
      nextLine.className = "nextLine";
      nextLine.src = "sen.png";

      var backGroundColor = document.createElement("img");
      backGroundColor.className = "backGroundColor";
      backGroundColor.src = "backGroundColor.png";

      var one = document.createElement("button");
      one.className = "button1";
      one.style = "position:absolute;";
      one.style = "top:1250px;";
      one.textContent = "1";

      one.addEventListener("click", function() {
        console.log("addEventListenerが呼ばれた");
        first(0);
      });

      var two = document.createElement("button");
      two.className = "button2";
      two.textContent = "2";
      two.addEventListener("click", function() {
        console.log("addEventListenerが呼ばれた");
        first(1);
      });

      var three = document.createElement("button");
      three.className = "button3";
      three.textContent = "3";
      three.addEventListener("click", function() {
        console.log("addEventListenerが呼ばれた");
        first(2);
      });

      var four = document.createElement("button");
      four.className = "next";
      four.textContent = "4";
      four.addEventListener("click", function() {
        console.log("addEventListenerが呼ばれた");
        render();
      });
    } else {
      document.querySelector(".first").onclick = new Function("");

      if (kakkonum == 0) {
        var left = ketteinum * 200;

        var element = document.querySelector(".button1");
        element.style.left = left;
        var element1 = document.querySelector(".button2");
        element1.style.left = left;
        var element2 = document.querySelector(".button3");
        element2.style.left = left;
        var element3 = document.querySelector(".next");
        element3.style.left = left;
        var element4 = document.querySelector(".nextLine");
        var senleft = left - 105;
        element4.style.left = senleft;

        var element5 = document.querySelector(".backGroundColor");
        var senleftA = left - 51;
        element5.style.left = senleftA;
      } else {
        var left1 = 0;
        var kurikaesi1 = kurikaesi - 1;
        if (kurikaesi1 == 0) {
          left1 = 205;
        } else {
          var ddd = ketteinum - 1;
          var element1234 = document.querySelector(
            ".decisionButton" + ddd + ""
          );
          var rect1234 = element1234.getBoundingClientRect();

          left1 = oneXpostion + 200;
        }

        var element = document.querySelector(".button1");
        element.style.left = left1;
        var top = loopKetteiNum * 80;
        element.style.top = top;
        element.innerHTML = "<center>";

        var element1 = document.querySelector(".button2");
        element1.style.left = left1;
        var top1 = top + 85;
        element1.style.top = top1;
        element1.innerHTML = "<hr";

        var element2 = document.querySelector(".button3");
        element2.style.left = left1;
        var top2 = top1 + 85;
        element2.style.top = top2;
        element2.innerHTML = "<a";

        var element3 = document.querySelector(".next");
        element3.style.left = left1;
        var top3 = top2 + 105;
        element3.style.top = top3;
        element3.innerHTML = "もっと見る";

        var element4 = document.querySelector(".nextLine");
        var senleft = left1 - 105;
        element4.style.left = senleft;

        var element5 = document.querySelector(".backGroundColor");
        var senleftA = left1 - 50;
        element5.style.left = senleftA;
      }
    }

    nextcode();
  } else if (num == 2) {
    if (datan == 3) {
    } else {
      document.querySelector(".button1").style.display = "none";
      document.querySelector(".button2").style.display = "none";
      document.querySelector(".button3").style.display = "none";
      document.querySelector(".next").style.display = "none";
      document.querySelector(".nextLine").style.display = "none";
      document.querySelector(".backGroundColor").style.display = "none";
    }

    num = 0;

    if (datan == 3) {
    } else {
      decisionDiv.className = "decisionDiv";

      decisionLine.src = "sentwo.png";
      decisionLine.className = "decisionLine";
      decisionDiv.appendChild(decisionLine);

      decisionButton.className = "decisionButton" + ketteinum + "";
      decisionDiv.appendChild(decisionButton);
      console.log(decisionButton);
      document.body.appendChild(decisionDiv);
    }

    if (kakkonum == 0) {
      var left = ketteinum * 200;
      var element = document.querySelector(".decisionButton" + ketteinum + "");
      element.style.left = left;
      document.querySelector(".decisionButton" + ketteinum + "").style.display =
        "block";
    } else {
    }

    if (ketteinum == 2) {
      var element = document.querySelector(".decisionLine" + ketteinum + "");
      var rect = element.getBoundingClientRect();
      n = 200 * num;

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

            n = 200 * num;
            positionX = positionX + 135;
            element.style.left = positionX;
            element.style.top = loopKetteiNum * 132.5;
            alert("haihai");

            var element = document.querySelector(
              ".decisionLine" + ketteinum + ""
            );
            var rect = element.getBoundingClientRect();

            n = 200 * num;
            positionX = positionX + 150;

            element.style.left = 145;
            element.style.top = loopKetteiNum * 132.5;
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
            var ddd = ketteinum - 1;

            var element = document.querySelector(
              ".decisionButton" + ketteinum + ""
            );
            var rect = element.getBoundingClientRect();

            n = 200 * num;
            positionX = positionX + 135;
            element.style.left = positionX;
            element.style.top = loopKetteiNum * 132.5;
            alert("haihai");

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
        }
      }
    }

    if (datan == 0) {
      var element = document.querySelector(".button1");
      result1234 = element.innerHTML.replace(/</g, "<");
      var elem = document.querySelector(".decisionButton" + ketteinum + "");
      elem.innerHTML = result1234;
      if (result1234.indexOf("\u002f") != -1) {
      }

      data = document.querySelector(".button1").innerHTML;
    } else if (datan == 1) {
      var element = document.querySelector(".button2");
      result1234 = document.querySelector(".button2").innerHTML;
      console.log(result1234);

      var elem = document.querySelector(".decisionButton" + ketteinum + "");
      console.log("decisionButton" + ketteinum + "," + result1234 + "");
      elem.innerHTML = result1234;

      data = document.querySelector(".button2").innerHTML;
    } else if (datan == 2) {
      var element = document.querySelector(".button3");
      result1234 = document.querySelector(".button3").innerHTML;
      var elem = document.querySelector(".decisionButton" + ketteinum + "");
      elem.innerHTML = result1234;

      data = document.querySelector(".button3");
    } else if (datan == 3) {
      document.querySelector(".next");
    }
    var minusoneKN1 = ketteinum - 1;

    if (datan == 3) {
    } else {
      var hint = document.querySelector(".decisionButton" + ketteinum + "")
        .innerHTML;

      var text = convertHintText(hint);

      array.push(text);
    }

    if (result.indexOf("\u002f") != -1) {
    }
  }
}

function nextcode() {
  if (num == 1) {
    if (kurikaesi == 1) {
    } else {
      var minusoneKN = ketteinum - 1;
      data = document.querySelector(".decisionButton" + minusoneKN + "")
        .innerHTML;
      current = data.replace(/</g, "<");

      console.log(list[result]);

      if (result == "<center>") {
        document.querySelector(".button1").innerHTML = "<h1>";
        var elem1 = (document.querySelector(".button1").innerHTML = "<h1>");
      }
      if (result == "<h1>" || result == "<h2>" || result == "<br>") {
        document.querySelector(".button1").innerHTML = "文字入力";
      }
      if (result == "文字入力") {
        var elem1 = document.querySelector(".button1");
        elem1.innerHTML = "<\u002fh1>";
      }
      if (result == "<a") {
        document.querySelector(".button1").innerHTML = "href";
        document.querySelector(".button2").innerHTML = "id";
        document.querySelector(".button3").innerHTML = ">";
        document.querySelector(".next").innerHTML = "その他";
      }

      if (result == "href") {
        document.querySelector(".button1").innerHTML = "index.html";
        document.querySelector(".button2").innerHTML = "test.html";
        document.querySelector(".button3").innerHTML = "";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "index.html") {
        document.querySelector(".button1").innerHTML = ">";
        document.querySelector(".button2").innerHTML = "<\u002fh2>";
        document.querySelector(".button3").innerHTML = "<br>";
        document.querySelector(".next").innerHTML = "<\u002fp>";
      }
      if (result == ">") {
        document.querySelector(".button1").innerHTML = "ホーム";
        document.querySelector(".button2").innerHTML = "自己紹介";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }

      if (result == "ホーム") {
        document.querySelector(".button1").innerHTML = "<\u002fa>";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "test.html") {
        document.querySelector(".button1").innerHTML = ">";
        document.querySelector(".button2").innerHTML = "id";
        document.querySelector(".button3").innerHTML = "";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "自己紹介") {
        document.querySelector(".button1").innerHTML = "<\u002fa>";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "<hr") {
        document.querySelector(".button1").innerHTML = "width";
        document.querySelector(".button2").innerHTML = "height";
        document.querySelector(".button3").innerHTML = "";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "width") {
        document.querySelector(".button1").innerHTML = "300";
        document.querySelector(".button2").innerHTML = "400";
        document.querySelector(".button3").innerHTML = "500";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (
        result == "500" ||
        result == "400" ||
        result == "300" ||
        result == "3" ||
        result == "5" ||
        result == "10"
      ) {
        document.querySelector(".button1").innerHTML = ">";
        document.querySelector(".button2").innerHTML = "";
        document.querySelector(".button3").innerHTML = "";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "<img") {
        document.querySelector(".button1").innerHTML = "src";
        document.querySelector(".button2").innerHTML = "id";
        document.querySelector(".button3").innerHTML = "alt";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "src") {
        document.querySelector(".button1").innerHTML = "url.jpg";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      } else if (result == "url.jpg") {
        document.querySelector(".button1").innerHTML = ">";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "<p>") {
        document.querySelector(".button1").innerHTML = "文字入力";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "<font") {
        document.querySelector(".button1").innerHTML = "size";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "size") {
        document.querySelector(".button1").innerHTML = "3";
        document.querySelector(".button2").innerHTML = "5";
        document.querySelector(".button3").innerHTML = "10";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "") {
        document.querySelector(".button1").innerHTML = "<\u002fh1>";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }
      if (result == "") {
        document.querySelector(".button1").innerHTML = "<\u002fh1>";
        document.querySelector(".button2").innerHTML = "<h1>";
        document.querySelector(".button3").innerHTML = "<h1>";
        document.querySelector(".next").innerHTML = "その他";
      }
      document.querySelector(".next").innerHTML = "その他";
    }
  }
  var center = ["<h1", "<hr", "<h2"];
}

function preview() {
  str = array.join("");
  str = str.replace(/</g, "<");
  str = str.replace(/>/g, ">");
  str = str.replace(/,/g, "");
  document.write(str);

  var previewText = document.querySelector(".#preview");
  previewText.srcdoc = str;
  console.log(previewText.srcdoc);
}

function more() {
  getHints();
}

var offset = -3;
var offsetplus = 0;

function getHints() {
  var minusoneKN = ketteinum + 1;
  // if (ketteinum != 1) {
  data = document.querySelector(".decisionButton" + ketteinum + "").innerHTML;

  current = data.replace(/</g, "<");
  current = current.replace(/>/g, ">");
  return list[current].slice(offset, offsetplus);
  // }
}
function render() {
  offset = offset + 3;
  console.log(offset);
  offsetplus = offset + 3;
  console.log(offsetplus);
  var container = document.querySelector(".hintcontainer");

  var parent = document.createElement("div");
  parent.classList.add("hintcontainer");

  createHintButton("button1", 0, parent);
  createHintButton("button2", 1, parent);
  createHintButton("button3", 2, parent);

  var next = document.createElement("button");
  next.classList.add("next");
  next.textContent = "その他";
  next.addEventListener("click", function() {
    render();
  });
  parent.appendChild(next);

  document.body.appendChild(parent);
}
var nullNum = 0;
function createHintButton(className, num, parent) {
  var button = document.createElement("button");
  button.classList.add(className);
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

function convertHintText(hint) {
  if (hint == "href") {
    hint = "href='";
  }
  if (hint == "index.html") {
    hint = "index.html'";
  }
  if (hint == "width") {
    hint = "width='";
  }
  if (hint == "300" && hint == "400" && hint == "500") {
    hint = hint + "'";
  }
  if (hint.indexOf("<") != -1 && hint.indexOf(">") == -1) {
    hint = hint + " ";
  }
  if (hint == "src") {
    hint = "src=''";
  }
  if (hint == "url.jpg") {
    hint = "url.jpg'";
  }
  if (hint == "size") {
    hint = "size='";
  }
  if (hint == "3" || hint == "5" || hint == "10") {
    hint = hint + "'";
  }
  if (hint == "") {
    hint = "";
  }
  if (hint == "") {
    hint = "";
  }
  if (hint == "") {
    hint = "";
  }
  if (hint == "") {
    hint = "";
  }
  return hint;
}
