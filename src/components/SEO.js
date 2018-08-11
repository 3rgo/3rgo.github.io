import React from "react";
import Helmet from "react-helmet";
import config from "../utils/config";

const SEO = () => {
    const title = config.siteTitle;
    const description = config.siteDescription;
    const url = config.siteUrl;
    const image = config.siteImage;

    return (
        <Helmet>
            <html lang="fr" />
            {/* General tags */}
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <meta name="description" content={description} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            <body id="page-top" />
        </Helmet>
    );
};

export default SEO;
