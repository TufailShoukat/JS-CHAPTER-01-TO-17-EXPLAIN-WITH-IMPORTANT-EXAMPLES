
// // ( Chapter No:1)Alert!!!!!
// //An alert is a box that pops up to give the user a message. Here is some examples Of Alert!!!!!!!!
// alert("Hello Everyone!");
// alert("Thanks For Your Input!");
// alert("Welome!");

// //Note Semicolon symbol (;)show That any Statement end here



// //( Chapter No:2)Variables for Strings!!!!!!!!!
// // An variable is Store any value value. Here is some examples Of Variables of Strings!!!!!!!!
// //    var is keyword  of variable for use!!!!!!!
// var massage = " It is My First Page About JS! "; 
// alert(massage);

// var studentName = "Ali,Zain,Imram, Moiz";
// alert(studentName)

// var city = "Karachi";
// alert(city)

// //Note here I stored values in variables
// //IMPORTANT!!!!!!!
// //after the var we give to variable any name 
// //after the name we give the Symbol of equal (=) 
// // = Show that now we are going to assign any value in variable



// // ( Chapter No:3) Variables for Numbers!!!!!!!!1
// // A string isn't the only thing you can assign to a variable. You can also assign a number.
// // Here some  Examples of vriable for number!!!!!

// // var weight = 12;
// // document.write(weight);

// //  var num1 = 13;
// //  var num2 = 12;
// //  document.write(num1 + num2);


// var  date = 14;
// document.write(date);

// // // number can not write  in double quotes Because  it is interger
// // any value if in  double quotes it is called  (String); 

// //(Chapter No:4)Variable Names legal and Illegal!!!!!!!!!
// // Here are the rest of the rules:
// // A variable name can't contain any spaces.
// // A variable name can contain only letters, numbers, dollar signs, and underscores.
// // Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
// // For example, userAlert and myVar are legal.
// // Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a
// // Rose. If you assign the string "Floribundas" to the variable rose, and then ask JavaScript
// // for the value assigned to Rose, you'll come up empty.
// // I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or
// // two (or three) in the middle if the name is formed by more than one word. A camelCase
// // name begins in lower case. If there's more than one word in the name, each subsequent
// // word gets an initial cap, creating a hump. If you form a variable name with only one
// // word, like response, there's no hump. It's a camel that's out of food. Please adopt the
// // camelCase!!!!!!!


// // Here  Are Some (5) of legal names for  variable name....
//   // (i) var firstName;
//   // (ii) var $name;
//   // (ii) var num1;
//   // (iv) var stuentRollNumber;
//   // (v) var _$1;


// // Here  Are Some (5) of illegal names for  variable name....
//   // (i) var Fir&stname;
//   // (ii) var 12&4;
//   // (ii) var %^8name;
//   // (iv) var 11num;
//   // (v) var )($);




// //( chapter No:5)// Math expressions:Familiar operators!!!!/////
// // Wherever you can use a number, you can use a math expression.
// // Here some  Examples of it

// // Symbol of Math expressions:Familiar operators
// // //  (i) Add +
// // //  (ii) sub -
// // //  (iii) mul *
// // //  (iv)div /
// // //  (v)Modulus %

// //USE
// // ( 1= ADDATION+)!!!!!!!!!!
// var weight = 40;
// var weightNew = 17;
// var add  = weight  +    weightNew
// alert(add);


// // ( 2= SUB-)!!!!!!!!!!
//  var total = 4567;
//  var discount = 567;
//  var  sum  = total - discount
//  alert(sum);


// // // ( 3= MULTYPLE *)!!!!!!!!!!
//  var num1  = 7;
//  var  num2 = 9;
//  var  tableOfSeven  = num1 * num2
//  alert(tableOfSeven);


// // ( 4= DIVIEDE /)!!!!!!!!!!
//  var money = 150;
//  var child = 10;
//  var  divideMoney  = money / child
//  alert(divideMoney);



// // // ( 5= MODULUS %)!!!!!!!!!!
// // // % is the modulus operator. It doesn't give you the result of dividing one number by
// // another. It gives you the remainder when the division is executed.
//  var money = 17;
//  var child = 5;
//  var  divideMoney  = money % child
//  alert(divideMoney);
// //  //here two Modulus






// //( Chapter No: 6)// Math expressions: UnFamiliar operators..
// //Note Important!!!

