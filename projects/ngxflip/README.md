

# Simple Angualr 6+ plug and play Flip component
#### For Angular 4 and less than, Please use https://www.npmjs.com/package/ngx-flip 
## Demo
<p align="center">
<img src ="https://github.com/ritsrivastava01/ngxFlip/blob/master/Flip.gif" /></p>

## Install it with npm
npm install ngx-flip --save

## Usage
### Import the Flip Module in your app.module.ts file
```
  
  import { FlipModule } from 'ngx-Flip';
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
  <ngx-flip [flip]="flipDiv">
   <div front>Front</div>
   <div back>Back</div>
 </ngx-flip>
 
  Where
  flip : boolean variable => used to flip the front and back div
  <div front>Front</div> => Front div -- add 'front' as attribute to identify as front div
  <div back>Back</div> => Back div -- add 'back' as attribute to identify as back div
```

## Running unit tests

coming soon. 

## Running end-to-end tests

coming soon.

## Further help

pull request always welcome!!!
