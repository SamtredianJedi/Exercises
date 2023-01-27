// // Passing Arrays to Functions In C++

// we can pass array parameter three types

// Sized Array Parameter
// Unsized Array Parameter
// Pointer Array Parameter
// As working term above three types is same.

// data_type[]

// and

// data_type[size] // here size is a compile-time number,which is array size.

// //Are exactly the pointer reference also same as
// data_type*
// Syntax
// // Type 1 : Sized Array Parameter
// int sum1(int tmp[12]);

// // Type 2 : Unsized Array Parameter
// int sum2(int tmp[]);

// // Type 3 : Pointer Reference Array Parameter
// int sum3(int * tmp);
// Passing Arrays to Functions example program In C++
// /*  Passing Arrays to Functions example program In C++ Programming Language
//     Array Example In C++*/

// // Header Files
// #include <iostream>
// #include<conio.h>

// using namespace std;

// // Type 1 : Sized Array Parameter Function Declaration
// int sum1(int tmp[12]);
// // Type 2 : Unsized Array Parameter Function Declaration
// int sum2(int tmp[]);
// // Type 3 : Pointer Array Parameter Function Declaration
// int sum3(int * tmp);

// int main() {
//    int total = 0;
//    // declaring and Initializing sales array in C
//    int sales[12] = {100, 90, 80, 110, 115, 210, 80, 95, 125, 135, 140, 174};

//    int i; // Variable for access sales array index
//    cout << "Passing Arrays to Functions :Sales Sum Demo : In C++ Example Program\n";

//    total = sum1(sales);
//    cout << "\nType 1 : Sum :" << total;

//    total = sum2(sales);
//    cout << "\nType 2 : Sum :" << total;

//    total = sum3(sales);
//    cout << "\nType 3 : Sum :" << total;

//    getch();
//    return 0;
// }

// // Type 1 : Sized Array Parameter Function Definition

// int sum1(int tmp[12]) {
//    int sum = 0, i;
//    for (i = 0; i < 12; i++) {
//       sum = sum + tmp[i];
//    }
//    return sum;
// }

// // Type 2 : Unsized Array Parameter Function Definition

// int sum2(int tmp[]) {
//    int sum = 0, i;
//    for (i = 0; i < 12; i++) {
//       sum = sum + tmp[i];
//    }
//    return sum;
// }

// // Type 3 : Pointer Array Parameter Function Definition

// int sum3(int * tmp) {
//    int sum = 0, i;
//    for (i = 0; i < 12; i++) {
//       sum = sum + tmp[i];
//    }
//    return sum;
// }