//  //Increcrement+
//  //(num++ Post Increment)....First Value Assign after do value Increment!!
//  //(++num Pre Incremnent)....First Value do Incremnent after value Assign!!

//  //Decrement-
//  //(num-- Post Decrement)....First Value do  Assign after do value Decremnet!!
//  //(--num Pre  Decrement)....First Value Increment after value Assign!!


// //  (1) Examples of Increement+
//     // Post Incremnent
//     var num1  = 13;
//     var num2 = 20
//     var postIncrement  = num1 + num2 + num1++ - num1;
//     //   //                  13  +   20  +  13   -   14 
//     //  //Here  Total is (32)                      
//     alert(postIncrement);



//     // // Pre Incremnent
//     var value1 = 36;
//     var value2 =  24;
//     var PreIncremnent =  value1 + value2 - ++value2 + ++value1 - value2;
//     //                   36    +   24   -   25     +   37     -     25
//     //  //Here  Total is (47)
//     alert (PreIncremnent)



//    // (2) Examples of Decrement-
//      //Post Decremnet
       
//      var num3 = 22;
//      var num4  = 8;
//      var  postDecrement = num4-- + num3 - num4 + num3-- + num4 - num3;
//      //                    8     +  22  -  7   +  22   +  7   -  21  
//      //Here  Total is (31)     
//      alert(postDecrement)




// //     // Pre Decrement
//     var  value3 = 18;
//     var   value4 = 15;
//     var  preDecrement = --value4 + value3 - --value3 + value4 + --value4 - --value3;
//             //           14      +  18    -    17    +   14   +     13     -   16
//  //Here  Total is (26)
//  alert(preDecrement)


//(

//( Chapter No: 7)// Math expressions:Eliminating ambiguity )
//Some Example Of  Math expressions:Eliminating ambiguity

// Here is aslo Use Rule Of (DMAS)
// var  totalMoney = 13 +5 *4
//  According to DMAS rule  So first do multipe 5*4 =20 aftar 20+ 13 = 33  So 33 is Answer 
//   alert(totalMoney) 

  //But we Want do  Answer  come that as  We want
// // so use the Round brakest ()
// var  totalMoney = (13+5) *4
// //   So here is Answer is 72 first do + and after it *
// alert(totalMoney);

// var totalCost = 4 + 4 * 5/25-3;
// //Same DMAS rule
// alert(totalCost);



// //( Chapter No: 8)// Concatenating text strings)
// // Example
// //  var studentName = "Ali";
// //  console.log ("1st Postion Taker"+ studentName + "Role No:3464");
// //  if you want space between them use method following
// +"      "
// var usenName = "Saad";
//  console.log ("Sir"+ "  "+ usenName+ "  "  + "is Good Teacher." );


//( Chapter No: 9)// Propmts )
// A prompt box asks the user for some information and provides a response field for her
// answer.

// Example

// // var name = prompt("What is Your Name?","Tufail");

// var question = prompt("What is Your Gender?");
// document.write(question)



// //( Chapter No: 10)// if statements)
// Suppose you code a prompt that asks, "Which is biggest city of pakistan?"
// // If the user answers correctly, you display an alert congratulating him.
// example
// var question = prompt("Which is biggest city of pakistan?");
//  if(question== "karachi"){
//     document.write("Correct!");
//  }



// //( Chapter No: 11)// Comparison operators)
//Note//Imprtant
 // == just check the value
 // === check the value and datatype
// > is greater than
// < is less than
// >= is greater than or equal to
// <= is less than or equal to

//Some Example!!!

//CHeck just Value here!
//   var num5 = 10;
//   var  num6 = "10"
//   if(num1==num2){
//     document.write(" Value match hain  ")
//   }


//Check Value and datatype!
// var num7  = 19;
// var num8 = "19"
// if(num7===num8){
//     document.write("value and dataTppe match nhai hai show nahi ho ga")
// }


//  var greaterNumber = prompt("Enter the Number Here!");
//  if(greaterNumber > 10 ){
//     document.write("Correct!")
//  }

// var  lessNumber = prompt("Enter the Number here!");
// if(lessNumber < 10){
//     document.write("Correct!")
// }

// var  greaterThanEqual = prompt("Enter the Number here!");
// if( greaterThanEqual >= 50){
//     document.write("Correct!")
// }


