/**
 * Google Apps Script to handle form submissions and write data to a Google Sheet
 * 
 * Instructions:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Save the script (name it something like "Contact Form Handler")
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Select type: "Web app"
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 * 6. Copy the web app URL and set it as GOOGLE_SHEETS_API_URL in your .env file
 */

// The doPost function is automatically called when the web app receives a POST request
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();

    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Name', 'Surname', 'Email', 'Message', 'Timestamp']);
    }

    // Append the form data to the sheet
    sheet.appendRow([
      data.name,
      data.surname,
      data.email,
      data.message,
      data.timestamp
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'success': true,
      'message': 'Data successfully written to Google Sheets'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error and return an error response
    console.error('Error processing request: ' + error);
    return ContentService.createTextOutput(JSON.stringify({
      'success': false,
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}