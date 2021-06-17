
const mergeAllCode = (html, css, js) => {
    const parser = new DOMParser();

    const style = document.createElement('style');
    style.textContent = css ?? "";

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = js ?? "";

    const parsedHTML = parser.parseFromString(html, 'text/html');
    parsedHTML.documentElement.appendChild(style);
    parsedHTML.documentElement.appendChild(script);

    return parsedHTML.documentElement.outerHTML;
}

export default mergeAllCode;