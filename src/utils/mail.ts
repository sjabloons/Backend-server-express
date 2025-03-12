import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_USER, SMTP_PASS } from "../utils/envs";
import { mailData } from "../types/mailTypes";

let testAccount = await nodemailer.createTestAccount();
const testHost = "smtp.ethereal.email";

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

export const sendEmail = async (data: mailData) => {
    console.log(SMTP_HOST, SMTP_PASS, SMTP_USER);
    try {
        const info = await transporter.sendMail({
            from: data.from_email,
            to: "kristoflafaut@gmail.com",
            subject: "ik wil naar huis",
            html: `
        <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Email Template</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .header {
                background: #007BFF;
                color: #ffffff;
                text-align: center;
                padding: 15px;
                font-size: 22px;
                font-weight: bold;
                border-radius: 10px 10px 0 0;
            }
            .content {
                padding: 20px;
                font-size: 16px;
                color: #333;
                line-height: 1.5;
            }
            .button {
                display: inline-block;
                background: #007BFF;
                color: #ffffff;
                padding: 12px 20px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                margin-top: 10px;
            }
            .footer {
                text-align: center;
                font-size: 12px;
                color: #666;
                margin-top: 20px;
            }
            @media (max-width: 600px) {
                .container {
                    width: 95%;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">Syntra - Node Team</div>
Ik wil naar huis
        </div>
    </body>
    </html>
          `,
        });
        console.log(info);
        console.log("Mail verstuurd");
        console.log(nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
};
