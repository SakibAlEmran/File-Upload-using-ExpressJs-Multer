# File Upload system using ExpressJs Multer

## About File Upload System
For this back-end system, I have used Multer middleware for uploading files. Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. read more from https://expressjs.com/en/resources/middleware/multer.html 

The index.html file provides two choose files fields to select the file to upload. The first field confirms that you can choose max 2 .jpg or .png or .jpeg files and the Second field confirms that you can choose max 1 pdf file. You can choose max 1MB file of each file size. Otherwise, the express error handler will give an error as a response. When everything is all right then all the selected will be uploaded in a directory with the proper custom file name.

