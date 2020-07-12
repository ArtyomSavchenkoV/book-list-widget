/*
*   Response transformer
*/
export type TGetBookResponse = {
    id: string,
    author: string,
    title: string,
    description: string,
    tags: string[]
}[];
interface ITransformGetBookResponse {
    (arg0: any): TGetBookResponse
}
export const transformGetBookResponse: ITransformGetBookResponse = (response) => {
    return response.items.map((el: any) => {
        return {
            id: String(el.id),
            author: String(el.author),
            title: String(el.title),
            description: String(el.description),
            tags: el.tags.map((tag: any) => String(tag))
        }
    })
}