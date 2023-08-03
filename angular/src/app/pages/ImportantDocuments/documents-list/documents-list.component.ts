import { Component, OnInit } from '@angular/core';
import { AppConsts } from "@shared/AppConsts";
import { HttpClient } from '@angular/common/http';
import { VendorsService } from '@shared/services/Vendors-service';
import { ImportantDocumentsDto } from '@shared/Dto/ImportantDocumentsDto';
import { forEach, result } from 'lodash';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {
// Variable to store shortLink from api response


  constructor(private httpClient: HttpClient,private VendorsService: VendorsService) { }
  images: any[] = [];

  ngOnInit() {
    this.getImages();

  }

 
  
  getImages(): void {
    const id = 1; // Provide the ID for which you want to retrieve the images
    this.VendorsService.getImages(id)
      .subscribe(Response => {
        debugger
      this.images.push();
    
        
      });
    
  }
}
