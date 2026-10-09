/* ================= 基础数据 ================= */
const CN = { /* 放假/调休：1=休 0=班 */
  2025:{
    '1-1':1,'1-28':1,'1-29':1,'1-30':1,'1-31':1,'2-1':1,'2-2':1,'2-3':1,'2-4':1,
    '1-26':0,'2-8':0,
    '4-4':1,'4-5':1,'4-6':1,
    '5-1':1,'5-2':1,'5-3':1,'5-4':1,'5-5':1,
    '4-27':0,
    '5-31':1,'6-1':1,'6-2':1,
    '10-1':1,'10-2':1,'10-3':1,'10-4':1,'10-5':1,'10-6':1,'10-7':1,'10-8':1,
    '9-28':0,'10-11':0
  },
  2026:{
    '1-1':1,'1-2':1,'1-3':1,
    '2-15':1,'2-16':1,'2-17':1,'2-18':1,'2-19':1,'2-20':1,'2-21':1,'2-22':1,'2-23':1,
    '2-14':0,'2-28':0,
    '4-4':1,'4-5':1,'4-6':1,
    '5-1':1,'5-2':1,'5-3':1,'5-4':1,'5-5':1,
    '4-26':0,
    '6-19':1,'6-20':1,'6-21':1,
    '9-25':1,'9-26':1,'9-27':1,
    '10-1':1,'10-2':1,'10-3':1,'10-4':1,'10-5':1,'10-6':1,'10-7':1,
    '9-20':0,'10-10':0
  }
};
const NAME = {
  2025:{ '1-1':['元旦',1],'1-28':['除夕',2],'1-29':['春节',2],'2-12':['元宵节',2],'4-4':['清明节',2],'5-1':['劳动节',1],'5-31':['端午节',2],'10-1':['国庆节',1],'10-6':['中秋节',2] },
  2026:{ '1-1':['元旦',1],'2-16':['春节',2],'2-17':['春节（初一）',2],'3-3':['元宵节',2],'4-5':['清明节',2],'5-1':['劳动节',1],'6-19':['端午节',2],'9-25':['中秋节',2],'10-1':['国庆节',1] }
};
/* ================= 国外节日（常见公共 / 文化节日） ================= */
const INTL = {
  '1-1':['New Year’s Day 元旦（国际）',3],
  '12-25':['Christmas 圣诞节',3],'12-24':['Christmas Eve 平安夜',3],
  '10-31':['Halloween 万圣节前夜',3],
  '11-27':['Thanksgiving 感恩节（美）',3],
  '11-28':['Black Friday 黑色星期五',3],
  '2-14':['Valentine’s Day 情人节',3],
  '3-17':['St. Patrick’s Day',3],
  '7-4':['Independence Day 美国独立日',3],
  '11-11':['Veterans Day / Remembrance Day',3],
  '4-22':['Earth Day 世界地球日',3],
  '3-8':['International Women’s Day 国际妇女节',3],
  '5-1':['International Workers’ Day 国际劳动节',3],
  '6-1':['International Children’s Day 国际儿童节',3]
};
/* ================= 农历 ================= */
const LUNAR_INFO='0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0'.split(',');
function lYearDays(y){let i,sum=348;for(i=0x8000;i>0x8;i>>=1)sum+=(LUNAR_INFO[y-1900]&i)?1:0;return sum+leapDays(y)}
function leapMonth(y){return LUNAR_INFO[y-1900]&0xf}
function leapDays(y){if(leapMonth(y))return (LUNAR_INFO[y-1900]&0x10000)?30:29;return 0}
function monthDays(y,m){return (LUNAR_INFO[y-1900]&(0x10000>>m))?30:29}
function solar2lunar(y,m,d){
  let baseDate=Date.UTC(1900,0,31), obj=Date.UTC(y,m-1,d), offset=Math.floor((obj-baseDate)/86400000);
  let temp=0, i, leap=0, current;
  for(i=1900;i<2101&&offset>0;i++){temp=lYearDays(i);offset-=temp}
  if(offset<0){offset+=temp;i--}
  current=i;
  leap=leapMonth(current); let isLeap=false;
  for(i=1;i<13&&offset>0;i++){
    if(leap>0&&i==leap+1&&isLeap==false){--i;isLeap=true;temp=leapDays(current)}
    else temp=monthDays(current,i);
    if(isLeap==true&&i==leap+1)isLeap=false;
    offset-=temp;
  }
  if(offset==0&&leap>0&&i==leap+1){ if(isLeap){isLeap=false}else{isLeap=true;--i} }
  if(offset<0){offset+=temp;--i}
  const lm=i, ld=offset+1;
  const gzY=(current-4)%10, gzZ=(current-4)%12, zodiac=['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'][gzZ];
  const CH=['正','二','三','四','五','六','七','八','九','十','十一','腊'];
  const D=['初一','初二','初三','初四','初五','初六','初七','初八','初九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','初十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
  return {lm,ld,str:(isLeap?'闰':'')+CH[lm-1]+'月'+D[ld-1], zodiac, animal:zodiac};
}
/* ================= 农历节日 ================= */
function lunarFests(y,m,d){
  const l=solar2lunar(y,m,d), res=[];
  if(l.lm==1&&l.ld==1)res.push('春节（农历正月初一）');
  if(l.lm==1&&l.ld==15)res.push('元宵节');
  if(l.lm==5&&l.ld==5)res.push('端午节');
  if(l.lm==8&&l.ld==15)res.push('中秋节');
  if(l.lm==9&&l.ld==9)res.push('重阳节');
  if(l.lm==7&&l.ld==7)res.push('七夕节');
  if(l.lm==12&&l.ld==30)res.push('除夕');
  if(l.lm==12&&l.ld==29&&monthDays(y,12)===29)res.push('除夕');
  return res;
}
/* ================= 工具 ================= */
const pad = n => String(n).padStart(2, '0');
const DAY_MS = 24 * 60 * 60 * 1000;
const today = new Date();
const state = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  selected: new Date(today.getFullYear(), today.getMonth(), today.getDate())
};

function sameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function dateKey(dt) {
  return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
}
function isWeekend(dt) {
  return dt.getDay() === 0 || dt.getDay() === 6;
}
function holidayKey(dt) {
  return `${dt.getMonth() + 1}-${dt.getDate()}`;
}
function status(dt) {
  const key = holidayKey(dt);
  const table = CN[dt.getFullYear()];
  if (table && Object.prototype.hasOwnProperty.call(table, key)) {
    return table[key] ? 'rest' : 'work';
  }
  return isWeekend(dt) ? 'off' : 'work';
}
function lunarText(dt) {
  const lunar = solar2lunar(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
  return lunar.ld === 1 ? `${lunar.str.split('月')[0]}月` : lunar.str;
}
function festsFor(dt) {
  const y = dt.getFullYear(), m = dt.getMonth() + 1, d = dt.getDate(), res = [];
  const cn = NAME[y] && NAME[y][`${m}-${d}`];
  if (cn) res.push(cn);
  const intl = INTL[`${m}-${d}`];
  if (intl) res.push(intl);
  lunarFests(y, m, d).forEach(name => res.push([name, 2]));
  return res;
}
function eventLabel(label, type) {
  const clean = label.replace(/（.*?）/g, '').trim();
  if (type !== 3) return clean;
  const parts = clean.split(/\s+/);
  const chinese = parts.filter(part => /[\u4e00-\u9fff]/.test(part));
  return chinese.length ? chinese.join(' ') : clean;
}

/* ================= 渲染 ================= */
const calendar = document.getElementById('calendar');
const miniGrid = document.getElementById('miniGrid');

function makeDayCell(dt, inMonth) {
  const cell = document.createElement('div');
  const classes = ['day'];
  if (!inMonth) classes.push('other-month');
  if (sameDate(dt, today)) classes.push('today');
  if (state.selected && sameDate(dt, state.selected)) classes.push('selected');
  cell.className = classes.join(' ');

  const st = status(dt);
  const fests = festsFor(dt);

  const head = document.createElement('div');
  head.className = 'day-head';

  const num = document.createElement('div');
  num.className = 'num';
  num.textContent = dt.getDate();
  head.appendChild(num);

  if (st === 'rest') {
    head.insertAdjacentHTML('beforeend', '<span class="status rest">休</span>');
  } else if (st === 'work' && !inMonth && !isWeekend(dt)) {
    head.insertAdjacentHTML('beforeend', '<span class="status work">班</span>');
  } else if (st === 'work' && !isWeekend(dt) && Object.prototype.hasOwnProperty.call(CN[dt.getFullYear()] || {}, holidayKey(dt))) {
    head.insertAdjacentHTML('beforeend', '<span class="status work">班</span>');
  } else if (st === 'off' && inMonth) {
    head.insertAdjacentHTML('beforeend', '<span class="status off">周</span>');
  }
  cell.appendChild(head);

  const lunar = document.createElement('div');
  lunar.className = 'lunar';
  lunar.textContent = lunarText(dt);
  cell.appendChild(lunar);

  if (fests.length) {
    const events = document.createElement('div');
    events.className = 'events';
    fests.slice(0, 2).forEach(fest => {
      const item = document.createElement('div');
      item.className = `event ${['', 'cn', 'trad', 'intl'][fest[1]]}`;
      item.textContent = eventLabel(fest[0], fest[1]);
      item.title = fest[0];
      item.addEventListener('click', event => {
        event.stopPropagation();
        showDay(dt);
      });
      events.appendChild(item);
    });
    cell.appendChild(events);
  }

  cell.addEventListener('click', () => {
    state.selected = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    render();
    showDay(dt);
  });
  return cell;
}

function renderMain() {
  calendar.innerHTML = '';
  ['日', '一', '二', '三', '四', '五', '六'].forEach(name => {
    const dow = document.createElement('div');
    dow.className = 'dow';
    dow.textContent = name;
    calendar.appendChild(dow);
  });

  const first = new Date(state.year, state.month - 1, 1);
  const daysInMonth = new Date(state.year, state.month, 0).getDate();
  const startOffset = first.getDay();
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;

  for (let i = 0; i < totalCells; i++) {
    const date = new Date(state.year, state.month - 1, i - startOffset + 1);
    calendar.appendChild(makeDayCell(date, date.getMonth() === state.month - 1));
  }
}

function renderMini() {
  document.getElementById('miniTitle').textContent = `${state.year}年${state.month}月`;
  miniGrid.innerHTML = '';
  ['日', '一', '二', '三', '四', '五', '六'].forEach(name => {
    const dow = document.createElement('div');
    dow.className = 'mini-dow';
    dow.textContent = name;
    miniGrid.appendChild(dow);
  });

  const first = new Date(state.year, state.month - 1, 1);
  const daysInMonth = new Date(state.year, state.month, 0).getDate();
  const startOffset = first.getDay();
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;

  for (let i = 0; i < totalCells; i++) {
    const date = new Date(state.year, state.month - 1, i - startOffset + 1);
    const inMonth = date.getMonth() === state.month - 1;
    const st = status(date);
    const item = document.createElement('div');
    item.className = 'mini-day';
    if (!inMonth) item.classList.add('other');
    if (sameDate(date, today)) item.classList.add('today');
    if (state.selected && sameDate(date, state.selected)) item.classList.add('selected');
    if (st === 'rest') item.classList.add('has-rest');
    else if (st === 'work' && !isWeekend(date)) item.classList.add('has-work');
    item.textContent = date.getDate();
    item.title = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    item.addEventListener('click', () => {
      state.selected = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      render();
      showDay(date);
    });
    miniGrid.appendChild(item);
  }
}

function render() {
  document.getElementById('monthTitle').textContent = `${state.year}年${state.month}月`;
  document.getElementById('yearSel').value = state.year;
  document.getElementById('monthSel').value = state.month;
  renderMain();
  renderMini();
}

function showDay(dt) {
  const fests = festsFor(dt);
  const st = status(dt);
  const titles = {
    rest: ['✅ 今天休息 / 放假', 'var(--rest)'],
    off: ['🛌 今天是周末休息日', 'var(--off)'],
    work: ['💼 今天上班', 'var(--work)']
  };
  document.getElementById('mDate').textContent =
    `${dt.getFullYear()}年${dt.getMonth() + 1}月${dt.getDate()}日 · 星期${'日一二三四五六'[dt.getDay()]}`;
  const title = document.getElementById('mTitle');
  title.textContent = titles[st][0];
  title.style.color = titles[st][1];

  const lunar = solar2lunar(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
  let html = `
    <div class="row"><span>农历</span><span>${lunar.str}</span></div>
    <div class="row"><span>生肖</span><span>${lunar.animal}年</span></div>
  `;
  if (fests.length) {
    html += fests.map(fest => `<div class="row"><span>节日</span><span>${fest[0]}</span></div>`).join('');
  } else {
    html += '<div class="row"><span>节日</span><span>无</span></div>';
  }
  const statusText = {
    rest: '可休息，不用上班',
    off: '周末，正常双休',
    work: '需要上班'
  };
  html += `<div class="row"><span>安排</span><span>${statusText[st]}</span></div>`;
  document.getElementById('mBody').innerHTML = html;
  document.getElementById('modal').classList.add('on');
}

/* ================= 初始化 ================= */
document.getElementById('yearSel').innerHTML = [2024, 2025, 2026, 2027, 2028]
  .map(value => `<option value="${value}">${value}年</option>`).join('');
document.getElementById('monthSel').innerHTML = Array.from({ length: 12 }, (_, i) =>
  `<option value="${i + 1}">${i + 1}月</option>`).join('');

document.getElementById('yearSel').addEventListener('change', event => {
  state.year = Number(event.target.value);
  render();
});
document.getElementById('monthSel').addEventListener('change', event => {
  state.month = Number(event.target.value);
  render();
});
document.getElementById('prev').addEventListener('click', () => {
  state.month--;
  if (state.month < 1) { state.month = 12; state.year--; }
  render();
});
document.getElementById('next').addEventListener('click', () => {
  state.month++;
  if (state.month > 12) { state.month = 1; state.year++; }
  render();
});
document.getElementById('today').addEventListener('click', () => {
  state.year = today.getFullYear();
  state.month = today.getMonth() + 1;
  state.selected = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  render();
});
document.getElementById('miniPrev').addEventListener('click', () => {
  state.month--;
  if (state.month < 1) { state.month = 12; state.year--; }
  render();
});
document.getElementById('miniNext').addEventListener('click', () => {
  state.month++;
  if (state.month > 12) { state.month = 1; state.year++; }
  render();
});
document.getElementById('goToday').addEventListener('click', () => {
  state.year = today.getFullYear();
  state.month = today.getMonth() + 1;
  state.selected = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  render();
});
document.getElementById('goSelected').addEventListener('click', () => {
  const date = state.selected || today;
  state.year = date.getFullYear();
  state.month = date.getMonth() + 1;
  render();
  showDay(date);
});
document.getElementById('modal').addEventListener('click', event => {
  if (event.target.id === 'modal') event.target.classList.remove('on');
});

render();
