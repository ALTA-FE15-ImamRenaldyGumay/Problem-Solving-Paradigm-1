// console.log("Problem 1 - Simple Equations")
function simpleEquations(A:number, B: number, C: number): number[] | string {
    for (let x: number = -10000; x <= 10000; x++) {
        for (let y: number = -10000; y<= 10000; y++){
            for (let z: number = -10000; z <= 10000; z++){
                if (x + y + z === A && x * y * z === B && x*x + y*y + z*z === C){
                    return [x, y, z]
                }
            }
        }     
    }
    return "No Solution"
}

export default simpleEquations;
// console.log(simpleEquations(6, 6, 14))