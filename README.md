# mongodb-multiple-server-connections
Connect multiple atlas/server connections

## 1. Clone repo and move to the project directory

## 2. Update first connection details in `index.js` file
```
const firstDB = {
    name: "First", // for demo
    connStr: "your first db connection url",
    db: "mydb",
    coll: "mycoll"
};
```

## 3. Update second connection details in `index.js` file
```
const secondDB = {
    name: "Second", // for demo
    connStr: "your second db connection url",
    db: "mydb",
    coll: "mycoll"
};
```

## 4. NPM install
```
npm install
```

## 5. Run
```
node index.js
```

# Output in console:
```
Listening on port 3001...
First MongoDB connection succeeded!
{
  _id: new ObjectId("64553bedaf19f6bc448836a1"),
  name: 'test',
  calledAt: 2023-05-05T17:25:01.895Z,
  __v: 0
}
Second MongoDB connection succeeded!
{
  _id: new ObjectId("64553bedaf19f6bc448836a2"),
  name: 'test',
  calledAt: 2023-05-05T17:25:01.902Z,
  __v: 0
}
```