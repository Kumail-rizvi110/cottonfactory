import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VendorsService } from '@shared/services/Vendors-service';
import { AppConsts } from '@shared/AppConsts';


@Component({
  selector: 'app-documents-form',
  templateUrl: './documents-form.component.html',
  styleUrls: ['./documents-form.component.css']
})
export class DocumentsFormComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  selectedFile: File | null = null;
  constructor(private httpClient: HttpClient,private VendorsService: VendorsService) { }

  ngOnInit( ) {
  }
  imageUrl: string;

  // onFileSelected(files: FileList): void {
  //   debugger
  //   this.selectedFile = files.item(0);
  //  this.imageUrl = URL.createObjectURL(this.selectedFile);
  // }

  onFileSelected(files: FileList): void {debugger
    this.selectedFile = files.item(0);
    this.convertToBase64(this.selectedFile)
      .then((base64Image) => {
        this.imageUrl = base64Image;
      })
      .catch((error) => {
        debugger
        console.error('Error converting image to base64:', error);
      });
  }
  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  private REST_API_SERVER = AppConsts.remoteServiceBaseUrl; // "http://localhost:21021";

  uploadImage(): void {
    debugger
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('imageFile', this.selectedFile);

    this.httpClient.post(this.REST_API_SERVER + '/api/services/app/ImportantDocuments/Create', formData).subscribe(
      response => {
        console.log('Image uploaded successfully');
      },
      error => {
        console.error('Error uploading image:', error);
      }
    );
  }


}
