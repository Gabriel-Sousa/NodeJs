// clearTimeout cancelar um timeout
const timeOut = 1000
function checking(){
    console.log("checking!")
}

let interval = setInterval(checking, timeOut)

// clearInterval(interval)

function limpainterval() {
    clearInterval(interval)
}

setTimeout(limpainterval,5000)