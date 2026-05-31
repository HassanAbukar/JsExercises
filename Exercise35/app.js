   function changeImage() {
            const image = document.querySelector("#myImage");

            // 1. Image URL
            const newURL = prompt("Enter new image URL:");
            if (newURL) image.src = newURL;

            // 2. Border color
            const borderColor = prompt("Enter border color (e.g. red, blue, #000):");
            if (borderColor) image.style.border = `3px solid ${borderColor}`;

            // 3. Width
            const width = prompt("Enter image width (px):");
            if (width) image.style.width = `${width}px`;

            // 4. Height
            const height = prompt("Enter image height (px):");
            if (height) image.style.height = `${height}px`;

            // 5. Border radius
            const borderRadius = prompt("Enter border radius (px):");
            if (borderRadius) image.style.borderRadius = `${borderRadius}px`;
        }