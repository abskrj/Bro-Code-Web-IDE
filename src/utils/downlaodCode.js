const downloadCode = (code) => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = "bro-code.html";
    document.body.appendChild(element);
    element.click();
}

export default downloadCode;