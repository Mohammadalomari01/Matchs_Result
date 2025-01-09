import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  implements OnInit, AfterViewInit  {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // You can initialize data here
  }

  ngAfterViewInit() {
    // Add the script to the DOM after the view is initialized
    this.loadScript('https://ls.soccersapi.com/widget/res/awo_w7543_67802cba943cf/widget.js');
  }

  // Function to dynamically load the external script
  loadScript(url: string) {
    const script = this.renderer.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}

