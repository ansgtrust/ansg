import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    console.log(
      "This is more specific things here...",
      name,
      email,
      phone,
      subject,
      message,
    );

    // Create transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Gurukul Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_SET_FROM, //"nice.prince.ks@gmail.com", // receive on your email
      replyTo: email,
      subject: `Contact Query from: ${subject}`,
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
