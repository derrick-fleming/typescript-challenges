
let statement = '';
function switchBrowserStatement (navigator: Window["navigator"]) {
  switch (navigator.userAgent) {
    case 'Edge':
      statement = "You've got the Edge!";
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      statement = 'Okay we support these browsers too';
      break;

    default:
      statement = 'We hope that this page looks ok!';
  }
}

function ifBrowserStatement(navigator: Window["navigator"]) {
  const userAgent = navigator.userAgent;
  if (userAgent === 'Edge') {
    return statement = "You've got the Edge!";
  } else if (
    userAgent === 'Chrome' ||
    userAgent === 'Firefox' ||
    userAgent === 'Safari' ||
    userAgent === 'Opera'
    ) {
    return statement = "You've got the Edge!";
  } else {
    return statement = 'WE hope that this page looks ok!'
  }
}

export function switchNumbers (a: number) {
  switch(a) {
    case 2:
      return 'Two!';
    case 3:
      return 'Three!';
    case 4:
      return 'FOUR';
    default:
      return 'Above 4 and below two'
  }
}
