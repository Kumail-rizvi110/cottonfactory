import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginationModel } from './pagination.model';

@Injectable()
export class PaginationService {
    private paginationModel: PaginationModel;

    get page(): number {
        return this.paginationModel.pageIndex;
    }

    get selectItemsPerPage(): number[] {
        return this.paginationModel.selectItemsPerPage;
    }

    get pageCount(): number {
        return this.paginationModel.pageSize;
    }
    set pageCount(size: number) 
    {
        this.paginationModel.pageSize = size;
    }
    get defaultPageSizeIndex(): number
    {
        return this.paginationModel.defaultPageSizeIndex;
    }
   

    constructor() {
        this.paginationModel = new PaginationModel();
    }

    change(pageEvent: PageEvent) {

        this.paginationModel.pageIndex = pageEvent.pageIndex + 1;
        this.paginationModel.pageSize = pageEvent.pageSize;
        this.paginationModel.allItemsLength = pageEvent.length;
    }
}