// var  lessThanEqual = prompt("Enter the Number here!");
// if( lessThanEqual <= 50){
//     document.write("Correct!")
// }

 // //( Chapter No: 12)// if...else and else if statements )


//Logicexample with IF and else together!!!!!!!1
// var input1 = prompt("Enter The Email Here!");
// var input2  = prompt("Enter The Password Here! ");
// if (input1 == "tufail" && input2== "1122"){
//     document.write("<h1> Login Successfully Here!</h1>")
// }
// else{
//    document.write ("<h1> Sorry! Invalid Email Or Password.!               </h1>")
// }

// //Logicexample with IF else & if else together!!!!!!!2
// check the Grade here!!!!!
//  var marks = prompt("Enter The Marks Here!");
//  if( marks >=1000 ){
//     document.write("<h1>Proud Of YourSelf Your Grade is (A+ ).</h1>")

//  }
//  else if (marks >=800){
//     document.write(" <h1> Your Grade is (A).</h1>")
//  }

//  else if (marks >=700){
//     document.write(" <h1> Your Grade is (B).</h1>")
//  }


//  else if (marks >=600){
//     document.write(" <h1> Your Grade is (C).</h1>")
//  }

//  else if (marks >=400){
//     document.write(" <h1> Your Grade is (D).</h1>")
//  }

//  else if (marks >=200){
//     document.write(" <h1> Your Grade is (E).</h1>")
//  }
//  else{
//     document.write("<h1>Sorry! You are fail  Best Of Luck Next For Time</h1>.")
//  }

// //CHECK THE MONTH NAME (3)

//   var month = prompt(" Enter the Just  Month Number  And Check  The Name of Month'Year.");
//   if (month == 1 ) {
//     document.write("<h1><u>JANURAY</u> IS (1)FIRST MONTH OF YRAR.</h1>");



//   }
//  else if ( month == 2){
//     document.write("<h1><u>FEBURAY</u> IS (2)SECOND MONTH OF YRAR.</h1>");
//  }

//  else if ( month == 3 )
//  {
//     document.write("<h1><u>MARACH</u> IS (3)THIRD MONTH OF YRAR.<H1>");
//  }

//  else if ( month == 4 )
//  {
//     document.write("<h1><u>APRAIL</u> IS (4)FOURTH MONTH OF YRAR.<H1>");
//  }


//  else if ( month == 5 )
//  {
//     document.write("<h1><u>MAY </u> IS (5)FIFTH MONTH OF YRAR.</H1>");
//  }

//  else if ( month == 6 )
//  {
//     document.write("<h1><u>JUNE</u> IS (6)SIXTH MONTH OF YRAR.<H1>");
//  }

//  else if ( month == 7 )
//  {
//     document.write("<h1><u>JULY</u> IS (7)SEVENTH MONTH OF YRAR.<H1>");
//  }

//  else if ( month == 8 )
//  {
//     document.write("<h1><u>AUGUST</u> IS (8)EIGTH MONTH OF YRAR.<H1>");
//  }


//  else if ( month == 9 )
//  {
//     document.write("<h1><u>SETEMBER</u> IS (9)NINITH MONTH OF YRAR<H1>");
//  }


//  else if ( month == 10 )
//  {
//     document.write("<h1><u>OCTERBER</u> IS (7)TENTH MONTH OF YRAR<H1>");
//  }

//  else if ( month == 11 )
//  {
//     document.write("<h1><u>NOVEMBER</u> IS (7)ELEVENTH MONTH OF YRAR<H1>")
//  }

//  else if ( month == 12 )
//  {
//     document.write("<h1><u>DECEMBER</u> IS (7) 'LAST (TWELEVE)'MONTH OF YRAR<H1>")
//  }



// //( Chapter No: 13)// Testing sets of conditions!!!!!!!!11
//Example!!!!1
//   var gender= prompt("Enter the gender  here!");
//   var education= prompt("Enter the Eduction here!");
//   var grade= prompt("Enter the Grade here of inter!");
//   var city= prompt("Enter the city here!");
  

//   if( gender=="male" &&  education=="phd" ||grade=="A+" && city=="karachi" ){
//     document.write("<h1> Congrations!Your Are Selected.</h1> ")
//   }
//   else{
//     document.write("  <h1>Sorry!You Are Not selected.</h1>")
//   }



 //( Chapter No: 15)// Arrays!!!!!!!!11
