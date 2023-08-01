
// timer

TweenLite.defaultEase = Expo.easeOut;
initEndDate="august 30, 2021 02:22:00";

countEndDate='';
let dd,hh,mm,ss;

const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let countDown = new Date(initEndDate).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

         dd = Math.floor(distance / (day)),
           hh = Math.floor((distance % (day)) / (hour)),
           mm = Math.floor((distance % (hour)) / (minute)),
           ss = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
         countEndDate = dd+' '+hh+':'+mm+':'+ss;
         initTimer(countEndDate);
      
          clearInterval(x);
        //seconds
      }, 0)

 // other ways --> "0:15" "03:5" "5:2"

var reloadBtn = document.querySelector('.reload');
var timerEl = document.querySelector('.timer');

function initTimer (t) {
   
   var self = this,
       timerEl = document.querySelector('.timer'),
       dayGroupEl = timerEl.querySelector('.day-group'),
        hourGroupEl = timerEl.querySelector('.hour-group'),
       minutesGroupEl = timerEl.querySelector('.minutes-group'),
       secondsGroupEl = timerEl.querySelector('.seconds-group'),
        dayGroup = {
          firstNum: dayGroupEl.querySelector('.first'),
          secondNum: dayGroupEl.querySelector('.second')
       },
      hourGroup = {
          firstNum: hourGroupEl.querySelector('.first'),
          secondNum: hourGroupEl.querySelector('.second')
       },
       
       minutesGroup = {
          firstNum: minutesGroupEl.querySelector('.first'),
          secondNum: minutesGroupEl.querySelector('.second')
       },

       secondsGroup = {
          firstNum: secondsGroupEl.querySelector('.first'),
          secondNum: secondsGroupEl.querySelector('.second')
       };

   var time = {
      day: t.split(' ')[0]||0,
      hour: t.split(' ')[1].split(':')[0],
      min: t.split(' ')[1].split(':')[1],
      sec: t.split(' ')[1].split(':')[2]
   };
   var timeNumbers;

   function updateTimer() {

      var timestr;
      var date = new Date();
      
      // date.setDate(time.day);
      date.setHours(time.hour);
      date.setMinutes(time.min);
      date.setSeconds(time.sec);
      
      var newDate = new Date(date.valueOf() - 1000);
      
      var temp = newDate.toTimeString().split(" ");
      var tempsplit = temp[0].split(':');
      time.day = (time.day.length==1)?'0'+time.day: time.day;
      time.hour = tempsplit[0];
      time.min = tempsplit[1];
      time.sec = tempsplit[2];
      
      timestr = time.day + time.hour + time.min + time.sec;
      
      timeNumbers = timestr.split('');
      updateTimerDisplay(timeNumbers);
        
      if(timestr === '00000000')
         countdownFinished();

      if(timestr != '00000000')
         setTimeout(updateTimer, 1000);

   }

   function updateTimerDisplay(arr) {
      animateNum(dayGroup.firstNum, arr[0]);
      animateNum(dayGroup.secondNum, arr[1]);
      animateNum(hourGroup.firstNum, arr[2]);
      animateNum(hourGroup.secondNum, arr[3]);
      animateNum(minutesGroup.firstNum, arr[4]);
      animateNum(minutesGroup.secondNum, arr[5]);
      animateNum(secondsGroup.firstNum, arr[6]);
      animateNum(secondsGroup.secondNum, arr[7]);

   }

   function animateNum (group, arrayValue) {
      TweenMax.killTweensOf(group.querySelector('.number-grp-wrp'));
      TweenMax.to(group.querySelector('.number-grp-wrp'), 1, {
         y: - group.querySelector('.num-' + arrayValue).offsetTop
      });

   }
   
   setTimeout(updateTimer, 1000);

}

function countdownFinished() {
   setTimeout(function () {
      TweenMax.set(reloadBtn, { scale: 0.8, display: 'block' });
      TweenMax.to(timerEl, 1, { opacity: 0.2 });
      TweenMax.to(reloadBtn, 0.5, { scale: 1, opacity: 1 }); 
   }, 1000);
}

reloadBtn.addEventListener('click', function () {
   TweenMax.to(this, 0.5, { opacity: 0, onComplete:
      function () { 
         reloadBtn.style.display= "none";
      } 
   });
   TweenMax.to(timerEl, 1, { opacity: 1 });
   initTimer("end");
});

