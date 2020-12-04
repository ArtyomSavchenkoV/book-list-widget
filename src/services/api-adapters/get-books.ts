import { TBook } from '../../types/book-type';
/*
*   Response transformer
*/
export type TGetBookResponse = TBook[];
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