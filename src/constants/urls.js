const baseUrlJson = 'https://jsonplaceholder.typicode.com'
const baseUrlSpaceX = 'https://api.spacexdata.com/v3'

const posts = '/posts'
const launches = '/launches'

const urls = {
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    },
    launches
}


export {
    baseUrlJson,
    baseUrlSpaceX,
    urls
}