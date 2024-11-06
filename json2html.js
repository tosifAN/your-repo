export default function json2html(data) {
    // Extract column headers based on unique keys in data array
    const columns = Array.from(new Set(data.flatMap(Object.keys)));

    // Start the HTML table string with the required attribute
    let html = `<table data-user="tosif1355@gmail.com">\n`;

    // Create table headers
    html += "  <thead>\n    <tr>";
    columns.forEach(column => {
        html += `<th>${column}</th>`;
    });
    html += "</tr>\n  </thead>\n";

    // Create table body
    html += "  <tbody>\n";
    data.forEach(row => {
        html += "    <tr>";
        columns.forEach(column => {
            html += `<td>${row[column] !== undefined ? row[column] : ""}</td>`;
        });
        html += "</tr>\n";
    });
    html += "  </tbody>\n</table>";

    return html;
}