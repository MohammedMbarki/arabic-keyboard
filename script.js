
document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('output');
    const keyMap = {
        'a': 'ا',
        'b': 'ب',
        't': 'ت',
        'j': 'ج',
        'H': 'ح',
        'd': 'د',
        'r': 'ر',
        's': 'س',
        'S': 'ص',
        'D': 'ض',
        'T': 'ط',
        'Z': 'ظ',
        'g': 'غ',
        'f': 'ف',
        'q': 'ق',
        'k': 'ك',
        'l': 'ل',
        'm': 'م',
        'n': 'ن',
        'h': 'ه',
        'w': 'و',
        'y': 'ي',
        '-': '-',
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    };
    document.addEventListener('keydown', function(event) {
        event.preventDefault();
        const key = event.key;
        if (keyMap[key]) {
            output.value += keyMap[key];
        } else if (key === 'Backspace') {
            output.value = output.value.slice(0, -1);
        } else if (key === ' ') {
            output.value += ' ';
        }
    });
});
