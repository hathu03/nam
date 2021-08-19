let year = parseInt(prompt('enter a year'));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + 'nam nhuan');
        }   else {
            alert(year + 'nam khong nhuan');
        }
    }   else {
        alert(year + 'nam nhuan');
    }
} else {
    alert(year + 'nam khong nhuan');
}