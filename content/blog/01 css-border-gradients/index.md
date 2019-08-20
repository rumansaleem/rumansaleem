---
title: CSS Gradients on Border and Text
slug: css-gradients-on-border-and-text
excerpt: Wanted to make your site look more colorful with CSS gradients? But, using gradients on borders and text is a little bit tricky with CSS. Let's wrap our heads around the tricks to make CSS gradients work on text and border.
published: false
author: Ruman Saleem
date: 2019-08-03
tags: [CSS, Border, Text, Gradients]
---

You might be familiar with usage of gradients as `background-image` or `background` shorthand property in CSS. 
But, have you ever tried using gradients as text color or border color? 

If you have, you might also know that CSS gradients doesn't work on `color` property, they can only be used as `image`. 

But, what if you want to use gradient for text color, or use a colorful gradient for borders?

That gets a little bit tricky with CSS. There are a couple of ways to ago about it, having their own pros and cons. 

Let's discuss these methods.

## Border with CSS Gradient

Let's first figure out how can we use gradient on borders.

### Method 1: Use `border-image` CSS Property
You can use `border-image-source` and `border-image-slice` CSS Property together to apply gradient on border. You can also combine those two using `border-image` shorthand property.

```html output
<style>
.border-gradient {
    border: 5px solid transparent;
    padding: .5rem;
    border-radius: 5px;
    border-image-source: linear-gradient(to right, red 0%, blue 100%); 
    border-image-slice: 1;
    /* Shorthand */
    /* border-image: 
        linear-gradient(to right, red 0%, blue 100%) 1;
    */
}
</style>
<div class="border-gradient">
    A div with gradient border using border-image property.
</div>
```

Let's understand what's going on here. 

First, the `border-image-source` property specifies the image to be used for the border. 

Now, border image specified is applied into 9 slices - 4 corners, 4 sides, and 1 middle area. You can specify the slicing behaviour for each of the slices. For Example - a single `5px` value would mean `5px` is used for each of the slices, for each side slice image will be sliced by a `5px` offset from that side (left right top bottom).

For more on `border-image-slice` property, see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice).

##### Pros
* The middle part can be left transparent or filled using `border-image-slice`.
* You can slice each part of border differently (useful when you want some special patterns with borders).

##### Cons
* We cannot make border image rounded, even if we give some amount of `border-radius`, that's not going to work.

### Method 2: Use `background-origin` with `background-image`

```html output
<style>
.border-gradient-rounded {
    padding: .5rem;
    border: 4px solid transparent;
    border-radius: 7px;
    background: linear-gradient(to right, white, white), linear-gradient(15deg, red , blue); 
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
}
</style>
<div class="border-gradient-rounded">
    A container with rounded corners and gradient borders. 
</div>
```

Before we understand the what's going on here, its better to first understand [`background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) and [`background-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) CSS properties at MDN, if you're not familiar.

Here, We are using two background images, one is the gradient that we intend to use for border, and the other one is a solid white color. 

Since, specifying solid color would apply `background-color` which cannot be clipped and its origin cannot be changed, so we use linear gradient to generate that solid color as image.

Next, We are positioning the `linear-gradient` background relative to corner under the borders, using `background-origin: border-box`. While keeping the other background (which is solid white) start from padding box corner. 

But if we dont have any border, padding-box and border-box remains same. So, we use a transparent border of required width so that we can have our gradient background bleeding out from under the solid white background.

We are not done yet, still both the backgrounds overlap each other. To clip these backgrounds to their specific region we use `background-clip` property to clip each of these background to their respective regions so that linear gradient is overlayed by the solid background and we have gradient borders.

##### Pros
* You can use rounded borders, works like a charm.

##### Cons
* You cannot have a transparent background. You can mimic the transparent background by using the same color as of background, but this breaks down when your background is not a solid color.

## Text with CSS Gradient

The `background-clip` property also accepts `text` value which clips the background within foreground text. This can be used to apply the gradient to text.

```html output
<style>
 .text-gradient {
    font-weight: bold;
    background: linear-gradient(to right, red, blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: rgba(0, 0, 0, 0.2);
 }
</style>
<span class="text-gradient">
    Text with css gradient
</span>
```

The `background-clip` property clips the linear gradient background to foreground text. But, gradient text is still not visible as it is exactly beneath the solid colored text. To reveal the gradient, we use `transparent` text color and here we go, we get the gradient on text. 

> ###### Note
> 
> The `background-clip: text;` is experimental. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility)

Text and border gradients can be used to build attractive call to action buttons. Let's combine gradient borders with gradient text.

```html output
<button class="border-gradient-rounded px-3 py-2">
    <span class="text-gradient">Awesome Button</span>
</button>
```
That's all, folks! 
I hope this post helped you learn something. 

Thank You!