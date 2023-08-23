document.addEventListener('DOMContentLoaded', function() {
    function uploadSignature(event, signatureNumber) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function() {
        const signaturePreview = document.getElementById(`signature-preview-${signatureNumber}`);
        signaturePreview.src = reader.result;
          const inputField = document.getElementById(`signature${signatureNumber}`);
        inputField.innerText = reader.result;
          inputField.style.color="black";
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  
    function displayResult(similarityScore, hogImage1, hogImage2) {
      const resultSection = document.getElementById('result');
      let resultMessage = '';
  
      if (similarityScore > 0.9) {
        resultMessage = `Signatures MATCH , Similarity score ${Math.round(similarityScore * 100)}%`;
      } else {
        resultMessage = `Signatures DO NOT MATCH , Similarity score ${Math.round(similarityScore * 100)}%`;
      }
  
      resultSection.textContent = resultMessage;
  
      // Display HOG images
      const hogImage1Elem = document.getElementById('hog-image-1');
      const hogImage2Elem = document.getElementById('hog-image-2');
      hogImage1Elem.src = hogImage1;
      hogImage2Elem.src = hogImage2;
    }
  
    function verifySignatures() {
      const signature1Input = document.getElementById('signature1');
      const signature2Input = document.getElementById('signature2');
  
      if (!signature1Input.files[0] || !signature2Input.files[0]) {
        alert('Please upload both signatures.');
        return;
      }
  
      const formData = new FormData();
      formData.append('signature1', signature1Input.files[0]);
      formData.append('signature2', signature2Input.files[0]);
  
      fetch('/verify', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          const similarityScore = data.similarity_score;
          const hogImage1 = 'data:image/png;base64,' + data.hog_image1;
          const hogImage2 = 'data:image/png;base64,' + data.hog_image2;
          displayResult(similarityScore, hogImage1, hogImage2);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    // Attach event listeners
    const signature1Input = document.getElementById('signature1');
    const signature2Input = document.getElementById('signature2');
  
    signature1Input.addEventListener('change', function(event) {
      uploadSignature(event, 1);
    });
  
    signature2Input.addEventListener('change', function(event) {
      uploadSignature(event, 2);
    });
  
    const verifyButton = document.getElementById('verify-button');
    verifyButton.addEventListener('click', verifySignatures);
  });
  