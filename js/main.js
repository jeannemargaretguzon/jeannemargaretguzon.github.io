document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-resume').addEventListener('click', function() {
        var resumeUrl = '/media/Resume.pdf';
        
        // Create a temporary anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = resumeUrl;
        downloadLink.download = 'Jeanne_Margaret_Guzon_Resume.pdf';
        downloadLink.target = '_blank'; // Open in a new tab
        downloadLink.style.display = 'none'; // Hide the link
        
        // Append the anchor element to the body
        document.body.appendChild(downloadLink);
        
        // Trigger the click event
        downloadLink.click();
        
        // Remove the anchor element
        document.body.removeChild(downloadLink);
    })
});
    