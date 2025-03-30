# Google Sheets Integration Setup

This document provides instructions on how to set up the Google Sheets integration for the contact form.

## Prerequisites

- A Google account
- Access to Google Sheets and Google Apps Script

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name your spreadsheet (e.g., "Language Next - Contact Form Submissions")

### 2. Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any code in the script editor
3. Copy and paste the code from the `google-sheets-script.js` file in this project
4. Save the script (File > Save) and give it a name (e.g., "Contact Form Handler")

### 3. Deploy as Web App

1. Click on **Deploy > New deployment**
2. Select type: **Web app**
3. Fill in the following details:
   - Description: "Contact Form Handler"
   - Execute as: **Me** (your Google account)
   - Who has access: **Anyone**
4. Click **Deploy**
5. Authorize the app when prompted
6. Copy the Web app URL that is displayed after deployment

### 4. Configure Environment Variable

1. Add the Web app URL to your project's environment variables:

   Create or update your `.env.local` file in the root of your project with:

   ```
   GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/your-script-id/exec
   ```

   Replace `your-script-id` with the actual ID from the URL you copied.

2. If deploying to production, make sure to add this environment variable to your hosting platform.

## Testing the Integration

1. Run your Next.js application locally
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your Google Sheet to verify that the data was received

## Troubleshooting

- If the form submission fails, check the browser console for error messages
- Verify that the Google Apps Script is deployed correctly and accessible
- Ensure the environment variable is set correctly
- Check that the Google Sheet is accessible to the Google account used for the script

## Security Considerations

- The current implementation allows anyone to submit data to your Google Sheet
- For production use, consider adding additional security measures such as reCAPTCHA
- You may want to implement rate limiting to prevent abuse