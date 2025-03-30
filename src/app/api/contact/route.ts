import { NextResponse } from "next/server";
import { headers } from "next/headers";

export const runtime = "edge";

type ContactFormData = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

// This function will handle the form submission and send data to Google Sheets
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, surname, email, message } = body as ContactFormData;
    console.log("body: ", body);

    //test
    // return NextResponse.json({
    //   success: true,
    //   message: "Form submitted successfully",
    // });

    // Validate the required fields
    if (!name || !surname || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Google Sheets API endpoint
    // You need to deploy a Google Apps Script as a web app and use its URL here
    // The script should accept POST requests and write to a specific Google Sheet
    const GOOGLE_SHEETS_API_URL = process.env.GOOGLE_SHEETS_API_URL;

    if (!GOOGLE_SHEETS_API_URL) {
      return NextResponse.json(
        { error: "Google Sheets API URL not configured" },
        { status: 500 }
      );
    }

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Failed to send data to Google Sheets:", errorData);
      return NextResponse.json(
        { error: "Failed to send data to Google Sheets" },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
