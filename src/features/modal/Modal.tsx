import * as React from 'react';

export interface TooltipProps {}

const Tooltip: React.FunctionComponent<TooltipProps> = ({ children }) => (
  <div
    className="modal fade"
    id="exampleModal"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">{children}</div>
  </div>
);

export default Tooltip;
