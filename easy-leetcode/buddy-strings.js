/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

 Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this.join('');
  }

 var buddyStrings = function(s, goal) {

    let swapHappen = false
    
    for( i=0; i<s.length; i++ ){

        if( s[i] !== goal[i] ){

            for( j=i+1; j<s.length; j++ ){
                
                // check if one swap can make strings equal
                if( goal[i] === s[j] ){

                    // console.log("changing", s)
                    s = s.split('');
                    s = s.swap(j, i)

                    // console.log("changing", s)

                    return (s === goal) ? true : false
                }

            }    
        }
        
    }

    return (s === goal) && swapHappen ? true : false
    
};

let s = "ab", goal = "ab"

console.log(buddyStrings(s,goal))