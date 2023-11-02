const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes,
    characters: {
        byIds: (ids) => `${characters}/${ids}`
    }
}

export {
    urls,
    baseURL
}
