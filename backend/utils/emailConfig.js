import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jimitlawfirm@gmail.com",
        pass : "kves clap zxiz yfgs",
    },
});


export const sendContactEmail = async (userData) => {
    const { firstname, lastname, email, phone, message } = userData;

    const mailOptions = {
        from: '"Jimit thakore" <jimitlawfirm@gmail.com>',
        to: email,
        subject: "Thank You for Contacting us",
        text: `Dear ${firstname} ${lastname},

Thank you for contacting us!

We have received your message and our team will review it promptly.

Your contact details:
Email: ${email}
Phone: ${phone}

Message: ${message}

We appreciate your interest in our legal services and will get back to you as soon as possible.

Best Regards,
Law Firm Team

Note: This is an automated message. Please do not reply to this email.`,

        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8C3D2B;">Law Firm</h2>
            
            <p>Dear ${firstname} ${lastname},</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #333;">Thank You for Contacting Us</h3>
                <p>We have received your message and our team will review it promptly.</p>
            </div>
            
            <p><strong>Your contact details:</strong></p>
            <ul style="list-style-type: none; padding-left: 0;">
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
            </ul>
            
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #8C3D2B; margin: 20px 0;">
                <p><strong>Your Message:</strong></p>
                <p>${message}</p>
            </div>
            
            <p>We appreciate your interest in our legal services and will get back to you as soon as possible.</p>
            
            <div style="margin-top: 30px;">
                <p>Best Regards,</p>
                <p><strong style="color: #8C3D2B;">Law Firm Team</strong></p>
            </div>
            
            <hr style="border-top: 1px solid #EEE; margin: 20px 0;">
            
            <p style="color: #999; font-size: 12px;">This is an automated message. Please do not reply to this email.</p>
        </div>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email sending error:', error);
        throw new Error('Failed to send email');
    }
};


export const sendNotificationEmail = async (userData) => {
    const { firstname, lastname, email, phone, message } = userData;
    const lawFirmEmail = "jimitlawfirm@gmail.com"; // Your law firm's email

    const mailOptions = {
        from: '"Law Firm Website" <jimitlawfirm@gmail.com>',
        to: lawFirmEmail,
        subject: "New Contact Form Submission",
        text: `New Contact Form Submission

A new message has been received through the website contact form.

Contact Details:
Name: ${firstname} ${lastname}
Email: ${email}
Phone: ${phone}

Message:
${message}

Time of submission: ${new Date().toLocaleString()}`,

        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8C3D2B;">New Contact Form Submission</h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #333;">A new message has been received through the website contact form.</h3>
                <p style="color: #666;">Time of submission: ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #8C3D2B; margin-top: 0;">Contact Details</h3>
                <ul style="list-style-type: none; padding-left: 0;">
                    <li style="margin-bottom: 10px;"><strong>Name:</strong> ${firstname} ${lastname}</li>
                    <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
                    <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
                </ul>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #8C3D2B; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Message</h3>
                <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px;">This is an automated notification from your law firm's website.</p>
            </div>
        </div>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Notification email sending error:', error);
        throw new Error('Failed to send notification email');
    }
};

export default transporter; 