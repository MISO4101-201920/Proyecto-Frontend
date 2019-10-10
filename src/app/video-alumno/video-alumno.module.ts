import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbdModalContent, VideoAlumnoComponent, NgbdModalContentRetroalimentacion} from './video-alumno.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '', component: VideoAlumnoComponent },
];

@NgModule({
    declarations: [VideoAlumnoComponent, NgbdModalContent, NgbdModalContentRetroalimentacion],
    imports: [
      NgbModule,
      YoutubePlayerModule,
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule, VideoAlumnoComponent],
    entryComponents: [NgbdModalContent, NgbdModalContentRetroalimentacion]
  })
  export class VideoAlumnoModule { }
  