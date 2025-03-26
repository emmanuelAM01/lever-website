import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, interests, agreeToTerms } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !agreeToTerms) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "emman0621@gmail.com", // Your Gmail email address
        pass: process.env.GMAIL_APP_PASSWORD, // Environment variable for Gmail App Password
      },
    });

    // Prepare email options
    const mailOptions = {
      from: "emman0621@gmail.com", // Your Gmail address
      to: "emmanuel@leverit.io", // The recipient email address
      subject: "New Waitlist Signup",
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interests:</strong> ${interests.join(", ") || "None"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
