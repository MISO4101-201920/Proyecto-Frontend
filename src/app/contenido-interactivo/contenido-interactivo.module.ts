import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContenidoComponent } from './lista-contenido/lista-contenido.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { AddContenidoACursoComponent } from './add-contenido-a-curso/add-contenido-a-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionModalComponent } from './question-modal/question-modal.component';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ReporteContenidoComponent } from './reporte-contenido/reporte-contenido.component';
import { MarkersComponent } from './markers/markers.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ManyAnswersComponent } from './many-answers/many-answers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ConfigurarContenidoInteractivoComponent } from './configurar-contenido-interactivo/configurar-contenido-interactivo.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { CrearSeleccionMultipleComponent } from './configurar-contenido-interactivo/crear-seleccion-multiple/crear-seleccion-multiple.component';
import { CrearPreguntaAbiertaComponent } from './configurar-contenido-interactivo/crear-pregunta-abierta/crear-pregunta-abierta.component';
import { DetalleContenidoInteractivoComponent } from './detalle-contenido-interactivo/detalle-contenido-interactivo.component';
import { CrearPreguntaVoFComponent } from './configurar-contenido-interactivo/crear-pregunta-vo-f/crear-pregunta-vo-f.component';
import { CrearPausaComponent } from './configurar-contenido-interactivo/crear-pausa/crear-pausa.component';
import { ServiceModule } from '../services/service.module';
const routes: Routes = [
  { path: '', component: ListaContenidoComponent },
  { path: 'reporte/:id', component: ReporteContenidoComponent },
  { path: 'manejar', component: MarkersComponent},
  { path: 'configurar/:id', component: ConfigurarContenidoInteractivoComponent},
  { path: 'detalle/:id', component: DetalleContenidoInteractivoComponent}
];

@NgModule({
  declarations: [ListaContenidoComponent, AddContenidoACursoComponent, ReporteContenidoComponent,
    MarkersComponent, ManyAnswersComponent, DetalleContenidoInteractivoComponent, ConfigurarContenidoInteractivoComponent,
    CrearSeleccionMultipleComponent, CrearPreguntaAbiertaComponent, CrearPausaComponent,CrearPreguntaVoFComponent
  ],
  imports: [
    ServiceModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RichTextEditorAllModule,
    FormsModule,
    MatDialogModule,
    YoutubePlayerModule
  ],
  exports: [RouterModule],
  entryComponents: [
    AddContenidoACursoComponent,
    CrearSeleccionMultipleComponent,
    CrearPreguntaAbiertaComponent,
    CrearPausaComponent,
    CrearPreguntaVoFComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
  ]
})
export class ContenidoInteractivoModule { }
