import React from "react";

const dogs = {
    "message": {
        "affenpinscher": [],
        "african": [],
        "airedale": [],
        "akita": ["american", "japanese"],
    }
}

let dogArray = []

for (const dog in dogs.message) {
  if (dogs.message[dog].length === 0) {
    dogArray.push(dog)
  } else {
    dogs.message[dog].forEach(breed => dogArray.push(`${breed} ${dog}`))
  }
}

class Dogs extends React.Component {
 render() {
   console.log("Rendering Dogs")
   return (
     <div>
       <h1>Hello, Dogs!</h1>
       <ul className="dog-list">
         {dogArray.map(dog => <li>{dog}</li>)}
       </ul>
     </div>
     );
   } 
}

export default Dogs;
