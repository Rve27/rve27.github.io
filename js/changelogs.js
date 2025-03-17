document.addEventListener('DOMContentLoaded', function() {
    const changelogElement = document.getElementById("rvkernel-mi8937-changelog");
    const url = "https://raw.githubusercontent.com/Rv-Project/RvKernel-Changelogs/refs/heads/main/Mi8937.md";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const htmlContent = marked.parse(data);
            changelogElement.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching the changelog:', error);
            changelogElement.innerHTML = '<p>Error fetching the changelog.</p>';
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const changelogElement = document.getElementById("rvkernel-mi845-changelog");
    const url = "https://raw.githubusercontent.com/Rv-Project/RvKernel-Changelogs/refs/heads/main/Mi845.md";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const htmlContent = marked.parse(data);
            changelogElement.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching the changelog:', error);
            changelogElement.innerHTML = '<p>Error fetching the changelog.</p>';
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const changelogElement = document.getElementById("rvkernel-alioth-changelog");
    const url = "https://raw.githubusercontent.com/Rv-Project/RvKernel-Changelogs/refs/heads/main/alioth.md";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const htmlContent = marked.parse(data);
            changelogElement.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching the changelog:', error);
            changelogElement.innerHTML = '<p>Error fetching the changelog.</p>';
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const changelogElement = document.getElementById("axion-beryllium-changelog");
    const url = "https://raw.githubusercontent.com/Rve27/axion-beryllium/refs/heads/main/changelogs.md";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const htmlContent = marked.parse(data);
            changelogElement.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error fetching the changelog:', error);
            changelogElement.innerHTML = '<p>Error fetching the changelog.</p>';
        });
});