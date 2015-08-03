#Hello Express and NodeJs

This is a simple exercise to start using nodejs and express

first created all the folders from command line

**hello-world**
 |- **db** [seed data and scripts for MongoDB]
 |- **views** [view files, html, jade]
     |- **includes** [partial views]
 |- **public** [all the static front-end files, including HTML, CSS, JavaScript]
     |- **css** [the styling sheets]
     |- **img** [images used in the application]
     |- **js**  [JavaScript files]
 |- **routes** [the routes to the different models]

### Creating the package.json file

```$ npm init``` this command starts a wizard that ask you what do you want to add
to your app.

### Installing dependencies

```$ npm install express@4.1.2 --save``` this commmand install the express libraries
and --save adds the dependencies to the package.json file

we repeat this command for each dependecie that we want to install

### App.js file
is read up to bottom so the orther matters:

1. Require Dependecies
this is where you have to require the dependencies to use in your app like:
```var express = require('express');```

2. Configure Settings
the settings of your app, like ports, paths, etc.
```app.set('port', process.env.PORT || 3000);```

3. Connect to DataBase [optional]
4. Define Middleware
5. Define Routes
the routes in your app like this:
app.get('/', function(req, res) {
  app.render('index', { msg: 'This is a local variable' });
});

6. Start the Server
This commands is to create the server and execute it
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port '+app.get('port'));
});

7. Start workers with clusters

