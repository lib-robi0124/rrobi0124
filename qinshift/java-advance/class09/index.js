function step1(callback) {
    setTimeout(() =>{
console.log("step 1 completed");
callback();
    }, 3000 );
}

function step2(callback) {
    setTimeout(() =>{
console.log("step 2 completed");
callback();
    }, 2000 );
}

function step3(callback) {
    setTimeout(() =>{
console.log("step 3 completed");
callback();
    }, 1000 );
}

function step4(callback) {
    setTimeout(() =>{
console.log("step 4 completed");
callback();
    }, 1000 );
}

function step5(callback) {
    setTimeout(() =>{
console.log("step 5 completed");
callback();
    }, 1000 );
}

function step6(callback) {
    setTimeout(() =>{
console.log("step 6 completed");
callback();
    }, 1000 );
}

function step7() {
    setTimeout(() =>{
console.log("step 7 completed");
    }, 1000 );
}





// step1();
// step2();
// step3();

// step1(() => {
//     step2();
//     step3();
// });
// step1(() => {
//     step2(() => {
//     step3();
//     });
// });
step1(() => {
    step2(() => {
    step3(() =>{
        step4(() => {
            step5(() => {
                step6(() => {
                    step7(() => {
                        console.log("Piramid of doom completed");
                        
                    })
                })
            })
        })
    })
    })
});


