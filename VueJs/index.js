import "../Components/ImageCompareComponent.js";
var mySimpleApp = new Vue({
    el: '#mainapp',
    template: `
    <div id="app-wrapper">
          <h2 id="app-title">I don't think a Vue app can be much simpler than this!</h2>
          <image-compare label-text="Screen Reader Label Text">
          <img slot="image-1" alt="Alt Text" src="https://image-compare-component.netlify.app/assets/images/example-image.svg"/>
          <img slot="image-2" alt="Alt text" src="https://image-compare-component.netlify.app/assets/images/example-image2.svg"/>
      </image-compare>
  
    </div>
    
    `
  })