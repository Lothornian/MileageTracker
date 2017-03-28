/**
Filename: data.js
Author: Kyle Hunt
Description: This class is used to generate sample data for testing the milage tracker application.

@TODO generate UUIDs or send as Undefined.
*/
import Car from './Car.js';
import Fillup from './Fillup.js';
import User from './User.js';

let user1 = new User(12345,  `Kyle`, `KyleRHunt@gmail.com`);
let user2 = new User(12346, `Thor`, `Thor@example.com`);
let user3 = new User(12347, `Tyler`, `Tyler@example.com`);

let car1 = new Car(101, 12345, `Kyle's HRV`, `Honda`, `HRV`);
let car2 = new Car(102, 12345, `Bev's Civic`, `Honda`, `Civic`);
let car3 = new Car(103, 12345, `Shannon's Civic`, `Honda`, `Civic`);
let car4 = new Car(111, 12346, `Thor's HotRod`, `Chevy`, `Corvette`);
let car5 = new Car(121, 12347, `Tyler's Jeep`, `Jeep`, `Wrangler`);

let fillup1 = new Fillup(1001, 101, 2.349, 10.12, 6034, `Shell`, `It was really cold`);
let fillup2 = new Fillup(1002, 101, 2.029, 10.43, 6456, `Shell`, ``);
let fillup3 = new Fillup(1003, 101, 2.199, 9.78, 7001, `Shell`, ``);

let fillup4 = new Fillup(1004, 103, 2.039, 20.43, 10543, `Shell`, ``);
let fillup5 = new Fillup(1005, 103, 2.469, 21.19, 11134, `Shell`, ``);

let fillup6 = new Fillup(1006, 111, 1.999, 9.46, 18, `Shell`, ``);
let fillup7 = new Fillup(1007, 111, 2.019, 10.75, 762, `Shell`, ``);

let fillup8 = new Fillup(1008, 121, 2.199, 13.56, 102456, `Shell`, ``);
let fillup9 = new Fillup(1009, 121, 2.569, 14.12, 103154, `Shell`, ``);
