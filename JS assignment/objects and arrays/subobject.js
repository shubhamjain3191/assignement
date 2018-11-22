let a = [
    {
        field1: "ABC",
        field2: "LMN",
        field3: 10,
        field4: 20,
    },
    {
        field1: "PQR",
        field2: "LMN",
        field3: 20,
        field4: 20,
    },
    {
        field1: "ABC",
        field2: "LMN",
        field3: 5,
        field4: 40,
    }
];
for (i in a) {
    //pick(a[i],"field1","field2","field3");
    // pick(a[i], ["field1", "field2", "field3"])
    //pick(a[i], "field1", "field2", {sum: (obj) => obj.field3 + obj.field4});
    pick(a[i], ["field1",
        "field2", { sum: (obj) => obj.field3 + obj.field4 }])


}
function pick(obj, ...rest) {
    let newobj = {};
    for (i in rest) {
        if (rest[i].constructor === Array) {
            let newarr = [...rest[i]];
            for (j in newarr) {
                if (typeof newarr[j] === 'object') {
                    let a = Object.keys(newarr[j]);
                    newobj[a] = newarr[j][a](obj);
                }
                else {
                    newobj[newarr[j]] = obj[newarr[j]];

                }
            }
        }
        else if (typeof rest[i] === 'object') {
            newobj[Object.keys(rest[i])] = rest[i].sum(obj);

        }
        else {
            newobj[rest[i]] = obj[rest[i]];

        }
    }
    console.log(newobj)
}