//Let's assign some string values to some variables
//  var student0 = "zain";
//  var student0 = "Tariq";
//  var student0 = "Ali";
//  var student0 = "Naveed";
//  var student0 = "Waheed";
//  var student0 = "Haider";
// 
// // first we make many variable that assign for value.
//   but we can make the one vaiable with use of array and assign values as we want.
// STore multipe values in single variable is called (ARRAYS).
// []it show array
//  var students = ["zain" ,"Tariq" , "Ali", "Naveed" , " Waheed"," Haider"]
//  for (students of  students){
//     console.log(students);         }
// //  }
// // // //index position 0 se start hoti hai variable naam ke baad []brackets hange is ke ader index k ano []
// // // // length total elemts kintne hai
// // // // show single value clear
// // // // update single value cities [0]= "new value"
// // // if want to call student naveed and haider so see here methods
// // // we check  Index number of naveed  and  haider
// console.log(students[3],students[5])




 //( Chapter No: 16)//Arrays::::: Adding and removing elements!!!!!!!!
// //Some Methods of it
// //push add 1 or more  elements  in last of an array
// // //pop   remove  one element from last of an array  

// var cities = []
// console.log(cities)
// // // It is empty array

// var cities = ["Karachi", "Lahore", "Islamabad","Hyderabad"];
// console.log(cities);

// Some Methods
// // there are 4 element but if we want to add one more elements in last of arrays 
// // so use 
// //  (i)push:::
// // //push add 1 or more  elements  in last of an array
// cities.push("mainwali")
// console.log(cities)

// // there are 5 element but if we want to remove one  elements in last of arrays 
// // so use
// // (ii)pop:::::::
// // // //pop   remove  one element from last of an array  
// cities.pop("")
// console.log(cities)

// //
// // there are 4 element but if we want to add one more elements in start of arrays 
// // // so use 
// // (iii) unshift:::::::
// // //unshift  add 1 or more  elements  in start of an array

// cities.unshift("Sukkur")
// console.log(cities)


// // there are 5 element but if we want to remove one  elements in start of arrays 
// // so use
// // (iv)shift::::
// // //shift    remove  one element from start of an array

// cities.shift("")
// console.log(cities)






 //( Chapter No: 17)//Arrays::::: Arrays:Removing, inserting,and extracting elements!!!!!!!!



















 


 
    














 


















// ( Chapter No:1)Alert!!!!!
//An alert is a box that pops up to give the user a message. Here is some examples Of Alert!!!!!!!!
// alert("Hello Everyone!");
// alert("Thanks For Your Input!");
// alert("Welome!");

//Note Semicolon symbol (;)show That any Statement end here



//( Chapter No:2)Variables for Strings!!!!!!!!!
// An variable is Store any value value. Here is some examples Of Variables of Strings!!!!!!!!
//    var is keyword  of variable for use!!!!!!!
// var massage = " It is My First Page About JS! "; 
// alert(massage);
//
// var studentName = "Ali,Zain,Imram, Moiz";
// alert(studentName)

// var city = "Karachi";
// alert(city)

//Note here I stored values in variables
//IMPORTANT!!!!!!!
//after the var we give to variable any name 
//after the name we give the Symbol of equal (=) 
// = Show that now we are going to assign any value in variable



// ( Chapter No:3) Variables for Numbers!!!!!!!!1
// A string isn't the only thing you can assign to a variable. You can also assign a number.
// Here some  Examples of vriable for number!!!!!

// // var weight = 12;
// // document.write(weight);

// //  var num1 = 13;
// //  var num2 = 12;
// //  document.write(num1 + num2);


// var  date = 14;
// document.write(date);

// // number can not write  in double quotes Because  it is interger
// any value if in  double quotes it is called  (String); 

//(Chapter No:4)Variable Names legal and Illegal!!!!!!!!!
// Here are the rest of the rules:
// A variable name can't contain any spaces.
// A variable name can contain only letters, numbers, dollar signs, and underscores.
// Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
// For example, userAlert and myVar are legal.
// Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a
// Rose. If you assign the string "Floribundas" to the variable rose, and then ask JavaScript
// for the value assigned to Rose, you'll come up empty.
// I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or
// two (or three) in the middle if the name is formed by more than one word. A camelCase
// name begins in lower case. If there's more than one word in the name, each subsequent
// word gets an initial cap, creating a hump. If you form a variable name with only one
// word, like response, there's no hump. It's a camel that's out of food. Please adopt the
// camelCase!!!!!!!


