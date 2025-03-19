// Given a list of meeting time intervals, determine if a person can attend all meetings.

// Input: [[0, 30], [5, 10], [15, 20]]
// Output: false
// Explanation: A person cannot attend all meetings since there is an overlap.

// Input: [[7, 10], [2, 4]]
// Output: true
// Explanation: There is no overlap between meetings.

function canAttendMeetings(intervals) {
    intervals.sort((a ,b) => a[0] - b[0])
    for(let i = 0; i < intervals.length -1; i++){
        if(intervals[i][1]> intervals[i+1][0]){
       return false
        }
    }
    return true;
}


console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]]));  
console.log(canAttendMeetings([[7, 10], [2, 4]]));              // true
console.log(canAttendMeetings([[1, 3], [4, 6], [7, 9]]));       // true
console.log(canAttendMeetings([[1, 5], [5, 8], [9, 12]]));      // true
console.log(canAttendMeetings([[1, 5], [4, 8], [9, 12]]));