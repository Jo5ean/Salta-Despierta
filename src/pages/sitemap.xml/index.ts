import config from "@/config/config";
import { adventures } from "@/data/adventure";
import { formatName } from "@/utils/helpers";

export async function GET() {
    const siteURL = config.URL.WEB.toString();
    const pages = [
        {
            url: '/',
            priority: '1.0',
            changefreq: 'weekly'
        },
        {
            url: '/sergio-wilde',
            priority: '0.8',
            changefreq: 'monthly'
        },
        ...adventures.map(adventures => ({
            url: `/atracciones/${adventures.id}/${formatName(adventures.title)}`,
            priority: '0.7',
            changefreq: 'monthly'
        }))
    ];

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${pages.map((page) => `
                    <url>
                        <loc>${new URL(page.url, siteURL).href}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>${page.changefreq}</changefreq>
                        <priority>${page.priority}</priority>
                    </url>
                `).join('')}
            </urlset>`,
        {
            headers: {
                'Content-Type': 'application/xml',
            },
        }
    );
}
