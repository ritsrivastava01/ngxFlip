

# Simple Angular based plug and play Flip component

[![npm version](https://badge.fury.io/js/ngx-flip.svg)](https://badge.fury.io/js/ngx-flip)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ritsrivastava01/ngxFlip.svg)
![GitHub stars](https://img.shields.io/github/stars/ritsrivastava01/ngxFlip.svg)
![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)

*now supported Angular 9+*

## Demo
<p align="center">
<img src ="https://github.com/ritsrivastava01/ngxFlip/raw/master/Flip.gif" /></p>

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
  <ngx-flip [flip]="flipDiv">
   <div front>Front</div>
   <div back>Back</div>
 </ngx-flip>
 
  Where
  flip : boolean variable => used to flip the front and back div
  <div front>Front</div> => Front div -- add 'front' as attribute to identify as front div
  <div back>Back</div> => Back div -- add 'back' as attribute to identify as back div
```

## License

[MIT](https://opensource.org/licenses/MIT) 

## Running unit tests

coming soon. 

## Running end-to-end tests

coming soon.

## Further help

Pull request always welcome!!!
