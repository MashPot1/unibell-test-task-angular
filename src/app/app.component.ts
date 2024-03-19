import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'unibell-test-task-angular';
  sounds = [
    {
      id: 1,
      name: 'Hungarian Rhapsody No. 6 Liszt',
      fileName: 'Liszt_Hungarian_Rhapsody6.mp3',
    },
    {
      id: 2,
      name: 'Hungarian Rhapsody No. 2 Liszt',
      fileName: 'Liszt_Hungarian_Rhapsody2.mp3',
    },
    {
      id: 3,
      name: 'Entertainer Scott Joplin',
      fileName: 'Entertainer.mp3',
    },
    {
      id: 4,
      name: 'Rose Leaf Rag Scott Joplin',
      fileName: 'Rose_Leaf_Rag_by_Scott_Joplin__1907_.mp3',
    },
  ];

  @ViewChild('audioPlayer', { static: false }) audioPlayer:
    | ElementRef
    | undefined;

  onSelectedSoundChange() {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.load();
    }
  }

  selectedSound: any;

  playSound(sound: any) {
    this.selectedSound = sound;
    this.onSelectedSoundChange();
  }
}
