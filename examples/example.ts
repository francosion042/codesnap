import CodeSnap from "../lib/CodeSnap";

(async () => {
    const codeSnap = new CodeSnap({theme: 'Monokai', backgroundColor: 'White',numberLines: true})

    await codeSnap.snap("console.log('Hello')")
})()