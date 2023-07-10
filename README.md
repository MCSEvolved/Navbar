# MCS Navbar

this is the repo for the MCS navbar.
the navbar can be used in other repos by first installing it like this:

`npm i --save https://github.com/MCSEvolved/Navbar.git`

then the navbar can be imported like this

```
<script>
  import 'mcs-navbar'
</script>

<body>
  <mcs-navbar logoSrc="path/to/page/logo.svg"/>
</body>
```

### Type Errors
It's possible that typescript will show some problems, atleast when using react. 

If it complains about 'mcs-navbar' not being declared or 'mcs-navbar' not being a property on JSX.IntrinsicElements, add a file called `mcs-navbar.d.ts` and add the following:
```
declare module "mcs-navbar";

declare namespace JSX {
    interface IntrinsicElements {
        "mcs-navbar": {
            "logoSrc": string,
        }
    }
}
```
