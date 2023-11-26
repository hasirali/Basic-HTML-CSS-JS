function validate() {
    if (myform.name.value == "") {
        alert("enter a name");
    }
    if (document.myform.email.value == "") {
        alert("enter a email");
    }
    if (document.myform.zip.value == "" || isNaN(document.myform.zip.value) || document.myform.zip.value == "6") {
        alert("enter a value of zip in numeric aof 6 digit");
    }
    // if(isNaN(document.myform.zip.value)){
    //     alert('so blod')
    // } 
    // if(document.myform.zip.value!="6"){
    //     alert("enter 6 digit number")
    // }
    if (document.myform.country.value == "-1") {
        alert("select a country ")
    }

    var m = (myform.email.value);
    var len = myform.email.value.length;
    var i, flag1, flag2; flag1 = 0; flag2 = 0;
    alert("Your Email: " + m + " Length " + len);
    for (i = 0; i < len; i++) {
        if (m.charAt(i) == '@') { flag1 = 1; break; }
    }
    for (i = 0; i < len; i++) {
        if (m.charAt(i) == '.') { flag2 = 1; break; }
    }
    if (flag1 != 1 || flag2 != 1) {
        alert("Not a valid email! Try again.!");
    }
}