# Signature_Verification_System
The Signature Verification System is developed as a web application using HTML, CSS, JavaScript, and Python (Flask). The web application provides an interactive user interface where users can upload signature images and trigger the verification process. 
Frontend:

HTML is used to create the structure and layout of the web page. 
CSS is used to style the HTML elements and create a visually appealing user interface. 
JavaScript is used to add interactivity and functionality to the web page. In the Signature Verification System, JavaScript is used to handle the following tasks: 

 1.Uploading Signature Images
 2.Image Comparison 
 3.Displaying the Result 

 Backend with Flask: The backend is implemented using Flask to handle user requests and process the uploaded images.Image Processing: The uploaded images are read and resized for consistency.

Histogram of Oriented Gradients (HOG): The HOG features are calculated for each signature image using the skimage.feature.hog function. HOG is a widely used technique for extracting relevant features from images.

Similarity Calculation: The system calculates the similarity score between the two HOG features using SSIM, which is a metric to assess the structural similarity between two images.

Display Results: The system displays the similarity score on the web page, indicating the likeness between the two signatures. It also displays the HOG images extracted from the signatures for visual comparison.In Flask, routes define the URLs that the application will respond to, and handlers define the logic to be executed when a request is made to a specific route. For the signature verification system, we need routes to handle two main functionalities:

 1.Route for the main page: This route serves the HTML template that contains the user interface for uploading signature images and triggering the verification process. 
 2.Route for verification: This route handles POST requests with the uploaded signature images and performs the signature comparison. 