// Here  Are Some (5) of legal names for  variable name....
//   (i) var firstName;
//   (ii) var $name;
//   (ii) var num1;
//   (iv) var stuentRollNumber;
//   (v) var _$1;


// Here  Are Some (5) of illegal names for  variable name....
//   (i) var Fir&stname;
//   (ii) var 12&4;
//   (ii) var %^8name;
//   (iv) var 11num;
//   (v) var )($);




//( chapter No:5)// Math expressions:Familiar operators!!!!/////
// Wherever you can use a number, you can use a math expression.
// Here some  Examples of it

// Symbol of Math expressions:Familiar operators
// //  (i) Add +
// //  (ii) sub -
// //  (iii) mul *
// //  (iv)div /
// //  (v)Modulus %

//USE
// ( 1= ADDATION+)!!!!!!!!!!
// var weight = 40;
// var weightNew = 17;
// var add  = weight  +    weightNew
// alert(add);


// ( 2= SUB-)!!!!!!!!!!
//  var total = 4567;
//  var discount = 567;
//  var  sum  = total - discount
//  alert(sum);


// // ( 3= MULTYPLE *)!!!!!!!!!!
//  var num1  = 7;
//  var  num2 = 9;
//  var  tableOfSeven  = num1 * num2
//  alert(tableOfSeven);


// ( 4= DIVIEDE /)!!!!!!!!!!
//  var money = 150;
//  var child = 10;
//  var  divideMoney  = money / child
//  alert(divideMoney);



// // ( 5= MODULUS %)!!!!!!!!!!
// // % is the modulus operator. It doesn't give you the result of dividing one number by
// another. It gives you the remainder when the division is executed.
//  var money = 17;
//  var child = 5;
//  var  divideMoney  = money % child
//  alert(divideMoney);
//  //here two Modulus






//( Chapter No: 6)// Math expressions: UnFamiliar operators..
//Note Important!!!

 //Increcrement+
 //(num++ Post Increment)....First Value Assign after do value Increment!!
 //(++num Pre Incremnent)....First Value do Incremnent after value Assign!!

 //Decrement-
 //(num-- Post Decrement)....First Value do  Assign after do value Decremnet!!
 //(--num Pre  Decrement)....First Value Increment after value Assign!!


//  (1) Examples of Increement+
    // Post Incremnent
    // var num1  = 13;
    // var num2 = 20
    // var postIncrement  = num1 + num2 + num1++ - num1;
    //   //                  13  +   20  +  13   -   14 
    //  //Here  Total is (32)                      
    // alert(postIncrement);



    // // Pre Incremnent
    // var value1 = 36;
    // var value2 =  24;
    // var PreIncremnent =  value1 + value2 - ++value2 + ++value1 - value2;
    // //                   36    +   24   -   25     +   37     -     25
    // //  //Here  Total is (47)
    // alert (PreIncremnent)



   // (2) Examples of Decrement-
     //Post Decremnet
       
    //  var num3 = 22;
    //  var num4  = 8;
    //  var  postDecrement = num4-- + num3 - num4 + num3-- + num4 - num3;
    //  //                    8     +  22  -  7   +  22   +  7   -  21  
    //  //Here  Total is (31)     
    //  alert(postDecrement)




//     // Pre Decrement
//     var  value3 = 18;
//     var   value4 = 15;
//     var  preDecrement = --value4 + value3 - --value3 + value4 + --value4 - --value3;
//             //           14      +  18    -    17    +   14   +     13     -   16
//  //Here  Total is (26)
//  alert(preDecrement)


//(

//( Chapter No: 7)// Math expressions:Eliminating ambiguity )
//Some Example Of  Math expressions:Eliminating ambiguity

// Here is aslo Use Rule Of (DMAS)
// var  totalMoney = 13 +5 *4
//  According to DMAS rule  So first do multipe 5*4 =20 aftar 20+ 13 = 33  So 33 is Answer 
//   alert(totalMoney) 

  //But we Want do  Answer  come that as  We want
// // so use the Round brakest ()
// var  totalMoney = (13+5) *4
// //   So here is Answer is 72 first do + and after it *
// alert(totalMoney);

// var totalCost = 4 + 4 * 5/25-3;
// //Same DMAS rule
// alert(totalCost);



