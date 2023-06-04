# Angular
I would like to cover the understanding and various basic features of Angular as part of this. For official angular documentation please refer to [Angular Documentation](https://angular.io/docs). This is the bible and it comes above all tutorials and documents. 
#### 1. What is Angular?
Angular is a javascript/typescript based framework to develop client side applications. We use techniques we already know in HTMKL,CSS and Javascript to create applications.
* Using Angular, we can create expressive HTML like we can create conditions in HTML itself.
* It supports powerful data binding.
* Angular supports modularity.
* Angular has built-in support for integrating with backend.
#### 2. What is Angular component?
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
#### 6. Angular Lifecycle hooks
After your application instantiates a component or directive by calling its constructor, angular calls the hook methods you have implemented at the appropriate point in the lifecycle of that instance.

	* ngOnChanges() - respond when angular sets or reset data bound input properties. This method receives a SipleChanges object of current and previous property value. It is called before ngOnInit() and whenever one or more data bound input properties change.
	
	* ngOnInit() - Initialize the directive or component after angular first displays the data bound propertiesand sets the directive or components inputproperties.It is called, once after the first ngOnChanges. It will be called, even when ngOnchanges is not called.
	
	* ngDoCheck() - Detect and act upon changes that angular can't or won't detect on its own. Called mmediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
	
	* ngAfterContentInit() - respond after angular projectgs external content into into the components view, or into the view that a directive is in.  Called once after the first ngDocheck(). 
	
	* ngAfterContentChecked() - Respond after angular checks the content projected into the directive or component.Called after ngAfterContentInit() and every subsequent ngDoCheck().
	
	* ngAfterViewInit() - Respond after angular initializes the component's views and child views or the view that contains the directive. Called once after the first ngAfterContentChecked().
	
	* ngAfterViewChecked() - Respond after angular checks the component's views and child viewsor the view that contains the directive. Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
	
	* ngOnDestroy() - clean up just before angular destroys the component or directive. Unsubscribe observables and detach event handlers to avoid memory leaks. Called immediately before angular destorys the directive or component.
