---
title: "Client-side export of a JavaScript array to a CSV file"
date: "2017-11-12"
category: "tutorial"
---

## Introduction

I have just finished a project that involved a chart with complex interactions: the user can select multiple data sources, apply filters, and do some basic analaysis.

The business required that the user should export the data so it can be later imported in Excel for further analysis. Since the data is already there on the client and the CSV file format is very simple, we decided to do the transformation on the frontend.

Additionally, this approach has a better user experience because the action is instantaneous (no need to issue a new request and wait for the response).

## Implementation

Let's say we have the following piece of data:

```javascript
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

First, we convert it to a string by joining the items in each array with a comma and we terminate the lines with carriage return and newline characters:

```javascript
let csv = "";
data.forEach((row) => {
  csv += row.join(",") + "\r\n";
});
```

Then we escape the special characters with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank">encodeURIComponent</a> (so that it can be later used as part of a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs" target="_blank">Data URL</a>):

```javascript
const encoded = encodeURIComponent(csv);
```

And finally we make the browser download that string as a file:

1. Create a data URL containing our encoded data. The mime type is `text/plain` and the character set is `utf-8`.
2. Create a new link element and set the `href` and `download` attributes.
3. Add the element to the DOM and simulate a click on it.
4. Remove the element from the DOM so we don't create memory leaks.

```javascript
const dataUrl = "data:text/plain;charset=utf-8," + encoded;
const link = document.createElement("a");
link.setAttribute("href", dataUrl);
link.setAttribute("download", "data.csv");
document.body.appendChild(link);
link.click();
link.remove();
```

And that's it!

I haven't tested this approach with files larger than a megabyte because the project did not require it but if the conversion takes too long, we need move the function to a Service Worker and display some feedback to the user.

## Full solution

Here's the full solution with proper code structure and handling of optional headers:

<!-- prettier-ignore -->
```javascript
function createCSVLine(arr) {
  return arr.join(",") + "\r\n";
}

function convertToCSV(arr, headers) {
  let csv = "";

  if (headers) {
    csv += createCSVLine(headers);
  }

  arr.forEach((row) => {
    csv += createCSVLine(row);
  });

  return csv;
}

function saveAs(filename, content) {
  const encoded = encodeURIComponent(content);
  const dataUrl = "data:text/plain;charset=utf-8," + encoded;
  const link = document.createElement("a");
  link.setAttribute("href", dataUrl);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

const headers = ["Column 1", "Column 2", "Column 3"];
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const csvString = convertToCSV(data, headers);

saveAs("data.csv", csvString);
```
