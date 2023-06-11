let a = 20;
let b =0;

let waitingata = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        resolve(30);
    },2000)
})

waitingata.then((data)=>{
    b=data;
    console.log(a+b);
})

