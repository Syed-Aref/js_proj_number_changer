var cnt = 0;

function printCnt(){
    document.getElementById('cntIndex').innerHTML = `${cnt}`; 
}

console.log(cnt);


document.getElementById('inc').addEventListener('click',incf);
document.getElementById('res').addEventListener('click',resf);
document.getElementById('dec').addEventListener('click',decf);
document.addEventListener('DOMContentLoaded', onReloadF);

function incf(e){
    cnt++;
    printCnt();
    console.log(cnt);
    storeInLocalStorage();
    e.preventDefault();
}

function resf(e){
    cnt = 0;
    printCnt();
    console.log(cnt);
    storeInLocalStorage();
    e.preventDefault();
}

function decf(e){
    cnt--;
    printCnt();
    console.log(cnt);
    storeInLocalStorage();
    e.preventDefault();
}

function storeInLocalStorage(){
    let counter;
    
    if (localStorage.getItem('counter') === null) counter = 0;
    else counter = JSON.parse(localStorage.getItem('counter'));

    counter = cnt;

    localStorage.setItem('counter', JSON.stringify(counter));

}

function onReloadF(){
    let counter;
    
    if (localStorage.getItem('counter') === null) counter = 0;
    else counter = JSON.parse(localStorage.getItem('counter'));

    cnt = counter;
    printCnt();
    console.log(cnt);
}

printCnt();