
// implement a simple blocking function that simulates a delay of 2 seconds before returing a message.
// then implement non-blocking version of the same function using setTimeout


// 1. Blocking Function
function blockingOrder() {
    const start = Date.now();
    while (Date.now() - start < 2000) {
        // 2 seconds ayuu sugayaa — restaurant-ka wuu joogi doonaa
    }
    return "Dalabkaagii waa diyaar yahay!";
}

console.log(blockingOrder()); // 2 sec sugaa — wax kale ma dhacaan intuu sugayo


// 2. Non-Blocking Function
function nonBlockingOrder(callback) {
    setTimeout(() => {
        const dalab = { id: 1, name: "Ice Coffee" }
        callback(dalab)
    }, 2000);
}

console.log("Dalabkaaga waa la qaatay, sug!") // Isla markiiba print garaa

nonBlockingOrder(function(dalab) {
    console.log(`Dalabkaagii waa diyaar yahay: ${dalab.name}`) // 2 sec kadib
});