# TensorGo
Steps to create a react App:
install node.js from nodejs.org
to create react App use: npx create-react-app "appName"
cd "appName"
Dependencies used for react:
--axios
--react-router-dom
To install these dependencies use command: npm install axios react-router-dom

Dependencies used for node.js:
--express (for routing)
--cors
--nodemon
--passport
--passport-google=oauth20
--cookie-session
To install these dependencies use the command: npm i express cors nodemon passport passport-google=oauth20 cookie-session

Here Iam running the react on port 3000 and node on port 8080.
To have google login we need to have google client ID and secret ID which are present in google cloud console.
Create a .env file in server and include client ID and client Secret ID and client URL which is http://localhost:3000/
similarly create a .env file in client and keep server URL which is http://localhost:8080/

Run both client and server simultaneously:

![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/d7e3f237-ef97-407d-8e4a-62ca70811fe5)
login in with google
![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/c5cdcee3-f20e-41b8-a22e-2d0185d4805e)
![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/a5e1cb6e-0d53-4bd8-9868-fb779fe37cee)


After logout
![image](https://github.com/NEDUNURIGANESH/TensorGo/assets/113292508/3afcba16-b590-4e15-8e0c-eb3e1fa8e83d)



