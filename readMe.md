TP API and Web Services - EFREI PARIS M1 Data Engineering

Subject :

Your task is to use Sockets to communicate between a backend and a frontend JS applications.

Your frontend will simply send a list of texts, and your backend has to do some processing to each (say, your backend has to lowercase the text). You can add the illusion of complexity by setting a timer that runs for a certain number of seconds for each text processed, code execution can proceed after the timer is done. Example:

async function test() {
    console.log('start timer');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('after 1 second');
    // respond to socket and repeat for the rest of the data
}

The backend can keep count of how many texts have been processed so far. After the successful execution
of each line of data, the backend should send a socket notification to the frontend about the number
of texts processed so far.
The frontend then updates the screen, showing a message like:
x texts processed so far.
And when all the texts are processed successfully, the frontend would display a message:
Data processing complete

-------------------------

1. git clone https://github.com/Arthur-Chevron/web-efrei-m1.git
2. cd TP-Paris
3. cd api
4. npm install
5. cd ..
6. cd front
7. npm install
8. go to the file ./api/config/db.config.js
9. change key url with your url from mongoDB