import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_USER, SMTP_PASS } from "../utils/envs";
import { mailData } from "../types/mailTypes";
import { htmlContent } from "./mailMessage";

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
            subject: "Registratie",
            html: htmlContent(data),
        });
        console.log(info);
        console.log("Mail verstuurd");
        console.log(nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
};
