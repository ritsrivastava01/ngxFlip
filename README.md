

# Simple plug and play Flip component

## Demo
<p align="center">
<img src ="https://github.com/ritsrivastava01/ngxFlip/blob/master/Flip.gif" /></p>

## Install it with npm
npm install ngx-flip --save

## Usage
### Import the Flip Module in your app.module.ts file
```
  
  import { FlipModule } from 'ngx-flip';
  // other imports 
  
  @NgModule({
    imports: [
      // other imports 
      FlipModule
    ],
    // ...
  })
  export class AppModule {}

```
### Add selector in template file my-component.html
```
  <ngx-flip [flip]="flipDiv" (click)="onClick()">
   <div front>Front</div>
   <div back>Back</div>
 </ngx-flip>
 
  Where
  flip : boolean variable => used to flip the front and back div
  <div front>Front</div> => Front div -- add 'front' as attribute to identify as front div
  <div back>Back</div> => Back div -- add 'back' as attribute to identify as back div
```

```typescript
import { Component } from '@angular/core';

@Component({ /* ... */ })
export class MyComponent {
  flipDiv = false;
  onClick() {
    this.flipDiv = !this.flipDiv;
  }
}
```

## Running unit tests

```code
ng test
```

## Running end-to-end tests

coming soon.

## Further help

pull request always welcome!!!
