# Server-side scripting in node.js -- Exercise 2

Practice exercises for the [sss-course](https://github.com/CMDA/sss-course).


## Overview
This exercise will help you:



## Prerequisites
To get you running quickly. [Fork this repo](https://github.com/CMDA/sss-exercises/fork), and [clone it](http://git-scm.com/book/ch2-1.html#Cloning-an-Existing-Repository) onto your computer. The reason for forking is that you can easily keep track of your changes and share you code with your fellow students. Also, it makes it easier for us to give feedback on your code. For more explanation on how to get feedback see the [course guide](https://github.com/CMDA/sss-course/#workflow).

### Reading list
* [Node. js in Action, Cantelon, Mike, et al. - Manning Publications, 2014](http://www.manning.com/cantelon/)

## Task 1
In this course, [expressjs]() will be used as framework. This framework offers an accessible way of working with the Node.js [```http```](http://nodejs.org/api/http.html). In this task you will get familiar with basic structuring of an application.

1. Start the server with ```node index.js```
2. Open [http://localhost:3000](http://localhost:3000)
4. Add a image to the ```public/images``` directory in the public folder. You can find a reference in the ```data``` directory.
5. Point your browser to ```http://localhost:3000/images/your-filename```, is the image served?
6. 

```
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
├── views
│   └── index.ejs
├── app.js
└── package.json
```

### The public folder
The public folder is used for storing content that isn't generated, also called static content, e.g. images, (client-side) javascript and stylesheets. But also for user uploaded files. Serving these assets is handled by [express.static](http://expressjs.com/guide/using-middleware.html#express.static). 

```
// Setup serving static assets
app.use(express.static('public'));
```


### Routes folder
The task of the routers is
res.send
res.render

### Views

### app.js

### package.json


### Extra task
res.json


### Protip: Code loading
Node.js by default, doesn't reload the code when it is changed. 

Nodemon helps with this


## Task 2
Request params and named params

## Task 3


## Task 4



## Task 3
In node.js quite a portion of code, requires you to understand asynchronicity. In node.js an asynchronous code typically takes a callback, that is executed once its work is completed. Sometimes however you require the first asynchronous function call to be completed before the second one. 

1. Open ```lib/serialize-flow.js```.
2. Right now, ```serializeFlow``` just executes all functions in the given array.
3. You can see this by running ```$ node task4.js```, to see the defined asynchronous function open ```task4.js```.
3. Modify this function to make it work in serial sequence. *Tip:* The given functions to ```serializeFlow``` always will take an optional callback.
4. Run ```$ node task4.js``` again, is Func1 run before Fun2 now?
5. Run ```$ npm run test:task4``` to test your implementation. All green? Well done!


## Wrapping up



