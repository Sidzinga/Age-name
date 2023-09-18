let arr = [
{ 
    name:"Sidzinga",
    age:"22",
}

,{ 
    name:"Gift",
age:"24"
},


{ 
    name:"Emily",
    age:"19"
},


{ 
    name:"Candice",
age:"19"
}

]


function  username(age){
    
    localStorage.setItem("people",JSON.stringify(arr))
let people = JSON.parse(localStorage.getItem('people'))


let result = []
for(let i= 0;i<people.length;i++){

    if(people[i].age === age){
      
       result.push(people[i])
       
    }
    
}  
console.log(result)

return result
}
username("19")

