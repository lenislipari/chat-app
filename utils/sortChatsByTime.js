export default function sortChatsByTime(chats) {
    const getDateFromTimeString = (timeStr) => {
      const now = new Date();
      if (/\d{1,2}:\d{2}/.test(timeStr)) {
        const [hours, minutes] = timeStr.split(":").map(Number);
        const date = new Date(now);
        date.setHours(hours, minutes, 0, 0);
        return date;
      }
  
      if (/\d+\s+hours?\s+ago/.test(timeStr)) {
        const hoursAgo = parseInt(timeStr);
        const date = new Date(now);
        date.setHours(date.getHours() - hoursAgo);
        return date;
      }
  
      if (/yesterday/i.test(timeStr)) {
        const date = new Date(now);
        date.setDate(date.getDate() - 1);
        date.setHours(12, 0, 0, 0);
        return date;
      }
  
      return new Date(0);
    };
  
    return chats.sort((a, b) => {
      const dateA = getDateFromTimeString(a.lastMessageTime);
      const dateB = getDateFromTimeString(b.lastMessageTime);
      return dateB - dateA;
    });
  }