 function changeContent() {
            // textContent - text kaliya ayuu beddela
            document.querySelector("#title").textContent = "Hello Muqdisho!";
            document.querySelector("#paragraph").textContent = "Paragraph-ka waa la beddelay!";

            // innerHTML - HTML ayuu beddela
            document.querySelector("#htmlContent").innerHTML = `
                <h3>Content cusub!</h3>
                <p>Tani waa <strong>HTML</strong> cusub!</p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            `;
        }