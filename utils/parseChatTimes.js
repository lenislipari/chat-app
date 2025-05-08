export function parseChatTimes(timeString) {
    const now = new Date();
  
    if (timeString.toLowerCase() === 'yesterday') {
      return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    }
  
    if (timeString.toLowerCase().includes('hour')) {
      const hours = parseInt(timeString);
      return new Date(now.getTime() - hours * 60 * 60 * 1000);
    }
  
    const timeParts = timeString.match(/(\d{1,2}):(\d{2})\s?(AM|PM)/i);
    if (timeParts) {
      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      const ampm = timeParts[3].toUpperCase();
      if (ampm === 'PM' && hours < 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
      return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes
      );
    }
  
    return now;
  }
  