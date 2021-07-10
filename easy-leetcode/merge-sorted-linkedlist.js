/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
}

const insertAt = (list, ele) => {

    for( i=0;i<list.length; i++ ){
        
        if( ele < list[i] ){
            
        }
    }

}

 var mergeTwoLists = function(l1, l2) {

    l1.forEach(element => {
        console.log(element)

    });
    
};

l1 = [1,2,4], l2 = [1,3,4]

mergeTwoLists(l1, l2)