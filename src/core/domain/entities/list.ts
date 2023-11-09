export class ListData {
    public id: number
    public title: string
    public desc?: string
    public route: string

    constructor(data: ListData.Data) {
        this.id = data.id
        this.title = data.title
        this.desc = data.desc
        this.route = data.route
    }
}

export namespace ListData {
    export type Data = {
        id: number
        title: string
        desc?: string
        route: string
    }
}