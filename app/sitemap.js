export default function sitemap() {
  const baseUrl = 'https://www.thesalesgauntlet.co';
  const routes = ['', '/features', '/methodology', '/demo', '/pricing', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
