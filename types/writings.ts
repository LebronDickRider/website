export type SiteState = {
    articles: Article[];
    notes: Writing[];
    articleTags: string[];
    noteTags: string[];
};

export type Writing = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    published: string;
    filename: string;
};

export type Article = Writing & {
    heroImage: string;
};
