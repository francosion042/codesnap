# codeSnap

CodeSnap is a node.js library designed to programmatically generate images of code snippets using the Carbon.now.sh service. It provides a simple and convenient way to create beautiful snapshots of your code for automated sharing in documentation, presentations, or social media.

## Installation

To install CodeSnap, you can use npm or yarn:

```bash
npm install codesnap
```

or

```bash
yarn add codesnap
```

## Usage

```javascript
import CodeSnap from 'codesnap';

const config = {
  theme: 'Dracula',
  backgroundColor: 'Black',
  numberLines: true
};

const codeSnap = new CodeSnap(config);

const code = `
function greet() {
  console.log('Hello, world!');
}

greet();
`;

codeSnap.snap(code);
```

## Configuration

The `CodeSnap` constructor accepts a configuration object with the following properties:

- `theme`: The color theme to use for the code snippet.
- `backgroundColor`: The background color of the code snippet.
- `numberLines`: (Optional) A boolean value indicating whether to display line numbers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

CodeSnap is powered by [Carbon.now.sh](https://carbon.now.sh/) and [Puppeteer](https://github.com/puppeteer/puppeteer).
```markdown
```