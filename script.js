

function passGen() {
	var chars = "abcdefghiklmnopqrstuvwxyz#@$!%ABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789";
	var PassLength = '';
    var randomstring = '';
    var passLength = prompt("How many characters would you like to have for your password?");
	for (var i=0; i < passLength; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.genPassWord.passField.value = randomstring;
}

function myFunction() {
    var copyText = document.getElementById("inputPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

 