# Server-side scripting in node.js -- Exercise 2

Practice exercises for the [sss-course](https://github.com/CMDA/sss-course).


## Overview
This exercise will help you:



## Prerequisites
To get you running quickly. [Fork this repo](https://github.com/CMDA/sss-exercises/fork), and [clone it](http://git-scm.com/book/ch2-1.html#Cloning-an-Existing-Repository) onto your computer. The reason for forking is that you can easily keep track of your changes and share you code with your fellow students. Also, it makes it easier for us to give feedback on your code. For more explanation on how to get feedback see the [course guide](https://github.com/CMDA/sss-course/#workflow).

### Reading list
* [Node. js in Action, Cantelon, Mike, et al. - Manning Publications, 2014](http://www.manning.com/cantelon/)

## Task 1
In this course, [expressjs]() will be used as framework. This framework offers a 

In this task you will get familiar with basic structuring of an application.

```
├── README.md
├── index.js
├── lib
│   ├── serialize-flow.js
│   └── server.js
├── task4.js
├── task5.js
└── test
    ├── serialize-flow.js
    └── server.js
```

res.send


### Extra task
res.json


### Protip: Code loading
Node.js by default, doesn't reload the code when it is changed. 

Nodemon helps with this


## Task 2
Request params and named params

## Task 3
In node.js quite a portion of code, requires you to understand asynchronicity. In node.js an asynchronous code typically takes a callback, that is executed once its work is completed. Sometimes however you require the first asynchronous function call to be completed before the second one. 

1. Open ```lib/serialize-flow.js```.
2. Right now, ```serializeFlow``` just executes all functions in the given array.
3. You can see this by running ```$ node task4.js```, to see the defined asynchronous function open ```task4.js```.
3. Modify this function to make it work in serial sequence. *Tip:* The given functions to ```serializeFlow``` always will take an optional callback.
4. Run ```$ node task4.js``` again, is Func1 run before Fun2 now?
5. Run ```$ npm run test:task4``` to test your implementation. All green? Well done!


## Task 3


## Wrapping up


As last, it is advisable to commit and push your solutions because they will help you with the final assignment and prepare the exams. Pushing your code will make sure that your code is backed up by GitHub. 



