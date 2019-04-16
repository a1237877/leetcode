// 位移运算(右移)
// 针对二进制位 0000 1011
// 0000 0101
// console.log(11 >> 1);
// 00001 0110
// 利用位移运算 可以实现 /2  *2  的效果
// console.log(11 << 1);

// 猛哥给蜗牛买香蕉
// N piles of bananas   每挂香蕉上的香蕉数不一样
// [3,6,7,11],H小时内吃完  一小时吃几根香蕉  
// 一小时内吃mid根香蕉,一次只吃一把，一小时最少吃几根可以在H小时内吃完
/**
 * @desc 最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles,H){
    let lo = 1;
    let hi = Math.max(...piles);
    while(lo<=hi){
        // lo++;
        // let mid = lo +((hi-lo)>>1)
        let mid = (lo + hi) /2;
        if(catEatAllBananas(piles,H,mid))
        {
            hi = mid - 1; 
        }else{
            //没有吃完  吃完？
            // 小的一半值没有意思
            lo = mid +1;
        }
    }
    return lo;

}
/**
 * @desc 判断能否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function catEatAllBananas(piles,H,mid){
    let h = 0;
    for(let pile of piles){
        h += Math.ceil(pile/mid)
    }
    return h<=H;
}
let piles = [3,6,7,11];
// console.log(catEatAllBananas(piles,8,6))
console.log(minEatingSpeed(piles,8))
// 吃完香蕉目标？
// H小时内吃完
// 最小的一个数？