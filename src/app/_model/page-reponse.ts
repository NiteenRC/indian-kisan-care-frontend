export class PageResponse<DTO>{
    content: DTO[] | undefined;
    count: number | undefined;
    totalElements: number | undefined;
}