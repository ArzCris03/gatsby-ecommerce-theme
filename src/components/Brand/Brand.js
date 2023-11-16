<!DOCTYPE html>
<html>
<head>
  <title>Logo de Mario</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="logo">
    <div class="head"></div>
    <div class="hat"></div>
    <div class="eyes"></div>
    <div class="mustache"></div>
    <div class="mouth"></div>
    <div class="body"></div>
    <div class="buttons"></div>
    <div class="hands"></div>
    <div class="legs"></div>
  </div>
</body>
</html>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f5d6a3;
}

.logo {
  position: relative;
  width: 150px;
  height: 200px;
  background-color: #e92234;
  border-radius: 50% 50% 0 0;
}

.head {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background-color: #fcd0a1;
  border-radius: 50%;
}

.hat {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 40px;
  background-color: #0056b3;
}

.eyes {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
}

.mustache {
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 5px;
  background-color: #000;
}

.mouth {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 5px;
  background-color: #000;
  border-radius: 50%;
}

.body {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 100px;
  background-color: #fcd0a1;
}

.buttons {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
}

.hands {
  position: absolute;
  top: 110px;
  left: 0;
  width: 30px;
  height: 60px;
  background-color: #fcd0a1;
}

.legs {
  position: absolute;
  top: 200px;
  left: 0;
  width: 30px;
  height: 80px;
  background-color: #fcd0a1;
}