// //( Chapter No: 8)// Concatenating text strings)
// // Example
// //  var studentName = "Ali";
// //  console.log ("1st Postion Taker"+ studentName + "Role No:3464");
// //  if you want space between them use method following
// +"      "
// var usenName = "Saad";
//  console.log ("Sir"+ "  "+ usenName+ "  "  + "is Good Teacher." );


//( Chapter No: 9)// Propmts )
// A prompt box asks the user for some information and provides a response field for her
// answer.

// Example

// // var name = prompt("What is Your Name?","Tufail");

// var question = prompt("What is Your Gender?");
// document.write(question)



// //( Chapter No: 10)// if statements)
// Suppose you code a prompt that asks, "Which is biggest city of pakistan?"
// // If the user answers correctly, you display an alert congratulating him.
// example
// var question = prompt("Which is biggest city of pakistan?");
//  if(question== "karachi"){
//     document.write("Correct!");
//  }



// //( Chapter No: 11)// Comparison operators)
//Note//Imprtant
 // == just check the value
 // === check the value and datatype
// > is greater than
// < is less than
// >= is greater than or equal to
// <= is less than or equal to

//Some Example!!!

//CHeck just Value here!
//   var num5 = 10;
//   var  num6 = "10"
//   if(num1==num2){
//     document.write(" Value match hain  ")
//   }


//Check Value and datatype!
// var num7  = 19;
// var num8 = "19"
// if(num7===num8){
//     document.write("value and dataTppe match nhai hai show nahi ho ga")
// }


//  var greaterNumber = prompt("Enter the Number Here!");
//  if(greaterNumber > 10 ){
//     document.write("Correct!")
//  }

// var  lessNumber = prompt("Enter the Number here!");
// if(lessNumber < 10){
//     document.write("Correct!")
// }

// var  greaterThanEqual = prompt("Enter the Number here!");
// if( greaterThanEqual >= 50){
//     document.write("Correct!")
// }


// var  lessThanEqual = prompt("Enter the Number here!");
// if( lessThanEqual <= 50){
//     document.write("Correct!")
// }

 // //( Chapter No: 12)// if...else and else if statements )


//Logicexample with IF and else together!!!!!!!1
// var input1 = prompt("Enter The Email Here!");
// var input2  = prompt("Enter The Password Here! ");
// if (input1 == "tufail" && input2== "1122"){
//     document.write("<h1> Login Successfully Here!</h1>")
// }
// else{
//    document.write ("<h1> Sorry! Invalid Email Or Password.!               </h1>")
// }

// //Logicexample with IF else & if else together!!!!!!!2
// check the Grade here!!!!!
//  var marks = prompt("Enter The Marks Here!");
//  if( marks >=1000 ){
//     document.write("<h1>Proud Of YourSelf Your Grade is (A+ ).</h1>")

//  }
//  else if (marks >=800){
//     document.write(" <h1> Your Grade is (A).</h1>")
//  }

//  else if (marks >=700){
//     document.write(" <h1> Your Grade is (B).</h1>")
//  }


//  else if (marks >=600){
//     document.write(" <h1> Your Grade is (C).</h1>")
//  }

//  else if (marks >=400){
//     document.write(" <h1> Your Grade is (D).</h1>")
//  }

//  else if (marks >=200){
//     document.write(" <h1> Your Grade is (E).</h1>")
//  }
//  else{
//     document.write("<h1>Sorry! You are fail  Best Of Luck Next For Time</h1>.")
//  }

// //CHECK THE MONTH NAME (3)

//   var month = prompt(" Enter the Just  Month Number  And Check  The Name of Month'Year.");
//   if (month == 1 ) {
//     document.write("<h1><u>JANURAY</u> IS (1)FIRST MONTH OF YRAR.</h1>");



//   }
//  else if ( month == 2){
//     document.write("<h1><u>FEBURAY</u> IS (2)SECOND MONTH OF YRAR.</h1>");
//  }

//  else if ( month == 3 )
//  {
//     document.write("<h1><u>MARACH</u> IS (3)THIRD MONTH OF YRAR.<H1>");
//  }

//  else if ( month == 4 )
//  {
//     document.write("<h1><u>APRAIL</u> IS (4)FOURTH MONTH OF YRAR.<H1>");
//  }


//  else if ( month == 5 )
//  {
//     document.write("<h1><u>MAY </u> IS (5)FIFTH MONTH OF YRAR.</H1>");
//  }

