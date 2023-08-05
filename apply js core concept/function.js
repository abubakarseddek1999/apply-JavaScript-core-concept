function hoursToMinutes(hours) {
    var minutes = hours * 60;
    return minutes;
  }
  
  // ফাংশনকে কল করা এবং ফলাফল প্রিন্ট করা
  var hours = 2;
  var minutesResult = hoursToMinutes(hours);
  console.log(`${hours} hours ${minutesResult} minute`);
  
