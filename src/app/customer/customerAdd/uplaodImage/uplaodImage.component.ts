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
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  selectFiles(event) {
    let uploadData = new FormData();
    let Files: File;
    Files = event.target.files[0];
      uploadData.append('images', Files,Files.name);
      console.log(Files.name);
    this.onUpload(uploadData);
  }
  onUpload(pic) {
    console.log(pic);

    this.http
      .post(environment.apiUrl+'costumers/uplaodImage', pic, {
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
