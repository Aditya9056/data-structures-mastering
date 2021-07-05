const crud = (theObject, operation, optional) =>{
    
    switch( operation ){
        // Create
        case "create":
            Object.assign(theObject, optional )
            break

        // Read
        case "read":
            // console.log(typeof optional)
            console.log(theObject[optional])
            break
        
        // Update
        case "update":
            
            break

        // Delete
        case "delete":
            break
    }

    console.log(theObject)


    // Read
    // Delete
}


let theObject = {name : "Rajesh", city: "delhi"}

let newObj =  {name1 : "Shreya", city1 : "New York"}
let operation = "read"
let optional = "name"

// create
// crud(theObject, operation,  newObj)

// read
crud(theObject, operation,  "name")
