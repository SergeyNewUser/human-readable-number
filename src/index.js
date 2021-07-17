module.exports = function toReadable(number) {


   let n, x, y, z, w;

   a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   d = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];



   x = number % 10;
   y = Math.floor(number / 10);

   if (number == 0) {
      return z = 'zero';

   }
   else
      if (number > 0 & number < 10) {
         return z = a[number - 1];

      }
      else


         if (number > 9 & number < 20) {
            return z = b[x];

         }
         else


            if (number > 19 && number < 100) {
               if (x == 0) return c[y - 2]; else {
                  str = number.toString();
                  return z = (c[str[0] - 2] + ' ' + a[str[1] - 1]);

               }
            } else



               if (number > 99 && number < 1000) {
                  x = number % 100;
                  y = Math.floor(number / 100);
                  if (x == 0) return z = d[y - 1]; else {

                     w = number - (number - x);
                     str = w.toString();

                     if (str.length == 1) return z = d[y - 1] + ' ' + a[str[0] - 1];
                     if (str.length == 2 && w < 20) return z = d[y - 1] + ' ' + b[str[1]];
                     if (str.length == 2 && w > 19 && str[1] == 0) return z = d[y - 1] + ' ' + c[str[0] - 2];
                     if (str.length == 2 && w > 19 && str[1] != 0) return z = d[y - 1] + ' ' + c[str[0] - 2] + ' ' + a[str[1] - 1];
                  }



               }

}



