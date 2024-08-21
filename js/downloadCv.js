function downloadCVs() {
  // Get the two files you want to download
  const file1 = "履歴書 Reaz MD.xlsx";
  const file2 = "Curriculum vitae.pdf";

  // Create a link element
  const link = document.createElement("a");

  // Set the href attribute to the URL of the first file
  link.href = "/img/cv/" + file1;

  // Set the download attribute to the file name
  link.download = file1;

  // Create a second link element
  const link2 = document.createElement("a");

  // Set the href attribute to the URL of the second file
  link2.href = "/img/cv/" + file2;

  // Set the download attribute to the file name
  link2.download = file2;

  // Add the links to the page
  document.body.appendChild(link);
  document.body.appendChild(link2);

  // Simulate a click on the first link
  link.click();

  // Simulate a click on the second link
  link2.click();

  // Remove the links from the page
  document.body.removeChild(link);
  document.body.removeChild(link2);
}
