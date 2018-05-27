const baseURL = 'http://192.168.0.30:3001'

export async function getJsonResponse (response) {
    let json
    console.log('response IN JSON', response)
    try {
        json = await response.json()
        if (response.ok) return json
    } catch (error) {
        console.error('Failed to fetch', json)
        return false
    }
}
export async function restGet (uri, headers = {}) {
    const authorizationHeaders = {}
    console.log('IN GET', `${baseURL}${uri}`)
    return fetch(`${baseURL}${uri}`, {
        mode: 'cors',
        headers: {
        ...headers,
        ...authorizationHeaders,
        'content-type': 'application/json'
        }
    })
    .then(getJsonResponse)
    .catch((err) => console.warn('ERRORCATCH', err))
}


export async function restPost (uri, body, headers = {}) {
    const authorizationHeaders = {}
    return fetch(`${baseURL}${uri}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
        ...headers,
        ...authorizationHeaders,
        'content-type': 'application/json'
        },
        body: JSON.stringify(body) }
    )
    .then(getJsonResponse)
}
