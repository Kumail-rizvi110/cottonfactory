export class PaginationModel {
    selectItemsPerPage: number[] = [3, 5, 10, 25, 100];
    defaultPageSizeIndex = 2;
    pageSize = this.selectItemsPerPage[1];
    pageIndex = 1;
    allItemsLength = 0;
}
