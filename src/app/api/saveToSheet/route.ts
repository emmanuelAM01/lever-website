// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { NextResponse } from "next/server";
// import creds from "@/lib/lever-google-creds.json";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { firstName, lastName, email, interests } = body;

//     const doc = new GoogleSpreadsheet("YOUR_SHEET_ID_HERE");
//     await doc.useServiceAccountAuth(creds);
//     await doc.loadInfo();
//     const sheet = doc.sheetsByIndex[0];
//     await sheet.loadCells(); // needed to access existing rows

//     const rows = await sheet.getRows();
//     const existing = rows.find((row) => row.Email === email);

//     if (existing) {
//       return NextResponse.json(
//         { message: "Email already registered" },
//         { status: 409 }
//       );
//     }

//     await sheet.addRow({
//       "First Name": firstName,
//       "Last Name": lastName,
//       Email: email,
//       Interests: interests.join(", "),
//       Timestamp: new Date().toISOString(),
//     });

//     return NextResponse.json({ message: "Saved to Google Sheet" }, { status: 200 });
//   } catch (error) {
//     console.error("Error saving to sheet:", error);
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }
