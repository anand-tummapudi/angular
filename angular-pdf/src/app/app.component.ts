import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PDF Upload';
  @ViewChild('htmlData') htmlData!: ElementRef;
  
  USERS = [
    {
      id:1,
      name:'Anand',
      email:'anjiammu@gmail.com',
      phone:'1-609-721-2122'
    },
    {
      id:1,
      name:'Sam',
      email:'sam@gmail.com',
      phone:'1-609-721-6212'
    },
    {
      id:1,
      name:'Arvind',
      email:'arvind@gmail.com',
      phone:'1-609-721-3222'
    },
    {
      id:1,
      name:'Archana',
      email:'archana@gmail.com',
      phone:'1-609-721-4522'
    }
  ];

  constructor(){

  }

  public openPDF():void{
    let DATA: any = document.getElementById('htmlData');

    html2canvas(DATA).then((canvas)=>{
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth)/canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p','mm','a4');
      let position = 0;
      pdf.addImage(FILEURI,'PNG',0,position,fileWidth,fileHeight);
      pdf.save('angular-demo.pdf');
    });
  }

}
