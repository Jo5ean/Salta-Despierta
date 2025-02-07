import config from "@/config/config";
import { connection } from "@/utils/connection";
import mailContactContent from "@/mails/contact.mail";
import type { APIRoute } from "astro";
const { URL: { MAILER }, MAILER: { CONTACT_USER } } = config;

export const POST: APIRoute = async function POST({ request }) {
    try {
        const { name, email, message } = await request.json();
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ status: 0, message: 'Todos los campos son obligatorios' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        const to = CONTACT_USER;
        const subject = 'Nuevo contacto en la web';
        const content = mailContactContent({ name, email, message });
        const response = await connection({ method: 'POST', url: `${MAILER}/send-email`, data: { to, subject, content } });
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error: any) {
        console.log({ error });
        const response = error.response?.data ?? { status: 0, message: 'Internal server error' };
        return new Response(JSON.stringify(response), {
            status: response?.code ?? 500,
            headers: {
                'Content-Type': 'application/json'
            },
            statusText: 'Internal Server Error'
        });
    }
}