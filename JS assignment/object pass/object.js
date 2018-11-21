let mainobject = {
    name: "Anil",
    age: 20,
    address: {
        city: "Delhi",
        country: "India",
        phone: {
            number: 9000012312,
            extension: 011
        }
    }
}

function print() {
    document.getElementById("output").innerHTML = JSON.stringify(parse(mainobject));
    
}
function parse(obj) {
    let arr = [];
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object') {
            let objpushed = {};
            objpushed[key] = parse(obj[key]);
            arr.push(objpushed);
        }
        else {
            arr.push(key);
        }
    });
    return arr;
}

