let water = document.getElementById('water');
let litersobj = document.getElementById('litersobj');
let gainsobj = document.getElementById('gainsobj');
let literspsobj = document.getElementById('literspsobj');
let liters = 0;
let gains = 0.1;
let litersPS = 0;
let upgrades = {
  upgrade1: {price: 2,obj: document.getElementById("upgrade1")},
  upgrade2: {price: 18,obj: document.getElementById("upgrade2")},
  upgrade3: {price: 3,obj: document.getElementById("upgrade3")},
  upgrade4: {price: 5,obj: document.getElementById("upgrade4")},
  upgrade5: {price: 12500,obj: document.getElementById("upgrade5")},
  upgrade6: {price: 7,obj: document.getElementById("upgrade6")}
}
function update(){
  litersobj.innerText = "Liters: "+liters.toFixed(2)+"L";
  gainsobj.innerText = "Gains: "+gains.toFixed(1)+"L";
  literspsobj.innerText = "Passive income: "+litersPS.toFixed(1)+"L";
}
function autoclick(){
  clicked();
  requestAnimationFrame(autoclick);
}
function clicked(){
  liters += gains;
  update();
}
function buy(upg){
  let bought = upgrades[upg];
  switch (upg){
    case "upgrade1":
      if (bought.price <= liters){
        gains += 0.1;
        liters -= bought.price;
        bought.price *= 1.5;
        bought.obj.innerText = "+0.1L gain ("+bought.price+"L)";
        update();
      }
      break;
      case "upgrade2":
      if (bought.price <= liters){
        gains += 1;
        liters -= bought.price;
        bought.price *= 3;
        bought.obj.innerText = "+1L gain ("+bought.price+"L)";
        update();
      }
      break;
      case "upgrade3":
      if (bought.price <= liters){
        litersPS += 0.5;
        liters -= bought.price;
        bought.price *= 2;
        bought.obj.innerText = "+0.5L/s ("+bought.price+"L)";
        update();
      }
      break;
      case "upgrade4":
      if (bought.price <= liters){
        gains *= 1.5;
        liters -= bought.price;
        bought.price *= 2.5;
        bought.obj.innerText = "1.5x gains ("+bought.price+"L) (stack)";
        update();
      }
      break;
      case "upgrade5":
      if (bought.price <= liters){
        autoclick();
        liters -= bought.price;
        bought.obj.remove();
        update();
      }
      break;
      case "upgrade6":
      if (bought.price <= liters){
        litersPS *= 2;
        liters -= bought.price;
        bought.price *= 3;
        bought.obj.innerText = "2x passive income ("+bought.price+"L) (stack)";
        update();
      }
  }
}
setInterval(()=>{liters += litersPS; update()},1000);
function autoclicklimitless(){
  document.body.style.backgroundColor = "red";
  clicked();
  requestAnimationFrame(autoclicklimitless);
}
