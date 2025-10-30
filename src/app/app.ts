import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-cta-2',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('ait-pich-cancel-cta-2');
  mensajeRecibido: string | null = '';
  private listenerRef: any;

  ngOnInit(): void {
    this.listenerRef = (event: CustomEvent) => {
      console.log('MF2 recibió mensaje desde MF1:', event.detail);
      this.mensajeRecibido += event.detail + ' ';
    };

    window.addEventListener('mf1:to:mf2', this.listenerRef as EventListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mf1:to:mf2', this.listenerRef as EventListener);
  }
}
