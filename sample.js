  function formatDateTime(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${month}, ${day}, ${year}, ${hours}:${minutes}${ampm}`;
  }

  function updateTimeTicket() {
    const now = new Date();
    const formattedTime = formatDateTime(now);
    document.querySelector('.time-ticket').textContent = formattedTime;
  }


  updateTimeTicket();


  setInterval(updateTimeTicket, 60000);

window.addEventListener('DOMContentLoaded', () => {
    const headline = document.querySelector('.banner-title','.banner-subtitle');
    if (headline) {
      headline.classList.add('animate-drop');
    }
  });