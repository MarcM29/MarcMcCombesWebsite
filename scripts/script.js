function mouseOver(x) {
    x.style.color = "#04acdd";
  }
  
  function notMouseOver(x) {
    x.style.color = "#FFFFFF";
  }
  
              function setCookie(cname,cvalue,exdays) {
                  var d = new Date();
                  d.setTime(d.getTime() + (exdays*24*60*60*1000));
                  var expires = "expires=" + d.toGMTString();
                  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
              }
  
              function getCookie(cname) {
                  var name = cname + "=";
                  var decodedCookie = decodeURIComponent(document.cookie);
                  var ca = decodedCookie.split(';');
                  for(var i = 0; i < ca.length; i++) {
                      var c = ca[i];
                      while (c.charAt(0) == ' ') {
                      c = c.substring(1);
                      }
                      if (c.indexOf(name) == 0) {
                      return c.substring(name.length, c.length);
                      }
                  }
                  return "";
              }
  
              function displayCookie() {
                  var user=getCookie("username");
                  document.getElementById("test").innerHTML = user;
              }
  
              function checkCookie() {
                  var user=getCookie("username");
                  if (user != "") {
                      document.getElementById("test").innerHTML = user;
                  } else {
                      user = prompt("Welcome, please enter your first name:","");
                      if (user != "" && user != null) {
                      setCookie("username", user, 30);
                      }
                  }
              }
              function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }

              function setTimer () {
if (document.referrer !== document.location.href) {
    setTimeout(function() {
        document.location.reload()
  }, 3000);
}}

