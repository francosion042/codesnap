import CodeSnap from "../lib/CodeSnap";

(async () => {
  const codeSnap = new CodeSnap({
    theme: "Monokai",
    backgroundColor: "Cyan",
    numberLines: true,
  });

  const code = `
    function greet() {
      console.log('Hello, world!');
    }
    
    greet();
    `;

  await codeSnap.snap(code);
})();
