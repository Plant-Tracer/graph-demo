document.getElementById('upload-csv1').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const csvText = e.target.result;
            parseAndPlotData(csvText);
        };
        reader.readAsText(file);
    }
});

function parseAndPlotData(csvText) {
    const data = Papa.parse(csvText, { header: true }).data;

    // Extract data for the plots
    const frameNumbers = data.map(row => parseInt(row['frame_number']));
    const apexX = data.map(row => parseInt(row['apex x']));
    const apexY = data.map(row => parseInt(row['apex y']));

    // Create the first chart for apex X
    const ctx1 = document.getElementById('apexXChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: frameNumbers,
            datasets: [{
                label: 'Apex X',
                data: apexX,
                borderColor: 'black',
                borderWidth: 1,
                pointRadius: 0 // Do not plot points
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Frame Number'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Apex X'
                    }
                }
            }
        }
    });

    // Create the second chart for apex Y
    const ctx2 = document.getElementById('apexYChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: frameNumbers,
            datasets: [{
                label: 'Apex Y',
                data: apexY,
                borderColor: 'black',
                borderWidth: 1,
                pointRadius: 0 // Do not plot points
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Frame Number'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Apex Y'
                    }
                }
            }
        }
    });
}
