const downloadCode = (code) => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "download.txt";
    document.body.appendChild(element);
    element.click();
}

export default downloadCode;