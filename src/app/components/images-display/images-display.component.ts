import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ImageForDisplay } from '../../models/product.models';

@Component({
  selector: 'images-display',
  templateUrl: './images-display.component.html',
  styleUrls: ['./images-display.component.scss']
})
export class ImagesDisplayComponent implements OnInit {

  selectedImage : number = 0;
  safeImageBAckground : Array<SafeStyle> = new Array<SafeStyle>();

  _images : Array<ImageForDisplay>; 
  @Input()  
  set images(imagesArray : Array<ImageForDisplay>){ 
    imagesArray.map(x => {
      let safeStyle = this.sanitizer.bypassSecurityTrustStyle( `background-image: url(${x.imageUrl}); background-size: ${x.displayType}`);
      this.safeImageBAckground.push(safeStyle);
    });
    this._images = imagesArray;
  } 
  get images(){ return this._images; }

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() { }

}





