function downloadFile() {
    console.log("Hello, world!");

    // Replace 'filename.ext' with the name of your file
    var filename = 'cv.txt';
    // If your file is served by the live server, you can use a relative path
    var fileUrl = '/files/' + filename;

    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
