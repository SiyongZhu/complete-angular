# complete-angular

## For ts-hello
`tsc main.js` will generate a main.js file\
`node main.js` will run the javascript file

`tsc *.ts --target ES5 && node like_sim.js`

This is the tutorial from Udemy The Complete Angular Course: Beginner to Advanced

**Install Angular to Mac**
I have some issue install angular on Mac, follow the steps in here to resolve installation issues

First, download node js package from node js website, install to Mac
Then run the following commands
```
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
add following to ~/.bash_profile
export PATH="~/.npm-global/bin:$PATH"
source ~/.bash_profile
npm install -g @angular/cli
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Add Bootstrap

Run `npm install bootstrap --save` to generate a bootstrap module in node_module folder \
Run `npm install --save font-awesome angular-font-awesome` to generate font-awesome module \
Run `npm install @auth0/angular-jwt --save` to install JWT  \
In style.css, add the following
```
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.css";
```

## Check modules and versions

## Install modules and check versions
check package.json to see if libraries are installed and versions are matched\
Run `npm install` to install node-modules.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Use different properties on environments/environment.ts file

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

