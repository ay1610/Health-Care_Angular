var app = angular.module("healthcareApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/blog.html",
        controller:"healthcareController"
    })
    .when("/glossary", {
        templateUrl : "views/glossary.html",
        controller:"healthcareController"
    })
    .when("/contact", {
        templateUrl : "views/contact.html",
        controller:"healthcareController"
    });
});


