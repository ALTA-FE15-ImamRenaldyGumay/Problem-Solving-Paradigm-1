console.log("Problem 1 - Simple Equations")
function simpleEquations(A:number, B: number, C: number): number[] | string {
    for (let x: number = -100; x <= 100; x++) {
        for (let y: number = -100; y<= 100; y++){
            for (let z: number = -100; z <= 100; z++){
                if (x + y + z === A && x * y * z === B && x*x + y*y + z*z === C){
                    return [x, y, z]
                }
            }
        }     
    }
    return "No Solution"
}

// export default simpleEquations;
console.log(simpleEquations(6, 6, 14))