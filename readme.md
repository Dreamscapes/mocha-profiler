# mocha-profiler

> Generate a CPU profile of your Mocha test suite execution

## Overview
This Mocha hook allows you to generate a V8 CPU profile of your test suite's execution. The profiling starts immediately before the first test is run and ends immediately after all tests run. This is accomplished using Mocha's `beforeAll()` and `afterAll()` hooks.

The benefits of doing this are that the CPU profile will not include functions which get only executed during your application's startup or, even worse, on-the-fly source code compilation.

## Installation

1. Install the package: `npm i -D mocha-profiler`
1. Add the package to your _.mocharc.js_ configuration file:

```js
module.exports = {
 require: [
   'mocha-explorer',
 ],
}
```

## Usage

1. Run your test suite
1. A file is generated in your current working directory

### VS Code

1. Install [`ms-vscode.vscode-js-profile-table`][vscode-profile-table] VS Code extension
1. Just click on the file from VS Code's explorer
1. Enjoy

![VS Code screenshot][vscode-profile-screenshot]

### Chrome

1. In Chrome, navigate to [_chrome://inspect_](chrome://inspect)
1. Open dedicated DevTools for Node
1. Go to _Profiler_ tab
1. Right-click in the sidebar (below the _Profiles_ header) and select _Load..._
1. Navigate to the generated CPU profile and load it
1. Enjoy

## License

See the [LICENSE](LICENSE) file.

[vscode-profile-table]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-js-profile-table
[vscode-profile-screenshot]: https://user-images.githubusercontent.com/3058150/114101062-7c84f680-98c5-11eb-8b59-4beaa6981535.png
