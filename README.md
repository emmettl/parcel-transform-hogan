# parcel-transform-hogan

This Parcel 2 plugin supports transforming mustache templates into ES6 at build
time.
## Sample
```js
import myTemplate from "./template.mustache"

const html = myTemplate.render({ name: "fred"});
```

```handlebars
<div>Hello {name}</div>
```

## Configuration
Add the following to your `.parcelrc`
```json
{
  "transformers": {
    "*.mustache": ["parcel-transformer-hogan"]
  }
}
```