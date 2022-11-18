const httpHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
}

export default class HTTPService {
    static async get(url: string, headers?: any) {
        return await fetch(url, {...headers
        });
    }

    static async post(url: string, data: any, headers?: any) {
        return await fetch(url, {
            headers: { ...httpHeaders, ...headers },
            body: JSON.stringify(data),
            method: "POST"
        });
    }

    static async put(url: string, data: any, headers?: any) {
        return await fetch(url, {
            headers: { ...httpHeaders, headers },
            body: data,
            method: "PUT"
        });
    }

    static async delete(url: string, headers?: any) {
        return await fetch(url, {
            headers: { ...httpHeaders, headers },
            method: "DELETE"
        })
    }
}