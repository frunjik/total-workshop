# Explorer demo

## !!! WARNING !!!

This code is highly experimental and will (depending on settings),
*allow access to the complete file system of you server*.
Don't use this if you don't know what you are doing !!!

### Features

- Allows users to edit, upload, move, rename and remove (text) files and folders.
- [Built on Total.js/Files](https://github.com/totaljs/files)

### Setup

- `$> git clone`
- `$> npm install`
- `$> node index.js`
- `http://127.0.0.1:8000`

### Authorization

Inside `definitions/auth.js` you can implement
your own authorization using `AUTH` delegate.
Currently only users with sa: true have priviliged access.
See:
- ./config
- ./definitions/auth.js
- ./definitions/func.js

### Powered by Total.js

- [Documentation](https://docs.totaljs.com)
- [Join Total.js Telegram](https://t.me/totaljs)
- [Support](https://www.totaljs.com/support/)
