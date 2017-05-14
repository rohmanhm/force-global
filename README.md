# 🌏 Force Global
> Force place your module into global if possible

# Install
  * NPM
  ```bash
  npm install --save force-global
  ```
  * Yarn
  ```bash
  yarn add force-global
  ```

# Usage

```javascript
// CommonJS
const { ForceGlobal } = require('force-global')
// ES6+
import ForceGlobal from 'force-global'

function add (a, b) {
  return a + b
}

ForceGlobal('SuperAddNumber', add)
// Now you can access your global with function SuperAddNumber
```

## License
MIT © [M Habib Rohman](https://github.com/rohmanhm)