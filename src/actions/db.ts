



export const parametrizedAxios = (params: object) =>
    Object
        .entries(params)
        .map(([key, val]) => `${key}=${val}`)
        .join('&');