import { WRITINGS_URL } from "../data/constants";
import type { WritingState, WritingTags } from "../types/state";
import type { Article, Writing } from "../types/writings";

const sortByPublishDate = (
    { published: publishedA }: { published: string },
    { published: publishedB }: { published: string },
): number => {
    if (publishedA < publishedB) {
        return 1;
    } else if (publishedA > publishedB) {
        return -1;
    }
    return 0;
};

const getTags = (writings: Writing[]): WritingTags => {
    return Object.fromEntries(
        Array.from(
            new Set(writings.flatMap((writing: Writing) => writing.tags)),
        ).map((tag) => [
            tag,
            writings
                .filter(({ tags }) => tags.indexOf(tag) !== -1)
                .map(({ id }) => id),
        ]),
    );
};

export const loadWritings = async (): Promise<WritingState> => {
    const writings = await (await fetch(WRITINGS_URL)).json();

    return {
        articles: (writings.articles as Article[]).sort(sortByPublishDate),
        notes: (writings.notes as Writing[]).sort(sortByPublishDate),
        articleTags: getTags(writings.articles),
        noteTags: getTags(writings.notes),
    };
};
