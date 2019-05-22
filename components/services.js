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
    } else {
      x.style.display = "none";
    }
}
function deliveryButton() {
    var x = document.getElementById("deliveryArticle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function valetButton() {
    var x = document.getElementById("valetArticle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function waiterButton() {
    var x = document.getElementById("waiterArticle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}