# Angular
I would like to cover the understanding and various basic features of Angular as part of this. For official angular documentation please refer to [Angular Documentation](https://angular.io/docs). This is the bible and it comes above all tutorials and documents. 
#### 1. What is Angular?
Angular is a javascript/typescript based framework to develop client side applications. We use techniques we already know in HTMKL,CSS and Javascript to create applications.
* Using Angular, we can create expressive HTML like we can create conditions in HTML itself.
* It supports powerful data binding.
* Angular supports modularity.
* Angular has built-in support for integrating with backend.
#### 2. What is Angular compinent?
Angular component is the combination of template(UI), class (properties+methods) and Meta data.
![Angular Component](https://github.com/anand-tummapudi/angular/blob/main/assets/images/angular_component.JPG)

``` import {Component} from "@angular/core";
@Component({
	selector:'app-root',
	template:'component.html'
})
export class AppComponent{
	pageTitle:string = 'My First Component';
}
```
#### 3. What is Typescript?
* Is the language used for angular development. This is the superset of javascript.
* Type script transpiles to plain javascript. This language is strongly typed.
	JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
	In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
	TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
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
#### 5. Angular Features
* **Angular1**: Angular1 is called as AngularJS is developed using javascript.It provides framework for client-side MVC and MVVM architectures, along with components commonly used in rich internet applications.
* **Angular2**: Angular2 is complete rewrite of frmework using typescript. It is built with mobile device support where as angular1 is not supported by mobile devices.We can use any of the language ES5,ES6, Typescript or dart to write angular2 code.

