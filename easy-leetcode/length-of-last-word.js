var lengthOfLastWord = function(s) {
    let length = 0
    
    if( s[0] === " " && s[s.length-1] === " ") return 0
    
    for( let i=s.length -1; i>-1; i-- ){
        
        if( s[i] ===" ") {
            
            if( i !== s.length-1 ){
                break
            }
        }
        
        length++
    }
    
    return length>0 ? length : 0
};