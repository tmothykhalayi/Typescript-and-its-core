// console.log("turtorial file");
// interface Admin {
//     id: number;
//     name: string;
//     email: string;
// }
// let admin:Admin ={
//     id: 1,
//     name: "John Doe",
//     email: "timothykhalayi@gmail.com"
// }
// console.log(admin);
// let Myname:string = "Timothy";
// let MyAge:number =25;
// let  myname:boolean =true;
// //challenge 
// let greetings:string ="hello ,you are learning typescript";
// let age :number =21;
// let isStudent:boolean =true ;

// let Mydetails:string ="my name is {Myname}, I am ${MyAge} years old and it is ${myname} that I am a student";
// console.log(Mydetails);
// let tax:number|string =0.5;

// let requestStatus: "pending" | "error" | "approved" = 'pending';
// const books = ['1984', 'Brave New world', 'The Great Gatsby', 'To Kill a Mockingbird'] ;
// let foundbook: string = "";
// for (let book of books){
//     if (book ==='1984'){
//         foundbook = book;
//         foundbook.length;
//     }
// }
// foundbook?.length;

//challenge 2
// let discount :number =0.2;

// let orderstatus:'processing'|'shipped'|'delivered' = 'processing'
// orderstatus ='shipped';

// let price: number[] = [100, 200, 300, 800];
// price.push(1000);
// let Car :{isElectric:boolean,model:string,year:number,name:string , brand:string}= {
//     isElectric:true,
//     model:"lexus",
//     year:2023,
//     name:"timothy",
//     brand:"toyota"
// };

// console.log(Car);
//functions
// function sayHi(name:string){
//     console.log('Hello , ${name.toUpperCase()}');
// }
// sayHi("Timothy");
//2.functions
// function calculateDiscount(price:number){
//     const hasDiscount:boolean =true;
//     if (hasDiscount){
//         return price*0.1;
//     }
// return price*0.2;
// }
// const finalDiscount = calculateDiscount(200);
// console.log(`The final discount is ${finalDiscount}`);

//3.function 
function addthreeNumbers(num1: number, num2: number, num3: number): number {
    return num1 + num2 + num3;
}
console.log(addthreeNumbers(5,6 ,20));