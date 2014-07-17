function putValue(val) {
	if(document.getElementById("display").value == 0) // avoid invalid numbers like 01
	{
		document.getElementById("display").value = val;
	}
	else if (document.getElementById("oper").value != "" && document.getElementById("oper").value.length < 2){ // operation selected, so refresh display
		document.getElementById("display").value = val;
		document.getElementById("oper").value += ";";
	}
	else
	{
		document.getElementById("display").value += val; 
	}	
}

function reset() {
	document.getElementById("display").value = "";
	document.getElementById("oper").value = "";
	document.getElementById("total").value = ""; 	
}

function delC() {
	var value = document.getElementById("display").value;
	var newValue = value / 10;
	newValue = Math.floor(newValue)
	document.getElementById("display").value = newValue;	
}

function putOper(val) {
	document.getElementById("oper").value = val;
	document.getElementById("total").value = document.getElementById("display").value;	
}

function sum() {
	var oper = document.getElementById("oper").value;
	
	if(oper == null) // no operation to perform
	{
		return;
	}
	var total = parseFloat(document.getElementById("total").value);
	if(total == null) // no pervious total to work with
	{
		return;
	}

	var oldValue = parseFloat(document.getElementById("display").value);
	var newValue = 0;
	switch(oper) {
    case '+;':
        newValue = oldValue + total;
        console.log("using + " + newValue);
        break;
    case '-;':
        newValue = total - oldValue;
        break;
    case '*;': 
		newValue = oldValue * total;
        break;
    case '/;':
        newValue = total / oldValue;
        break;
	}
	 document.getElementById("total").value = newValue;
    document.getElementById("display").value = newValue;        
}
