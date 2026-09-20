import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://mohitraghav1318.vercel.app';

function SEO({
    title,
    description,
    path = '/',
}) {
    const url = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            <link rel="canonical" href={url} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content={`${SITE_URL}/og-image.png`}
            />
            <meta
                property="og:image:alt"
                content="Mohit Raghav — Full Stack Developer & AI/ML Engineer"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta
                name="twitter:image"
                content={`${SITE_URL}/og-image.png`}
            />
        </Helmet>
    );
}

export default SEO;