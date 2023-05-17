# Angular
I would like to cover the understanding and various basic features of Angular as part of this. 
#### 1. What is Angular?
Angular is a javascript/typescript based framework to develop client side applications. We use techniques we already know in HTMKL,CSS and Javascript to create applications.
* Using Angular, we can create expressive HTML like we can create conditions in HTML itself.
* It supports powerful data binding.
* Angular supports modularity.
* Angular has built-in support for integrating with backend.
#### 2. What is Angular compinent?
Angular component is the combination of template(UI), class (properties+methods) and Meta data.
![Angular Component](https://github.com/anand-tummapudi/angular/blob/main/assets/images/angular_component.JPG)
`
import {Component} from "@angular/core";
@Component({
	
})
export class AppComponent{
	pageTitle:string = 'My First Component';
}`
#### 3. What is Typescript?
* Is the language used for angular development. This is the superset of javascript.
* Type script transpiles to plain javascript. This language is strongly typed.
* Typescript uses ES6.

#### 4. What is Javascript?
Java script is the language for web.
* ECMAScript(ES)
* ES 3/5 
	ES3 is supported by all the browsers and ES5 is supported by modern browsers.
* ES 2015 (ES6)
	- Classes
	- Arrow functions.
newer script will be transpiled into old javascript code.