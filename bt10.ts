function removeFalsyProperties(obj: { [key: string]: any }): void {
    for (let key in obj) {
        if (!obj[key] ) {
            delete obj[key];
        }
    }
}

let obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a'
};

removeFalsyProperties(obj);
console.log(obj); 
