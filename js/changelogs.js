document.addEventListener('DOMContentLoaded', function() {
    const changelogs = [
        { id: "rvkernel-mi8937-changelog", url: "https://raw.githubusercontent.com/Rv-Project/RvKernel-Changelogs/refs/heads/main/Mi8937.md" },
        { id: "rvkernel-mi845-changelog", url: "https://raw.githubusercontent.com/Rv-Project/RvKernel-Changelogs/refs/heads/main/Mi845.md" },
        { id: "rvkernel-alioth-changelog", url: "https://raw.githubusercontent.com/Rv-Project/RvKernel-Changelogs/refs/heads/main/alioth.md" },
        { id: "axion-beryllium-changelog", url: "https://raw.githubusercontent.com/Rve27/beryllium/refs/heads/main/axion-changelogs.md" },
	{ id: "horizon-beryllium-changelog", url: "https://raw.githubusercontent.com/Rve27/beryllium/refs/heads/main/horizon-changelogs.md" }
    ];

    changelogs.forEach(changelog => {
        fetch(changelog.url)
            .then(response => response.text())
            .then(data => {
                const htmlContent = marked.parse(data);
                document.getElementById(changelog.id).innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('Error fetching the changelog:', error);
                document.getElementById(changelog.id).innerHTML = '<p>Error fetching the changelog.</p>';
            });
    });
});
