export const useTags = (items: string[]) => {
    const tags = items.map(tag => (
        <span key={tag} className="tags__item">{tag}</span>
    ));

    return {
        tags,
    };
};