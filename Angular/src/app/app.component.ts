import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
      <p>Image Compare Component</p>
    <image-compare label-text="Screen Reader Label Text">
        <img slot="image-1" alt="Alt Text" src="https://image-compare-component.netlify.app/assets/images/example-image.svg"/>
        <img slot="image-2" alt="Alt text" src="https://image-compare-component.netlify.app/assets/images/example-image2.svg"/>
    </image-compare>
  `,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  styles: []
})
export class AppComponent {
  title = 'ng-lite-app';
}
