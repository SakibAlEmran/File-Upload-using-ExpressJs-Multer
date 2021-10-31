# File Upload system using ExpressJs Multer

## About File Upload System
For this back-end system, I have used Multer middleware for uploading files. Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. read more from https://expressjs.com/en/resources/middleware/multer.html 

The index.html file provides two choose files fields to select the file to upload. The first field confirms that you can choose max 2 .jpg or .png or .jpeg files and the Second field confirms that you can choose max 1 pdf file. You can choose max 1MB file of each file size. Otherwise, the express error handler will give an error as a response. When everything is all right then all the selected will be uploaded in a directory with the proper custom file name.

## How to run
1. Open your terminal 

2. Clone the repository
```
git clone https://github.com/SakibAlEmran/File-Upload-using-ExpressJs-Multer.git
```
3. Go to working directory
```
cd File-Upload-using-ExpressJs-Multer/
```
4. Setup Dependencies: You should have nodejs install in your machine
```
npm install nodemon 
```
```
npm install express --save
```
```
npm add multer
```
5. Create a directory To store the files
```
mkdir uploads
```
6. start the server:
```
nodemon index.js
```
7. Your app should be available in port 3000
8. open the index.html
9. Test youself  
   - Exception: you can submit the without choosing any files because the back-end sent the success response when there is no error in express error handler. when      you don't choose any file that means there is no error to catch.

## Credit 
I am inspired from Sumit Saha { https://www.youtube.com/watch?v=w1kYZ0SOQTY&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=23&ab_channel=LearnwithSumitBangladesh } for this project.

## Contact
email: sakib.imran0909@gmail.com
