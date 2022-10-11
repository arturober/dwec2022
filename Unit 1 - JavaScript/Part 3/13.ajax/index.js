fetch('http://arturober.com:5007/restaurants')
.then(resp => resp.json())
.then(json => console.log(json));

/*
fetch(`${SERVER}/restaurants`, {
    method: 'POST',
    body: JSON.stringify(restaurant),
    headers: {
    'Content-Type': 'application/json'
    }
}).then(resp => {
    if(!resp.ok) throw new Error(resp.statusText);
    return resp.json(); // promise
}).then(respJSON => {
    // Put restaurant in HTML
}).catch(error => console.error(error));
*/
fetch('http://arturober.com:5007/restaurants', {
    method: 'DELETE'
})
.then(resp => {
    if(!resp.ok) throw new Error(resp.statusText);
    // OK Delete restaurant in HTML
});
/*

*/