

# Angular based simple plug and play Flip component

## Screenshot

<div style="text-align:center"><img src ="https://github.com/ritsrivastava01/ngxFlip/blob/master/flip.gif" /></div>

## Installation
npm install ngx-Flip--save

## Usage
###Import the Flip Module in your app.module.ts file
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
##Add selector in template file my-component.html
```
  
  <ngx-flip [flip]="flipDiv">
   <div front >Front</div>
   <div back class="back">Back</div>
 </ngx-flip>
  Where
  flip : boolean variable => used to flip the front and back div
  <div front class="front">Front</div> => Front Div -- please add 'front' as attribute for front div
    <div back class="back">Back</div> => Back Div -- please add 'back' as attribute for back div


## Running unit tests

coming soon. 

## Running end-to-end tests

coming soon.

## Further help

pull request always welcome!!!
