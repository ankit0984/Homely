import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { name, email, message, projectType } = await req.json()

  try {
    console.log('Attempting to send email...')
    const data = await resend.emails.send({
       from: 'Ankit kumar <ankitkumar@devstech.xyz>',
      to: ['en.ankitkumarpandey@gmail.com'],
      subject: `New Contact from ${name}`,
      react: EmailTemplate({ name, email, message, projectType }),
    })
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const EmailTemplate = ({ name, email, message, projectType }) => (
  <html>
    <head>
      <title>New Design Inquiry</title>
    </head>
    <body Style="font-family: 'Helvetica', Arial, sans-serif; line-height: 1.6; background-color: #f6f6f6; margin: 0; padding: 0;">
      <div Style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
        <div Style="background-color: #2c3e50; color: #ffffff; padding: 30px; text-align: center;">
          <h1 Style="margin: 0; font-size: 28px; font-weight: 300;">
            New Design Inquiry
          </h1>
        </div>
        <div Style="padding: 30px;">
          <p Style="font-size: 16px; color: #333333; margin-bottom: 25px;">
            A new inquiry has been received from the Elegant Interiors website:
          </p>
          <div Style="background-color: #f9f9f9; border-left: 4px solid #2c3e50; padding: 20px; margin-bottom: 25px;">
            <p Style="margin: 0 0 15px 0;">
              <strong Style="color: #2c3e50;">Name:</strong> {name}
            </p>
            <p Style="margin: 0 0 15px 0;">
              <strong Style="color: #2c3e50;">Email:</strong> {email}
            </p>
            <p Style="margin: 0 0 15px 0;">
              <strong Style="color: #2c3e50;">Project Type:</strong> {projectType}
            </p>
            <p Style="margin: 0 0 10px 0;">
              <strong Style="color: #2c3e50;">Message:</strong>
            </p>
            <p Style="margin: 0; white-space: pre-wrap; color: #555;">{message}</p>
          </div>
          <div Style="text-align: center; margin-top: 30px;">
            <a href="#" Style="display: inline-block; background-color: #2c3e50; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-weight: bold;">View Client Details</a>
          </div>
          <p Style="font-size: 14px; color: #888888; text-align: center; margin-top: 30px;">
            This inquiry was sent from the Elegant Interiors contact form.
          </p>
        </div>
        <div Style="background-color: #2c3e50; padding: 20px; text-align: center;">
          <p Style="font-size: 14px; color: #ffffff; margin: 0;">
            &copy; 2024 Elegant Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </body>
  </html>
)