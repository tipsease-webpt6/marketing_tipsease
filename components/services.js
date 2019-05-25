function openNav() {
    document.getElementById("myNav").style.width = "100%";
};
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};



document.getElementById('groceryArticle').style.display='none';
document.getElementById('deliveryArticle').style.display='none';
document.getElementById('valetArticle').style.display='none';
document.getElementById('waiterArticle').style.display='none';

function groceryButton() {
    var x = document.getElementById("groceryArticle");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('groceryWorker').textContent = "-Collapse-";
    } else {
      x.style.display = "none";
      document.getElementById('groceryWorker').textContent = "Tip a Grocery Worker";
    }
}
function deliveryButton() {
    var x = document.getElementById("deliveryArticle");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('deliveryWorker').textContent = "-Collapse-";
    } else {
      x.style.display = "none";
      document.getElementById('deliveryWorker').textContent = "Tip a Delivery Driver";
    }
}
function valetButton() {
    var x = document.getElementById("valetArticle");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('valetWorker').textContent = "-Collapse-";
    } else {
      x.style.display = "none";
      document.getElementById('valetWorker').textContent = "Tip a Car Valet";
    }
}
function waiterButton() {
    var x = document.getElementById("waiterArticle");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('waiterWorker').textContent = "-Collapse-";
    } else {
      x.style.display = "none";
      document.getElementById('waiterWorker').textContent = "Tip Waitstaff";
    }
}