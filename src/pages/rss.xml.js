import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Jerem Learner | Blog',
        description: "Mon voyage d'apprentissage d'Astro",
        site: 'localhost:4321',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>fr-fr</language>`,
    });
}