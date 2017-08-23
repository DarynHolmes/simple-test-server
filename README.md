# Simple Test Server

This utility is used to create and serve test data. This uses [JSON-Server](https://github.com/typicode/json-server) and [faker](https://github.com/Marak/faker.js).

## Getting Started

After cloning the repository, change into the projects directory and run 

```
npm install
```

To generate test data use

```
npm run make
```
Please note: the `data` folder is in `.gitignore` therefore any files created in there will be ignored by git.


To run the simple REST server use 

```
npm run serve
```

Pagination is possible e.g. http://localhost:3000/items?_page=1&_limit=10


To change the number of rows being generated, edit `config.json`

## Customising

Read:

[JSON-Server](https://github.com/typicode/json-server)

[faker](https://github.com/Marak/faker.js)
