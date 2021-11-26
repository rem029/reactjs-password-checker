# How to run this Application.

### 1. Clone this repo by running the following command.

```
git clone https://github.com/rem029/reactjs-password-checker.git
```

### 2. Browse to application folder and open with VS Code or your favorite IDE.

### 3. Install npm packages by running the command below
 
```
npm i
```
or
```
npm install
```
### 4. Create or update your .env file in the app root directory. Sample value below:
```
REACT_APP_PASSWORD_API_URL=<API_URL>

/root
.env < -- ENV HERE
.package.json
...
```
### 5. From the app directory run the command below:
```
npm run start
```

# App Folder structure
```
...
/public
/src
/src/components
/src/components/InputPassword/index.js < -- Input here
/src/components/InputPassword/components/ < -- Child components
/src/components/InputPassword/container/ < -- container components
/src/components/InputPassword/hooks/ < -- state management
/src/components/InputPassword/api/ < -- api requests
.env < -- API URL
...
```

```
/src/components/Component1
/src/components/Component2
/src/components/Component3
/src/components/Component4
```


# Component Folder structure
```
...
src/components/ComponentName
src/components/ComponentName/index.jsx
src/components/ComponentName/components
src/components/ComponentName/container
src/components/ComponentName/hooks
src/components/ComponentName/api
.env
...
```
