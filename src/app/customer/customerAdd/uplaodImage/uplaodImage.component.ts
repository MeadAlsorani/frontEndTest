import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-uplaodImage',
  templateUrl: './uplaodImage.component.html',
  styleUrls: ['./uplaodImage.component.css'],
})
export class UplaodImageComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  public uploadData = new FormData();
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  selectedFiles: File;
  selectFiles(event) {
    this.selectedFiles = event.target.files;
      this.uploadData.append('images', this.selectedFiles, this.selectFiles.name);
    this.onUpload();
  }
  onUpload() {
    this.http
      .post(environment.apiUrl+'costumers/uplaodImage', this.uploadData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
}
