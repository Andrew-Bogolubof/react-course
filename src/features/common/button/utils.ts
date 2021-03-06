import { Button } from '../../../models/Button';

export const getButtonClassName = (type: Button) => {
  switch (type) {
    case Button.Primary:
      return 'button_primary';
    case Button.Secondary:
      return 'button_secondary';
    case Button.Cancel:
      return 'button_cancel';
    default:
      return 'button_primary';
  }
};
