# Socialie

## Social Media App

A mobile application used communicte with friends, built with React Native, Redux, JavaScript. As for the backend, integrated with a Nodejs App, MongoDB database, S3 AWS for file storage, and Node mailer.

## Project Status

This project is currently in development. Still has not reached its MVP.

## Project Screen Shot(s)

Authentication

[ PRETEND SCREEN SHOT IS HERE ]
![Fig1](assets/fig1.png?raw=true "Fig1")

Overview
[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `expo` and `yarn` installed globally on your machine. Make sure you have expo go installed on your phone.  

Installation:

`expo install or yarn add`  


To Start Server:

`expo start`  

To Visit App, Make sure your device and sysem are on the same network:
 

## Reflection 

I had recently left my company to further my studies and realized I could just build Frontend UI's. I chose to pick this project to strengthen my backend development skills.

For the authentication flow, I needed to send emails to users to verify their emails, this prompted me to using Nodemailer package that handles email communication from the server.

Digging deeper, I learnt about 0Auth2.0 which consisted of the client application(my Node.js server), Resource owner(App user) and OAuth service provider(I chose Gmail).

Finally, Image storage and optimization. It is bad practice to save files in databases, I chose to storing them in AWS simple storage service, S3. Understood fully well how to make use of access credentials and store the ID's in the database intead.

One of the most complicated issues I still face is advanced features such as seeing all your followers or following without experiencing bad user experience. 
