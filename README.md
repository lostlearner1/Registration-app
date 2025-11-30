# Online Registration Form (HTML, CSS, JS/jQuery, PHP)

This is a simple web application (registration form) that accepts user input, processes it using PHP, and displays formatted output in the browser. The page supports viewing the formatted output in a new window and printing it with styling.

## Files
- `index.html` — The form and front-end UI.
- `style.css` — Styling for the form and printed output.
- `script.js` — jQuery code for validation and AJAX submission; opens new window / triggers print.
- `process.php` — Server-side script that sanitizes input and returns formatted HTML.
- `.gitignore` — recommended gitignore entry
- `README.md` — this file

## How to run locally (using XAMPP / any PHP-capable server)
1. Install XAMPP (or similar stack) and start Apache server.
2. Place the project folder inside your server's document root. For XAMPP on Windows this is typically: `C:\xampp\htdocs\registration_app`.
3. Open web browser and visit: `http://localhost/registration_app/index.html`.
4. Fill the form and click **Submit**. The output will be displayed below the form. Use **Open in new window** or **Print** to view/print the formatted output.

## Hosting on GitHub
- GitHub can host this repository (code only). Create a new repo and push files.
- **Important:** GitHub Pages serves static sites and does not run PHP. To have the PHP backend working you must host on a server that supports PHP (shared hosting, VPS, Replit with PHP, 000webhost, or similar). You can still host the code on GitHub and deploy the PHP-enabled site elsewhere.

## Security notes
- This is an educational example — input is sanitized for HTML output but there is no CSRF protection, file uploads, database, or rate-limiting.
- For production, always validate on server-side and use HTTPS and further hardening.

## License
MIT — feel free to adapt for learning and assignments.
