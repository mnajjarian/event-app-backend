# event-app-backend

The backend side for event-app application.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and with apt-get install, just run the following commands.

      $ sudo apt-get install nodejs
      
  After installing node, this project will need yarn too, so just run the following command.
  
      $ sudo apt-get install -g yarn

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.11.3

    $ yarn --version
    6.1.0

### MongoDB
The project uses MongoDB as a database.

## Install

    $ git clone https://github.com/mnajjarian/event-app-backend.git
    $ cd event-app-backend
    $ yarn install

## Configure app

### Variable environments
To run the app you need create .env file in the root of project
```sh
touch .env
```

and put the right values for these variables

- `MONGODB_URI` [MongoDB URI](https://docs.mongodb.com/manual/reference/connection-string/)
- `SECRET_KEY` can be any string
- `PORT` to choose which port for the application. Default: 3001

## Running the server

    $ yarn start
