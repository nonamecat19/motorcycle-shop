export class DatabaseActions {
    protected parametrizedAxios = (params: object): string =>
        Object
            .entries(params)
            .map(([key, val]) => `${key}=${val}`)
            .join('&');
}

