//test.js
    function toStr(obj) {
        return (typeof obj == "string") ? obj : "" + obj;
    }


var sda = {
	id: "dsdasd",
	name: "dasdas",
	sme: {
		dasdas: "dasda",
		dasd: "adsda"
	}
}

var a = toStr(sda)

    console.log(a);