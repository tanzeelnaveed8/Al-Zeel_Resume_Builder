// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Create a Nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,  // Your Gmail address
                pass: process.env.EMAIL_PASS,  // Your Gmail password
            },
        });

        // Setup email data
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'tanzeelnaveed8@gmail.com',  // Replace with your recipient's email
            subject: 'New Contact Form Message',
            text: `You received a message from ${name} (${email}):\n\n${message}`,
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending message' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
