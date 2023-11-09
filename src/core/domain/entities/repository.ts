export class RepositoryData {
    public readonly id: number
    public readonly name: string
    public readonly description: string
    public readonly language: string
    public readonly html_url: string
    public readonly forks: number

    constructor(data: RepositoryData.Data) {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.language = data.language
        this.html_url = data.html_url
        this.forks = data.forks
    }
}

export namespace RepositoryData {
    export type Data = {
        id: number
        name: string
        description: string
        language: string
        html_url: string
        forks: number
    }
}