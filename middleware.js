module.exports = function checkWorkingHours(req, res, next) {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hours = now.getHours();
  
    // Check if it's a weekday (Monday to Friday) and between 9 AM and 5 PM
    (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours < 17) ? next() : res.status(403).send('Web application is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
      
  };
  