// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function pad(num) {
    return num.toString().padStart(2, '0');
}

function displayTime() {
    const now = new Date();

    const hours24 = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    // 24-hour format
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // 12-hour format
    let hours12 = now.getHours();
    const ampm = hours12 >= 12 ? 'PM' : 'AM';

    // Convert 24-hour to 12-hour format
    hours12 = hours12 % 12;
    if (hours12 === 0) 
        hours12 = 12;
     // 12 AM/PM fix

    const time12 = `${
        pad(hours12)
    }:${minutes}:${seconds} ${ampm}`;

    console.clear(); // Clears console each second to mimic a real clock
    console.log("⏰ 24-Hour Clock =>", time24);
    console.log("🕰️ 12-Hour Clock =>", time12);
}

// Update every 1 second
setInterval(displayTime, 1000);
