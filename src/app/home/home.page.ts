import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {

  signaturePad:any;

  constructor() { }
  ngOnInit(): void {
    let canvas: any = document.querySelector("canvas");
    this.signaturePad = new SignaturePad(canvas, {
      minWidth: 1,
      maxWidth: 2,
      penColor: "rgb(66, 133, 244)"
    });
   
  }

  saveSignature(){
    this.signaturePad.toDataURL(); // save image as PNG
    console.log(this.signaturePad.toDataURL()); 
  }

  Clear(){
    this.signaturePad.clear();
    this.signaturePad.isEmpty();
    this.signaturePad.off();
    this.signaturePad.on();
  }
}
