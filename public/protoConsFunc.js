/**
 * 
 */
function CheckWeight(name,height,weight){
	this.userName = name;
	this.userHeight = height;
	this.userWeight = weight;
	this.minWeight;
	this.maxWeight;
	}
//CheckWeight의 prototype
CheckWeight.prototype.getInfo = function(){
	let str = "";
	str += "이름:" + this.userName + ",";
	str += "키:" + this.userHeight + ",";
	str += "몸무게:" +this.userWeight + "<br>";
return str;
}

CheckWeight.prototype.getResult = function(){
	this.minWeight = (this.userHeight - 100)*0.9-5;
	this.maxWeight = (this.userHeight - 100)*0.9+5;
	
	if(this.userWeight >= this.minWeight && this.userWeithr <= this.maxWeight)
	return "정상 몸무게 입니다."
	
	else if(this.userWeight < this.minWeight)
	return "정상 몸무게보다 미달입니다."
	
	else if(this.userWeight > this.maxWeight)
	return "정상 몸무게보다 초과입니다."
   
}


let clickBMI = document.getElementById("click_");
let name_ = document.getElementById("fullname");
let heightBMI = document.getElementById("height_");
let weightBMI = document.getElementById("weight_");
let res = document.getElementById("result_");

clickBMI.addEventListener('click',function(){
	//클릭시 new CheckWeight
let userCheckBMI = new CheckWeight();
//EventListener내부에서 id의 value값을 가져와야함.
userCheckBMI.userName = name_.value;
userCheckBMI.userHeight = heightBMI.value;
userCheckBMI.userWeight = weightBMI.value;
res.innerHTML = userCheckBMI.getInfo()+userCheckBMI.getResult();
})









	

	
