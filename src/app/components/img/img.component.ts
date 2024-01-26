import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {

  @Output() loaded = new EventEmitter<string>();
  @Input() img: string = ''
  imageDefault = '../../../assets/images/default_img.png';

  constructor(){
    // Before render
    // Do not put Async things in here
    console.log('constructor', 'ímg value =>', this.img)
  }

  ngOnInit(){
    // Before render
    // We put owr Async things in here
    // just run once
    console.log('ngOnInit', 'ímg value =>', this.img)
  }

  ngOnChanges(){
    //Before and between Renders
    // render every time there is a change
    console.log('ngOnChanges', 'ímg value =>', this.img)
  }

  ngAfterViewInit(){
    // After render
    // handle children - the render is already set on the Dom
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(){
    // before deleting the component (unmounting)
    console.log("before destroy component")
  }



  imageError(){
    this.img = this.imageDefault
  }

  imgLoaded(){
    console.log("log hijo")
    this.loaded.emit(this.img)
  }
}
