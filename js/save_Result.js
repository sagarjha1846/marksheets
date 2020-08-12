window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
        const invoice = this.document.getElementById("Result");
        console.log(invoice);
        console.log(window);
        var opt = {
            margin: 1,
            filename: 'Result.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'mm', format: 'a0', orientation: 'p' }
        };
        html2pdf().from(invoice).set(opt).save();
    })
}