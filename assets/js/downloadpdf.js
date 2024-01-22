function downloadPDF() {
  //PDF path
  var pdfUrl = "assets/documents/CV.pdf";

  // Creating a link element
  var link = document.createElement("a");

  // Setting the href attribute with the file URL
  link.href = pdfUrl;

  // Setting the download attribute with the desired file name
  link.download = "ARRresume.pdf";

  // Appending the link to the document
  document.body.appendChild(link);

  // Triggering the click event to start the download
  link.click();

  // Removing the link from the document
  document.body.removeChild(link);
}