//  else if ( month == 6 )
//  {
//     document.write("<h1><u>JUNE</u> IS (6)SIXTH MONTH OF YRAR.<H1>");
//  }

//  else if ( month == 7 )
//  {
//     document.write("<h1><u>JULY</u> IS (7)SEVENTH MONTH OF YRAR.<H1>");
//  }

//  else if ( month == 8 )
//  {
//     document.write("<h1><u>AUGUST</u> IS (8)EIGTH MONTH OF YRAR.<H1>");
//  }


//  else if ( month == 9 )
//  {
//     document.write("<h1><u>SETEMBER</u> IS (9)NINITH MONTH OF YRAR<H1>");
//  }


//  else if ( month == 10 )
//  {
//     document.write("<h1><u>OCTERBER</u> IS (7)TENTH MONTH OF YRAR<H1>");
//  }

//  else if ( month == 11 )
//  {
//     document.write("<h1><u>NOVEMBER</u> IS (7)ELEVENTH MONTH OF YRAR<H1>")
//  }

//  else if ( month == 12 )
//  {
//     document.write("<h1><u>DECEMBER</u> IS (7) 'LAST (TWELEVE)'MONTH OF YRAR<H1>")
//  }



// //( Chapter No: 13)// Testing sets of conditions!!!!!!!!11
//Example!!!!1
//   var gender= prompt("Enter the gender  here!");
//   var education= prompt("Enter the Eduction here!");
//   var grade= prompt("Enter the Grade here of inter!");
//   var city= prompt("Enter the city here!");
  

//   if( gender=="male" &&  education=="phd" ||grade=="A+" && city=="karachi" ){
//     document.write("<h1> Congrations!Your Are Selected.</h1> ")
//   }
//   else{
//     document.write("  <h1>Sorry!You Are Not selected.</h1>")
//   }



 //( Chapter No: 15)// Arrays!!!!!!!!11
//Let's assign some string values to some variables
//  var student0 = "zain";
//  var student0 = "Tariq";
//  var student0 = "Ali";
//  var student0 = "Naveed";
//  var student0 = "Waheed";
//  var student0 = "Haider";
// 
// // first we make many variable that assign for value.
//   but we can make the one vaiable with use of array and assign values as we want.
// STore multipe values in single variable is called (ARRAYS).
// []it show array
//  var students = ["zain" ,"Tariq" , "Ali", "Naveed" , " Waheed"," Haider"]
//  for (students of  students){
//     console.log(students);         }
// //  }
// // // //index position 0 se start hoti hai variable naam ke baad []brackets hange is ke ader index k ano []
// // // // length total elemts kintne hai
// // // // show single value clear
// // // // update single value cities [0]= "new value"
// // // if want to call student naveed and haider so see here methods
// // // we check  Index number of naveed  and  haider
// console.log(students[3],students[5])




 //( Chapter No: 16)//Arrays::::: Adding and removing elements!!!!!!!!
// //Some Methods of it
// //push add 1 or more  elements  in last of an array
// // //pop   remove  one element from last of an array  

// var cities = []
// console.log(cities)
// // // It is empty array

// var cities = ["Karachi", "Lahore", "Islamabad","Hyderabad"];
// console.log(cities);

// Some Methods
// // there are 4 element but if we want to add one more elements in last of arrays 
// // so use 
// //  (i)push:::
// // //push add 1 or more  elements  in last of an array
// cities.push("mainwali")
// console.log(cities)

// // there are 5 element but if we want to remove one  elements in last of arrays 
// // so use
// // (ii)pop:::::::
// // // //pop   remove  one element from last of an array  
// cities.pop("")
// console.log(cities)

// //
// // there are 4 element but if we want to add one more elements in start of arrays 
// // // so use 
// // (iii) unshift:::::::
// // //unshift  add 1 or more  elements  in start of an array

// cities.unshift("Sukkur")
// console.log(cities)


// // there are 5 element but if we want to remove one  elements in start of arrays 
// // so use
// // (iv)shift::::
// // //shift    remove  one element from start of an array

// cities.shift("")
// console.log(cities)


 //( Chapter No: 17)//Arrays::::: Arrays:Removing, inserting,and extracting elements!!!!!!!!
cities.splice(2,1)
console.log(cities)


// HERE  END THE 17 CHAPTER !!!!!!!!!!!!!//////============


















 


 
    














 

















