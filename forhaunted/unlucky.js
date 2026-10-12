d0 = new Date('2022-11-04T13:42:45Z');
d1 = new Date();
if (d1.getTimezoneOffset() == 0) (a=d1.getTime() + (4*60*60*1000))
else (a=d1.getTime());
d1.setTime(a);
dr = (d1.getTime() - d0.getTime());
d = (dr / (1000*60*60*24));
d1.setTime(dr);
h = d1.getUTCHours();
m = d1.getUTCMinutes();
s = d1.getSeconds();
const outputText = 'The eyes won\'t change for <BR/><B>' + Math.floor(d) + ' days</B> <B>' + h + ' hours</B><BR/><B>' + m + ' min</B> <B>' + s + ' sec</B>.';
document.getElementById('countdown-container').innerHTML = outputText;
