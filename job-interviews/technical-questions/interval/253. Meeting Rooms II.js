/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const starts = [];
  const ends = [];

  for (let i = 0; i < intervals.length; i++) {
    starts[i] = intervals[i].start;
    ends[i] = intervals[i].end;
  }

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let res = 0;
  let endIndex = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[endIndex]) {
      res++;
    } else {
      endIndex++;
    }
  }

  return res;
};
