[![Build Status](https://travis-ci.org/kmdtmyk/midnight.js.svg?branch=master)](https://travis-ci.org/kmdtmyk/midnight.js)

## Installation

```
npm install @kmdtmyk/midnight
```

## Usage

This is a subclass of Date, but the time is always 00:00:00.

```javascript
import Midnight from '@kmdtmyk/midnight'

const date = new Midnight(2017, 5 , 15) // => 2017/05/15 (month is 1-12 not 0-11)
date instanceof Date // => true
date.getHours() // => 0
date.getMinutes() // => 0
date.getSeconds() // => 0
date.getMilliseconds() // => 0
```

### Methods added

```javascript
const date = new Midnight(2017, 5 , 15)

date.day() // => 15
date.day(10) // => 2017/05/10

date.month() // => 5
date.month(8) // => 2017/08/15

date.year() // => 2017
date.year(2020) // => 2020/05/15

date.nextDay() // => 2017/05/16
date.nextDay(3) // => 2017/05/18

date.nextMonth() // => 2017/06/15
date.nextMonth(3) // => 2017/08/15

date.nextYear() // => 2018/05/15
date.nextYear(3) // => 2020/05/15

date.startOfMonth() // => 2017/05/01
date.endOfMonth() // => 2017/05/31

date.startOfYear() // => 2017/01/01
date.endOfYear() // => 2017/12/31
```

### Immutable

These methods return new instance and don't change own state.

```javascript
const date1 = new Midnight(2017, 5 , 15)
const date2 = date1.nextDay()
// => date1: 2017/05/15 not 2017/05/16
// => date2: 2017/05/16
```

## License

MIT
