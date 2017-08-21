# ionic2Localization
Localization of hybrid app using ionic 2 and node js.

- The purpose of this tutorial is to know how to implement in ionic 2 by using plugins and database to change the language of your app without needing the app to restart or even update the app from store , just if there is changes in the database it's synchronized with your app through Node.js Server uploaded on IBM Blue mix server, Let's move on and start coding .

#  First : Setup Blank Ionic 2 Application
```sh
$ npm install -g ionic cordova

$ ionic start myBlank blank
```
Then, to run it, cd into myBlank and run:

*  To Add ios Platform :
```sh
$  ionic cordova platform add ios
```
*  To add android Platform :
```sh
$  ionic cordova platform add android
```
*  To run on any platform :
```sh
$ ionic cordova run "Platform Name"
```
* To run the project on the browser local host :
```sh
$  ionic serve
```

#  Second : Install The internationalization (i18n) library for Angular 2+
- To understand the library open this link
https://github.com/ngx-translate/core
**NB we are using Angular 2 so you will not find HTTPClientModile and '@angular/common/http';
For Angular 2 use this to install files
```sh
npm install -g @angular/http with http-loader@0.1.0
```