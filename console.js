/*Archa*/

/*1.Square Each Element using array*/

// let array = [1,2,3,4,5];
// let sqr=0;

// for(let i of array){
//     sqr=i*i
//     console.log(sqr);
    
// }


/*2.Count Positive and Negative Numbers*/

// let arr = [1,2,3,4,5,-1,-2];
// let countPos=0,countNeg=0;

// for(let i of arr){
//     if(i>0){
//         countPos++
//     }else{
//         countNeg++
//     }
// }

// console.log(`Count of Positive Number ${countPos}`);
// console.log(`Count of Negative Number ${countNeg}`);

/*Chandana*/

/*1)Write a program to move all zeros in an array to the end while maintaining the relative order of other elements.*/




/*2)Write a program to check if an array is the same when reversed.*/

// let arr1 = [1,3,1];
// let arr2 = [];

// for(i=arr1.length-1;i>=0;i--){
//     arr2.push(arr1[i])
// }
// console.log(arr1);
// console.log(arr2);

// if(arr1==arr2){
//     console.log(`Array is same when reverse`);
// }else{
//     console.log(`Array is not same when reversed`);
// }


/*Akhila*/

/* 1.Write a program to Count the number of even and odd numbers*/

// let arr = [1,2,3,4,5,6,7,8,9,10,22],countEven=0,countOdd=0;

// for (let i of arr){
//     if(i%2==0){
//         countEven++;
//     }else{
//         countOdd++
//     }
// }

// console.log(`Count of Even Numbers are ${countEven}`);
// console.log(`Count of Odd Numbers are ${countOdd}`);


/*2.Write a program to Remove the first element from an array.*/

// let fruits = ["Mango","Lemon","Orange","Apple"];

// fruits.shift();

// console.log(fruits);


/*Fazil*/


/*1.You are given an object salaries where the keys are employee names and the values are their respective salaries. Write a code snippet that will increase each employee's salary by 10% and then print the updated salary of each employee.*/

/*2.Write a program that prints the multiplication table for numbers 1 through 10.*/

// for(let i=1;i<=10;i++){
//     for(j=1;j<=10;j++){
//     console.log(`${i}x${j} = ${i*j}`);
//    }
//    console.log(` `);
// }


/*1)Let array=[1,2,5,1,6,3,7,8,8,5,4,4,1,5,2,4]
Count the repeating elements and make a new array...
Expected output :
new array=[3,2,3,2,3]*/



/*2.Find the sum of squares of elements in an array?*/

// let arr = [1,2,3,4,5],sum=0;
// let sqr;

// for(let i of arr){
//     sqr=i*i;
//     sum =sum+sqr;
    
// }
// console.log(`Sqr = ${sqr} and Sum = ${sum}`);


//Sreehari


/*1.Check if All Elements in an Array are Unique.*/
/*2.Find the Second Largest Number in an Array*/


/*Yazar*/

/* 1.Cumulative Sums
Given an array input = [3, 7, 2], create a new array where each element is the cumulative sum of elements up to that index in the original array.
Expected Output:

Array: [3, 10, 12]


// let arr = [3,7,2];
// let sum=0;
// let cummulative=[];



// for(let i of arr ){
//     sum=sum+i;
//     cummulative.push(sum)
    
// }
// console.log(cummulative);


2.Find the sum of squares of elements in an array?*/

// let arr = [1,2,3,4,5],sum=0;
// let sqr;

// for(let i of arr){
//     sqr=i*i;
//     sum =sum+sqr;
    
// }
// console.log(`Sqr = ${sqr} and Sum = ${sum}`);



//Abijith

/*1.Create an array of natural number upto 10  and manipulate the array with its each element multiplied by the total product of array.*/


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let multiple=1;
// let newArr=[];

// for(let i of arr){
//     multiple*=i;
// }
// console.log(multiple);

// for(i of arr){
//     let newMultiple=i*multiple;
//     newArr.push(newMultiple)
// }

// console.log(newArr);



/*2.create a array of natural numbers upto 10 and create a new array having elements sum, product, avg of existing array.*/

// let array16=[1,2,3,4,5,6,7,8,9,10];
// let sumN=0;
// let productN=1;
// array16New=[]


// for(let i of array16){
//     sumN+=i;
//     productN*=i;
   
    
    
// }
// let avg=(sumN/10);
// array16New.push(sumN,productN,avg)
// console.log(array16New);


//Preizt

/*1.Write a program to replace all odd numbers with ‘*’.*/

// arr=[1,2,3,4,5,6,7,8,9,10];
// arrNew=[];

// for( let i of arr17){
//     if(i%2!=0){
//         i='*';
//         arr17New.push(i)
//     }
//     else{
//         arr17New.push(i)
      
//     }
// }
// console.log(array17New);



/*2.Write a program to find the sum of all the odd numbers in an array.*/

// let arr=[1,2,3,4,5,6,7,8,9,10]
// sumOdd=0;
// for(let i of arr){
//     if(i%2!=0){
//         sumOdd+=i
//     }
// }
// console.log(sumOdd)

//SreePriya

/*1. To create a new array where each element is double the value of the original array's elements.*/

// let arr = [1,2,3,4,5];
// let newArr=[]

// for (let i of arr){
//      i=i*i;
//      newArr.push(i);
// }

// console.log(newArr);


/*2.To create a new array by replacing all negative numbers with zero*/


// let arr=[1,-2,3,-4,5,-6]
// let arrNew=[]
// for(let i of arr){
//     if(i<=0){
//         i=0;
//         arrNew.push(i)
//     }
//     else{
//         arrNew.push(i)
//     }
// }
// console.log(arr);

// console.log(arrNew);

//Sahad
/*1.WAP to find last element in an array*/

// let arr = [1,2,3,4,5,6,7,8,9,20]

// let lastArr = arr.pop();

// console.log(lastArr);


/*2. WAP to swap the first and last element in an array*/


// let arr = [1,2,3,4,5];

// let temp = arr[0]; 
// arr[0] = arr[arr.length - 1]; 
// arr[arr.length - 1] = temp;

// console.log(arr);



