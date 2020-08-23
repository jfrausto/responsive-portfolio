# My Responsive Portfolio

_Jesse Frausto // July 14th, 2020_

In this project, I create a mobile-first responsive portfolio using the Bootstrap 4 framework. I utilize bootstrap components and its utility classes to build a responsive layout that rearranges its parts, including images, according to screen size...

Throughout the source code, you can find instances of Bootstrap's grid system in which I utilize containers, rows, and columns. For example, in my custom Navbar found in each `html` page:

```
<header class="container-fluid mx-auto rounded custom-header">
```

with a `.row` class populated with two columns ...

```
<section class="col-sm-5 my-auto name">
<nav class="col my-auto custom-nav">
```

This grid system allows me to create columns and auto space them using their built-in classes. `.col-sm-5` sets a breakpoint at `sm` size and allows my two columns in the header/nav section to _stack_ beautifully below that point. I use utility classes such as `mx-auto` and `my-auto` to center my content in their containers. On an `xs` screen, the content takes up the whole screen perfect for a small smart device. Therein my `style.css` file I use a single **media query** to handle stylistic changes to make the design on mobile devices become centered and aesthetic.

In the Portfolio section, I use the **Card** component in combination with the grid system and `img-fluid` class to make the images in the cards responsive and flexible. On `xs` screens, each project in my portfolio takes up the whole screen.
In the Contact section, **Form** components can be found to be responsive in every screen size.
