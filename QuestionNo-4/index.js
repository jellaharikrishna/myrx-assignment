function findMinPlatforms(arrivals, departures) {
    let n = arrivals.length;
    arrivals.sort((a, b) => convertToMinutes(a) - convertToMinutes(b));
    departures.sort((a, b) => convertToMinutes(a) - convertToMinutes(b));
    
    let platforms = 0, maxPlatforms = 0;
    let i = 0, j = 0;
    
    while (i < n && j < n) {
        if (convertToMinutes(arrivals[i]) < convertToMinutes(departures[j])) {
            platforms++;
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--;
            j++;
        }
    }
    
    return maxPlatforms;
}

function convertToMinutes(time) {
    let [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

// case - 1
let arrivals1 = ["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"];
let departures1 = ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"];
console.log(findMinPlatforms(arrivals1, departures1));

// case - 2
let arrivals2 = ["9:00", "9:40"];
let departures2 = ["9:10", "12:00"];
console.log(findMinPlatforms(arrivals2, departures2));