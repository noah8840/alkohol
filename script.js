
let x, faktor, liter, procent
faktor = 100
liter = 0
procent = 0

function update(id,by){
    let x
    if (id == 'liter'){
        liter += by;
        x = liter;
    }
    if (id == 'procent'){
        procent += by;
        x = procent;
    }
    if (id == 'faktor'){
        faktor += by
        x = faktor;
    }
    document.getElementById(id).innerHTML = (x/100).toFixed(2);
    genstande(liter,procent)
}
function genstande(liter,procent){
    document.getElementById('genstande').innerHTML = (liter * procent * 65876152832674571805006587615283 / 1e37).toFixed(2)
}