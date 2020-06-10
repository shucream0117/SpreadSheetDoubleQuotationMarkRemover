(function () {
    window.addEventListener('copy', function (event) {
        let str = event.clipboardData.getData('text/plain')
            .trim()
            .replace(new RegExp('^\"'), '')
            .replace(new RegExp('\"$'), '')
            .replace(new RegExp('\"\"', 'g'), '"');
        event.clipboardData.setData("text/plain", str);
    });
})();
