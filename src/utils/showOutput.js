const showOutput = (code) => {
    const iframe = document.getElementById('output__iframe');
    iframe.srcdoc = code;
}

export default showOutput;