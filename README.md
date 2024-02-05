# Variables

<br />

After using a subset of the excellent [Open Props](https://open-props.style/) for quite some time, I reached a point where I needed my own set of variables. I am grateful to the authors not only for creating something that perfectly fit my needs, but also for how it simplified my daily workflow.

This is a collection of the bare minimum design tokens I require in order to start transforming some sketches into a website, plus some other common sizes I keep using over and over again.

I believe web design is all about spacings and typography. And that's all those variables are about.

## Usage

Pick the groups you need and copy-paste them in your global stylesheet.

<blockquote>
<small>

Alternatively, you may [download](https://github.com/smastrom/variables/blob/main/variables.css) the full stylesheet locally or fetch it via [CDN](https://cdn.jsdelivr.net/gh/smastrom/variables/variables.css). A version without hyphens (`--z1`) is also available on [GitHub](https://github.com/smastrom/variables/blob/main/variables-flat.css) and [CDN](https://cdn.jsdelivr.net/gh/smastrom/variables/variables-flat.css).

</small>
</blockquote>

### Z-index

```css
:root {
  --z-default: 0;
  --z-behind: -1;
  --z-max: 2147483647;

  --z-1: 5;
  --z-2: 10;
  --z-3: 15;
  --z-4: 20;
  --z-5: 25;
  --z-6: 30;
}
```

### Font size

```css
:root {
  --f-07: 0.75rem;
  --f-08: 0.825rem;
  --f-09: 0.925rem;
  --f-1: 1rem;
  --f-2: 1.125rem;
  --f-3: 1.25rem;
  --f-4: 2rem;
  --f-5: 2.25rem;
  --f-6: 2.5rem;
  --f-7: 3rem;
  --f-8: 4rem;
}
```

### Line height

```css
:root {
  --lh-normal: normal;

  --lh-0: 0;
  --lh-1: 1.125;
  --lh-2: 1.25;
  --lh-3: 1.325;
  --lh-4: 1.4;
  --lh-5: 1.5;
  --lh-6: 1.625;
}
```

### Border width

```css
:root {
  --b-none: 0px;

  --b-1: 1px;
  --b-2: 2px;
  --b-3: 4px;
}
```

### Border radius

```css
:root {
  --r-none: 0px;
  --r-max: 1e5px;

  --r-1: 2px;
  --r-2: 5px;
  --r-3: 0.5rem;
  --r-4: 1rem;
}
```

### Spacing and sizes

```css
:root {
  --s-0: 0px;
  --s-05: 0.5rem;
  --s-1: 1rem;
  --s-2: 1.25rem;
  --s-3: 1.875rem;
  --s-4: 2rem;
  --s-5: 2.5rem;
  --s-6: 2.75rem;
  --s-7: 3rem;
  --s-8: 3.5rem;
  --s-9: 4rem;
  --s-10: 5rem;
}
```

### Common sizes

```css
:root {
  --header-0: 60px;
  --header-1: 80px;
  --header-2: 100px;

  --sidebar-0: 270px;
  --sidebar-1: 300px;

  --container-0: 900px;
  --container-1: 1100px;
  --container-2: 1240px;
  --container-3: 1360px;
  --container-4: 1440px;
  --container-5: 1600px;
  --container-6: 1680px;

  --copy-0: 625px;
  --copy-1: 700px;
  --copy-2: 800px;

  --icon-0: 1rem;
  --icon-1: 1.5rem;
  --icon-2: 2rem;
  --icon-3: 2.5rem;
}
```

## License

MIT
