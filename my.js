
function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbzgOYpkqtvs0GAEECQO0KW7jY32wWOPqXmA9LLvzdQES-Kiuu1EUAaBd4YzNdeGyMPQ/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}


function addGS() {
    const url = "https://script.google.com/macros/s/AKfycbzgOYpkqtvs0GAEECQO0KW7jY32wWOPqXmA9LLvzdQES-Kiuu1EUAaBd4YzNdeGyMPQ/exec";

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached        
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ First:"Arion", Phone Numbers:"525-056-8540", Last:"Ismaili" }) // body data type must match "Content-Type" header
    });
}

document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", testGS);
