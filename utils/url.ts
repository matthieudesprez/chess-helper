export const getSlugFromName = (name: string) => name.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase()