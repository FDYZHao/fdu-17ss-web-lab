var select=document.getElementById("select");
var input1=document.getElementById("input1");
var Columns=document.getElementById("Columns");
var bt=document.getElementById("commit");
var newTable=document.getElementById("newTable");
var table=document.getElementById("table");
var attri=[];
var nTables=[];
document.getElementById("wanning").style.display="none";
document.getElementById("commit").style.display="none";
select.onchange=function() {
	let select1 = select.selectedIndex;
	switch (select1) {
		case 0:
			document.getElementById("wanning").style.display="none";
			input1.className = "hide";
			break;
		case 1:
			document.getElementById("wanning").style.display="none";
			input1.className = "input1";
			break;
		case 2:
			document.getElementById("wanning").style.display="none";
			if (attri[0] != null) {
				document.getElementById("TableName").style.display = "none";
				document.getElementById("Columns").style.display = "none";
				for (let i = 0; i < attri.length; i++) {
					attri[i].placeholder = attri[i].value;
					attri[i].value = "";
					attri[i].style.display = "inline";
				}
				bt.style.display = "inline";
			}
			break;
		case 3:
			document.getElementById("wanning").style.display="none";
			if (attri[0] != null) {
					document.getElementById("TableName").style.display = "none";
					document.getElementById("Columns").style.display = "none";
					for (let i = 0; i < attri.length; i++) {
						attri[i].placeholder = attri[i].value;
						attri[i].value = "";
						attri[i].style.display = "inline";
					}
			}
			break;
		case 4:
			document.getElementById("wanning").style.display="inline";
				document.getElementById("TableName").style.display = "none";
				document.getElementById("Columns").style.display = "none";
			bt.style.display="inline";
			if (attri[0] != null) {
				for (let i = 0; i < attri.length; i++) {
					attri[i].style.display = "none";
				}
			}
			break;
	}
}
Columns.onchange=function(){
	let num=parseInt(Columns.value);
	if(num>0){
	document.getElementById("content").style.display="inline";
	document.getElementById("commit").style.display="inline";
	create(num);
}
else{
	document.getElementById("content").style.display="none";
	document.getElementById("commit").style.display="none";
}
}
function create(num){
	while(content.hasChildNodes()){
	content.removeChild(content.firstChild);
}
	for(let i=0;i<num;i++){	
	attri[i]=document.createElement("input");
	 attri[i].type = "text";
	attri[i].placeholder = "Attribute";
      content.appendChild(attri[i]);

}
}
bt.onclick=function() {
	switch (select.selectedIndex) {
		case 1:
			let TableName = document.getElementById("TableName").value;
			addoption(TableName);
			nTables[TableName] = document.createElement("table");
			let thead = document.createElement("thead");
			for (let i = 0; i < parseInt(Columns.value); i++) {
				let th = document.createElement("th");
				th.innerHTML = attri[i].value;
				thead.appendChild(th);
			}
			nTables[TableName].appendChild(thead);
			createTable(nTables[TableName]);
			break;
		case 2:
			let tr = document.createElement("tr");
			for (let i = 0; i < nTables[newTable.value].getElementsByTagName("th").length; i++) {
				let td = document.createElement("td");
				td.innerHTML = attri[i].value;
				tr.appendChild(td);
			}
			nTables[newTable.value].appendChild(tr);
			create(nTables[newTable.value].getElementsByTagName("th").length);
			break;
		case 3:
			let trs = nTables[newTable.value].getElementsByTagName("tr");
			if (trs.length === 0) {
				break;
			}
			for (let i = 0; i < trs.length; i++) {
				let judge = true;
				let tds = trs[i].getElementsByTagName("td");
				for (let j = 0; j < tds.length; j++) {
					if (tds[j].innerHTML !== attri[j].value) {
						judge = false;
					}
				}
				if (judge) {
					nTables[newTable.value].removeChild(trs[i]);
					create(nTables[newTable.value].getElementsByTagName("th").length);
				}
			}
			create(nTables[newTable.value].getElementsByTagName("th").length);
			break;
		case 4:
		delopt();
			break;
	}
}
function addoption(optValue){
	let option=document.createElement("option");
	option.innerHTML=optValue;
	option.selected=true;
	newTable.appendChild(option);
}
function createTable(table1){
	if(table.firstChild){
		table.removeChild(table.firstChild);
	}
	if(table.value=="select"){
		return;
	}
	table.appendChild(table1);
}
function delopt() {
	let options=newTable.getElementsByTagName("option");
	for (let i = 0; i < options.length; i++) {
		let option = options[i];
		if (option.selected) {
			newTable.removeChild(option);
			nTables[option.value] = "";
			if (newTable.getElementsByTagName("option")[1]) {
				newTable.getElementsByTagName("option")[1].selected = true;
				createTable(nTables[select2.getElementsByTagName("option")[1].value]);
			} else
				createTable(nTables["select"]);
			return;
		}
	}
}