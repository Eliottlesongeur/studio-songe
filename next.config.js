/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // La page index /projets a été retirée (la section « Réalisations » de la
      // home fait office de liste ; les cas clients restent en /projets/<slug>).
      // Redirection permanente pour ne pas laisser de 404 sur l'ancienne URL.
      {
        source: "/projets",
        destination: "/#realisations",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
