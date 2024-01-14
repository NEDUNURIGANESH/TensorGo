# TensorGo
### Steps to create a react App:<br>
install node.js from nodejs.org <br>
To create react App use: npx create-react-app "appName"<br>
cd "appName"
Dependencies used for react:<br>
--axios <br>
--react-router-dom <br>
To install these dependencies use command: npm install axios react-router-dom<br>

### Dependencies used for node.js:<br>
--express (for routing)<br>
--cors<br>
--nodemon<br>
--passport<br>
--passport-google-oauth20<br>
--cookie-session<br>
To install these dependencies use the command: npm i express cors nodemon passport passport-google-oauth20 cookie-session<br>

Here Iam running the react on port 3000 and node on port 8080.<br>
To have google login we need to have google client ID and secret ID which are present in google cloud console.<br>
Create a .env file in server and include client ID and client Secret ID and client URL which is http://localhost:3000/ <br>
similarly create a .env file in client and keep server URL which is http://localhost:8080/ <br>

Run both client and server simultaneously:

![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/d7e3f237-ef97-407d-8e4a-62ca70811fe5)
login in with google
![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/c5cdcee3-f20e-41b8-a22e-2d0185d4805e)
![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/a5e1cb6e-0d53-4bd8-9868-fb779fe37cee)


After logout
![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/3afcba16-b590-4e15-8e0c-eb3e1fa8e83d)



