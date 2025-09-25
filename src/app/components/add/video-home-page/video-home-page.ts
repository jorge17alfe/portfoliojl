import {AfterViewInit, Component, ElementRef, ViewChild , OnInit} from '@angular/core';

@Component({
  selector: 'app-video-home-page',
  imports: [],
  templateUrl: './video-home-page.html',
  styleUrl: './video-home-page.css'
})

export class VideoHomePage   {
 @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.bgVideo.nativeElement;
    video.muted = true; // asegurar que arranque en mute
    video.play().catch(err => {
      console.log('El navegador bloqueó el autoplay:', err);
    });
    
  }

  activeSound(player: HTMLAudioElement) {
    player.muted = false;
    player.play().catch(err => {
      console.log('El navegador bloqueó el sonido:', err);
    });
  }
}


