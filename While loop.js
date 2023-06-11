//While loop //CAn get stuck in infini
const whileloop=()=>{
    // let j=1;
    // while(j<=5){
    //     console.log('while loop ',j);
    //     j++;
    // } 
    let obj = {
        name : 'ayan',
        number: 999
    }
    console.log("this",this.obj)
    
}

whileloop()


let foods = ['Biryani', 'Chana Chat', 'pizza'];

const accessfoods=()=>{
    let j=0
    while(j<foods.length){
        console.log('while loop ', foods[j]);
        j++; //without this statement we will get infinite loop
    }
}

accessfoods()

//do while loop
let j = 1
do{
    console.log("at least run time = ",j);
    j++;
} while(j<=2) //condition false already



function code(){
    let a = '1'
    let b = +a
    console.log(b , typeof b)
}

code()

const naming=()=>{
    let Name = "Ayaan"
let string1 = '';
for(let i = 4;i>=0;i--){
    string1 = string1 +  Name[i].toLowerCase()
}
console.log(string1)

}

naming()

const str=()=>{
string2 = "a";
empty = '';
let is_invalid= false
if(string2.length>100 || string2.length<2){
    is_invalid = true
}
if(!is_invalid){

    for(let i in string2){
        if(i%2==0){
            empty = empty + string2[i]
        } 
    }
}
console.log(empty , "updated string")
if(is_invalid){
    console.log( "Invalid character")

}
}

str()

const diff=()=>{
    let string3 = "Ayaan"
    let string4 = "Shaikh"
    string3 = string3.toLowerCase()
    string4 = string4.toLowerCase()
    let UniqueChar = ''
    for(i=0;i<string3.length;i++){
        if(!string4.includes(string3[i])){
            UniqueChar = UniqueChar + string3[i]

        }
    
    

    }

    for(i=0;i<string4.length;i++){
        if(!string3.includes(string4[i])){
            UniqueChar = UniqueChar + string4[i]

        }
    
    

    }
console.log(UniqueChar,"unique")

}


diff()




