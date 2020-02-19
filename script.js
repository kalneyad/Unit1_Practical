var numbers = [-30, 14, 66, 21, 72, -4];
var texts = [];

function mynumber(number) {
  var that = this;
  this.num = number;
  this.originalnum = number;
  this.element = document.createElement("div");
  this.element.style.height = "50px";
  this.element.style.width = "400px";
  this.element.style.display = "flex";
  this.element.style.alignItems = "center";
  this.element.style.justifyContent = "center";
  this.element.style.textAlign = "center";
  this.element.style.fontSize = "18px";
  if(this.num < 0)
  {
    this.element.innerHTML = "The number is " + this.num + " and The number is below 0";
  }
  else if(this.num > 50)
  {
    this.element.innerHTML = "The number is " + this.num + " and The number is above 50";
  }
  else if(this.num == 14)
  {
    this.element.innerHTML = "The number is " + this.num + " and The number equals 14";
  }
  else
  {
    this.element.innerHTML = "The number is " + this.num;
  }
  
  this.element.addEventListener("click", function() { that.increment();});
  document.body.appendChild(this.element);
}
mynumber.prototype.increment = function(){
  this.num = this.num + 1;
  if(this.originalnum < 0)
  {
    this.element.innerHTML = "The number is " + this.num + " and The number is below 0";
  }
  else if(this.originalnum > 50)
  {
    this.element.innerHTML = "The number is " + this.num + " and The number is above 50";
  }
  else if(this.originalnum == 14)
  {
    this.element.innerHTML = "The number is " + this.num + " and The number equals 14";
  }
  else
  {
    this.element.innerHTML = "The number is " + this.num;
  }
}

for (var i = 0; i < numbers.length; i++) 
{
  texts.push( new mynumber(numbers[i] ) );
}