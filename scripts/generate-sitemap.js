import fs from 'fs';
import path from 'path';

// Base URL of the website
const BASE_URL = 'https://www.mcraygor.com';

// Static routes
const staticRoutes = [
    '',
    '/about',
    '/products',
    '/spares',
    '/csr',
    '/rd',
    '/government-tender',
    '/contact',
    '/sitemap',
];

// Product data (imported or defined here for simplicity in script)
const products = [
    "combined-jetting-cum-suction-machine",
    "super-sucker-machine",
    "sewer-grabbing-manhole-desilting-machine",
    "gully-suction-emptier-trailer-mounted",
    "bucket-type-sewer-cleaning-machine",
    "sewer-rodding-machine",
    "litter-picker",
    "refuse-garbage-compactor",
    "road-sweeper",
    "industrial-vacuum-cleaning-machine-ivc-super-sucker",
    "anti-smog-gun-fogging-system",
    "skylift-working-platforms",
    "mobile-oil-spill-recovery-unit-mosr",
];

const generateSitemap = () => {
    const date = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static routes
    staticRoutes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}${route}</loc>\n`;
        xml += `    <lastmod>${date}</lastmod>\n`;
        xml += `    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>\n`;
        xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
        xml += '  </url>\n';
    });

    // Add dynamic product routes
    products.forEach(slug => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}/products/${slug}</loc>\n`;
        xml += `    <lastmod>${date}</lastmod>\n`;
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.7</priority>\n';
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    const outputPath = path.resolve(process.cwd(), 'public/sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`Sitemap generated successfully at ${outputPath}`);
};

generateSitemap();
