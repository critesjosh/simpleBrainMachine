
/* Brainwave Type
 a = alpha
 b = beta
 t = theta
 d = delta

 // table of values for meditation
 //   start with lots of Beta (awake / conscious)
 //   add Alpha (dreamy / trancy to connect with subconscious Theta that'll be coming up)
 //   reduce Beta (less conscious)
 //   start adding Theta (more subconscious)
 //   pulse in some Delta (creativity)
 //   and then reverse the above to come up refreshed

 Duration of this Brainwave Type (divide by 10,000 to get seconds)

 { 'b', 600000 },
 { 'a', 100000 },
 { 'b', 200000 },
 { 'a', 150000 },
 { 'b', 150000 },
 { 'a', 200000 },
 { 'b', 100000 },
 { 'a', 300000 },
 { 'b',  50000 },
 { 'a', 600000 },
 { 't', 100000 },
 { 'a', 300000 },
 { 't', 200000 },
 { 'a', 300000 },
 { 't', 300000 },
 { 'a', 150000 },
 { 't', 600000 },
 { 'a', 150000 },
 { 'b',  10000 },
 { 'a', 150000 },
 { 't', 600000 },
 { 'd',  10000 },
 { 't', 100000 },
 { 'd',  10000 },
 { 't', 100000 },
 { 'd',  10000 },
 { 't', 300000 },
 { 'a', 150000 },
 { 'b',  10000 },
 { 'a', 150000 },
 { 't', 300000 },
 { 'a', 150000 },
 { 'b',  10000 },
 { 'a', 200000 },
 { 'b',  50000 },
 { 'a', 200000 },
 { 'b', 150000 },
 { 'a', 150000 },
 { 'b', 200000 },
 { 'a', 100000 },
 { 'b', 250000 },
 { 'a',  50000 },
 { 'b', 600000 },
 { '0',      0 }
 */

var switchColors = function() {
  $('#div').toggleClass('div');
}


window.setInterval(function(){
switchColors();
}, 50);
