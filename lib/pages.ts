import data from '../content/content.json';
import pages from '../content/pages.json';

export const getPagesIds = () => {
    return Object.keys(data).map(key => ({
        params: {
            id: key
        }
    }))
}

export const getPageDataById = (id) => {
    return data[id]
}

export const getPageData = () => {
    return data
}

export const getMenu = () => {
    return pages
}