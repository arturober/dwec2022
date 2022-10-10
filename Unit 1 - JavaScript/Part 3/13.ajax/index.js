fetch('http://arturober.com:5007/restaurants').then(
    resp => resp.json()
).then(json => console.log(json));