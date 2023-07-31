import { render } from 'svelte-email';
import nodemailer from 'nodemailer';
import ContactEmail from '$lib/emails/ContactEmail.svelte';

// load function returns an object with data
export async function load(event) {
    return {
        message: event.locals.message
    }
}


export const actions = {
    default: async (event) => {
        let request = event.request
        let data = await request.formData()

        // Read the form values
        let email = data.get('Email')
        let name = data.get('Name')
        let message = data.get('message')

        //console.log(`The user submitted: ${email}, ${name}, ${message}`)


        // send this as an email with smtp
        // create smtp transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port: 587,
            secure: false,
            auth: {
                user: 'apikey',
                pass: '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'
            }
        });

        // render the email template
        const emailHtml = render({
            template: ContactEmail,
            props: {
                name: name,
                email: email,
                message: message
            }
        });

        // send the email with given options
        const options = {
            from: 'support@pnpradius.com',
            to: 'murithic2016@gmail.com',
            subject: 'New Contact Form Submission',
            html: emailHtml
        };
        
        transporter.sendMail(options);

        event.locals.message = `Thank you ${name} for your message. We will get back to you soon.`

        return {
            status: 200,
        }
    }
}