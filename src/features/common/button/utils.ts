import { Button } from './models';

export const getButtonClassName = (type: Button) => {
  switch (type) {
    case Button.Primary:
      return 'button_primary';
    case Button.Secondary:
      return 'button_secondary';
    case Button.Cancel:
      return 'button_cancel';
    case Button.Close:
    case Button.CloseSmall:
      return 'button_close';
    case Button.Empty:
      return '';
    default:
      return 'button_primary';
  }
};
