# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### Screenshot

![](./assets/Screenshot_Akin%20Holo%20Solution_QR%20Code%20Component.png)



### Links

- Solution URL: https://github.com/akin-holo/frontendmentor-challenge_QRcode
- Live Site URL: https://frontendmentor-solution-qrcode.netlify.app


### Built with

- Semantic HTML5 markup
- CSS custom properties
- QRCode.js - JavaScript Library



### What I learned

During this challenge, I learned the usefulness of transparency in color. At first, I was faced with the challenge of including the inner circles behind the QR code. When I first did, the circle overshadow the parent element. I tried z-index, still can't get what I wanted until it came to my mind to transparent the background-color of the elements. This helped to hide the overshadow. 

Here is the markdown:

```html
 <div class="inner-circle top-inner-circle"></div>
 <div class="inner-circle bottom-inner-circle"></div>
```
```css
  .inner-circle {
    position: absolute;
    width: 180px;
    height: 180px;
    background-color: #ffffff1f;
    border-radius: 50%;
}
```

Also, I learned how to generate QR Code, knowing the basic argument

```js
new QRCode(target, options);
```


### Useful resources

- Greekforgreek https://www.geeksforgeeks.org/how-to-make-a-qr-code-generator-using-qrcode-js/ 

- David Shimjs https://davidshimjs.github.io/qrcodejs/ 

The two resources helped me to understand how to generate QRCode using javascript


## Author

- Website - https://frontendmentor-solution-qrcode.netlify.app/
- Frontend Mentor - https://www.frontendmentor.io/profile/akin-holo
- Twitter - https://x.com/AkinHolo
