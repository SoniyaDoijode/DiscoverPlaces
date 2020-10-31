import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string | File>();
  @ViewChild('filePicker') filePickerRef: ElementRef<HTMLInputElement>;
  @Input() showPreview = false;
  selectedImage : string;
  usePicker = false;
  constructor(private platform:Platform) { }

  ngOnInit() {
    console.log("Mobile",this.platform.is('mobile'))
    console.log("hybrid",this.platform.is('hybrid'))
    console.log("ios",this.platform.is('ios'))
    console.log("android",this.platform.is('android'))
    console.log("desktop",this.platform.is('desktop'))
    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.usePicker = true;
    }
  }

onPickImage(){
  if(!Capacitor.isPluginAvailable('Camera'))
  {
    this.filePickerRef.nativeElement.click();
    return;
  }
  Plugins.Camera.getPhoto({
    quality: 50,
    source : CameraSource.Prompt,
    correctOrientation : true,
    height: 320,
    width: 200,
    resultType : CameraResultType.DataUrl
  }).then(image=>{
    this.selectedImage = image.dataUrl;
    this.imagePick.emit(image.dataUrl)
  }).catch(err=>{
    console.log(err);
    if(this.usePicker){
      this.filePickerRef.nativeElement.click();
    }
   
    return false;
  })
}

onFileChosen(event : Event){
  console.log(event);
  const pickedFile = (event.target as HTMLInputElement).files[0];
  if(!pickedFile){
    return;
  }
  const fr = new FileReader;
  fr.onload = () =>{
    const dataUrl = fr.result.toString();
    this.selectedImage = dataUrl;
    this.imagePick.emit(pickedFile);

  }
  fr.readAsDataURL(pickedFile)

}

}
