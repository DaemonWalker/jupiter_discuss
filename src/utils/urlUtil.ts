export class UrlUtil {
    public static getIssuePage(id: number): string {
        return `/issues/${id}`;
    }
    public static getUserPage(id: number): string {
        return `/user/${id}`;
    }
    public static getBlockPage(id: number): string {
        return `/block/${id}`;
    }
}