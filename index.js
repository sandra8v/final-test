let person= int(prompt('Enter the number of person: '));
let pizza= str(person/8);
console.log('Number of pizza is '+pizza);


let temp= prompt('Temperature today: ');
if (temp<-12 && temp>40){
    console.log("Can't live");
} else if (temp>=-12 && temp<0) {
    console.log('Extra Cold');
} else if (temp>=0 && temp<15) {
        console.log('Cold');
} else if (temp>=15 && temp<25) {
        console.log('Cool');
} else if (temp>=25 && temp<40) {
    console.log('Hot');
}
    

for( var i=0; i<10; i++){
    console.log("What's your name?");
}


let x = myFunction(p1, p2); 
function sumCalculator(p1, p2) {
    return p1 + p2; }


var objectStudent = { 
    name : "David",
    job : "Coder",
    address: "America",
    age: "40",
 };

 
let items=['Jeans','T-Shirt','Shorts']
let k=0;
while(k<1){
    let ans= prompt('What is your choice \n Create \n Read \n Update \n Delete');
    if(ans=='Create'){
        temp=prompt('Items you want to add');
        items.push(temp);
        console.log(items);

    } else if (ans=='Read'){
        console.log(items);
    } else if (ans=='Update'){
        temp=Number(prompt('Which items you want to change'));
        ans=prompt('Which items you want to add');
        items[temp]=ans;
        console.log(items);
    } else if(ans='Delete'){
        temp=prompt('Which one you want to delete');
        
    }
}

