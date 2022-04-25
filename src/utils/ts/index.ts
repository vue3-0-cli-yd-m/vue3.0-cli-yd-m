import { Toast } from 'vant';
// 快速复制
const fastCopy = (text: any) => {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.value = text;
  input.select(); // 选中文本
  document.execCommand('Copy');
  Toast('复制成功');
  input.remove();
};

// 点击电话调起手机打电话功能 传递进来的参数是电话号码
const makePhoneCall = (tel: number | string) => {
  const AElement = document.createElement('a');
  AElement.href = `tel:${tel}`;
  AElement.click();
  AElement.remove();
};

// 格式化数字单位
const formatNumUnit = (num: number | string) => {
  const numS = Number(num);
  if (numS) {
    if (numS <= 10000) {
      return numS;
    } if (numS < 100000000) {
      return `${Number((numS / 10000).toFixed(2))}w`;
    }
    return `${Number((numS / 100000000).toFixed(2))}亿`;
  }
  return 0;
};

export {
  fastCopy, makePhoneCall, formatNumUnit,
};
