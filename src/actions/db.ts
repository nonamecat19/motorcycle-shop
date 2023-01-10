export class DatabaseActions {
    protected parametrizedAxios = (params: object) =>
        Object
            .entries(params)
            .map(([key, val]) => `${key}=${val}`)
            .join('&');
}

