function downloadFile() {
    // Get the file URL
    var fileURL = 'Files/Muhammad Zohaib - Resume.pdf';

    // Create a link element
    var link = document.createElement('a');

    // Set the link element's href attribute to the file URL
    link.href = fileURL;

    // Set the link element's download attribute
    link.download = 'Muhammad Zohaib CV';

    // Append the link element to the document
    document.body.appendChild(link);

    // Click the link element to trigger the download
    link.click('a');

    // Remove the link element from the document
    document.body.removeChild(link);
}

document.getElementById('download-button').addEventListener('click', downloadFile);

function sendEmail() {
//     // Get your email address
    var email = 'zohaibsoomro100@gmail.com';
  
    // Open the user's email client with a new email to your address
    window.location.href = 'mailto:' + email;
    window.location.href = 'whatsapp' + whatsapp;
  }


  window.onscroll = function() {
    var header = document.querySelector("header");
    var navbar = document.querySelector("nav");

    if (window.pageYOffset > header.offsetTop) {
      header.classList.add("scrolled");
      navbar.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      navbar.classList.remove("scrolled");
    }
  };


  

  document.getElementById('hire-me-button').addEventListener('click', sendEmail);