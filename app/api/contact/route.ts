import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateAll, isFormValid } from '@/lib/validateContact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Validar en el servidor también
    const errors = validateAll({ name, email, message })
    if (!isFormValid(errors)) {
      return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>',
      to: 'jennifer.tatiana5978@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; background: #fdf6f0; border-radius: 12px;">
          <h2 style="color: #e879c8; margin-bottom: 16px;">📬 Nuevo mensaje desde tu portafolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: white; padding: 16px; border-radius: 8px; border-left: 3px solid #e879c8; margin-top: 8px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">Enviado desde tatianatorres.dev</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 })
  }
}
