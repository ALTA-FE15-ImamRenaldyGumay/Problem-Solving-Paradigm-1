function dragonOfLoowater (dragonHeads: number[], knight: number[]): number | string {
    dragonHeads.sort((a, b) => a-b) //urutkan kepala naga di dalam pengurutan menaik
    knight.sort((a, b)=> a - b)

    let totalHeight: number = 0

    for (let i: number = 0; i < dragonHeads.length; i++){
        if (i >= knight.length){
            return "Knight Fall"
        }

        if (dragonHeads[i] > knight[i]){
            return "Knight Fall"
        }

        totalHeight += knight[i]
    }
    return totalHeight
}

export default dragonOfLoowater