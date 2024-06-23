# Angular
I would like to cover the understanding and various basic features of Angular as part of this. For official angular documentation please refer to [Angular Documentation](https://angular.io/docs). This is the bible and it comes above all tutorials and documents. 
#### 1. What is Angular?
Angular is a javascript/typescript based framework to develop client side applications. We use techniques we already know in HTMKL,CSS and Javascript to create applications.
* Using Angular, we can create expressive HTML like we can create conditions in HTML itself.
* It supports powerful data binding.
* Angular supports modularity.
* Angular has built-in support for integrating with backend.
#### 2. What is Typescript?
* Is the language used for angular development. This is the superset of javascript.
* Type script transpiles to plain javascript. This language is strongly typed.
	JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
	In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
	TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
- By default access modifier in typescript is public. if we add private access modifier to a variable, then it will not allow to change the value once we initialize. We can add get and set properties to alter the values of private properties.

* Typescript uses ES6.
#### 3. What is Javascript?
Java script is the language for web.
* ECMAScript(ES)
* ES 3/5 
	ES3 is supported by all the browsers and ES5 is supported by modern browsers.
* ES 2015 (ES6)
	- Classes
	- Arrow functions.
newer script will be transpiled into old javascript code.
#### 4. Angular Features
* **Angular1**: Angular1 is called as AngularJS is developed using javascript.It provides framework for client-side MVC and MVVM architectures, along with components commonly used in rich internet applications.
* **Angular2**: Angular2 is complete rewrite of frmework using typescript. It is built with mobile device support where as angular1 is not supported by mobile devices.We can use any of the language ES5,ES6, Typescript or dart to write angular2 code.
#### 5. Angular Lifecycle hooks
After your application instantiates a component or directive by calling its constructor, angular calls the hook methods you have implemented at the appropriate point in the lifecycle of that instance.

* ngOnChanges() - respond when angular sets or reset data bound input properties. This method receives a SipleChanges object of current and previous property value. It is called before ngOnInit() and whenever one or more data bound input properties change.
	
* ngOnInit() - Initialize the directive or component after angular first displays the data bound propertiesand sets the directive or components inputproperties.It is called, once after the first ngOnChanges. It will be called, even when ngOnchanges is not called.
	
* ngDoCheck() - Detect and act upon changes that angular can't or won't detect on its own. Called mmediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
	
* ngAfterContentInit() - respond after angular projectgs external content into into the components view, or into the view that a directive is in.  Called once after the first ngDocheck(). 
	
* ngAfterContentChecked() - Respond after angular checks the content projected into the directive or component.Called after ngAfterContentInit() and every subsequent ngDoCheck().
	
* ngAfterViewInit() - Respond after angular initializes the component's views and child views or the view that contains the directive. Called once after the first ngAfterContentChecked().
	
* ngAfterViewChecked() - Respond after angular checks the component's views and child viewsor the view that contains the directive. Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
	
* ngOnDestroy() - clean up just before angular destroys the component or directive. Unsubscribe observables and detach event handlers to avoid memory leaks. Called immediately before angular destorys the directive or component.

#### 6. What is Angular component?
The componentis the main building block of angular application. Angular component is the combination of template(UI), class (properties+methods) and Meta data.
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

#### 7. Angular Directives
The angular directives helps us to manipulate the DOM. You can change a DOM element's appearance, behavior or layout using the directives. The angular directives are classified into 3 categories based on how they behave. They are component, Structural and attribute directives.

#### 8. Angular Pipes
The angular pipes are used to transform the data. We can pass arguments to pipe and chain pipes. Angular also allows to create custom pipes.

#### 9. What is Angular component?
Angular componenets are the bulding blocks of an angular application.They are used to cerate resuable UI elements that can be easiy composed together to form more complex interfaces. A component consits of 3 parts.i. Template ii. Class iii. Styles. Some common examples of components are Headers, Footers, Sidebars, Alerts, Forms, Tables, Lists etc.
- AppComponent is a root component and we can have N number of componenets inside it.



#### 10. Angular modules?
A module in angular is a way of building the angular building blocks like components, directives, services and pipes together. To make a class as a module class, we need to decorate it with NgModule decorator. Every angular application must have at least one module file. In main.ts file, we we bootstrap AppModule. In app.module.ts file, we add all the components and other elements we are going to use in that module. Each module is independent and the components added in that module would be accessible only in thaat module.

#### 10. Angular Templates? 
A template is a piece of code that defines the user interface of your application. 

