import * as React from 'react';

export interface FormLayoutProps {
  title: string;
  confirmButtonTitle: string;
  cancelButtonTitle: string;
}

const FormLayout: React.FunctionComponent<FormLayoutProps> = ({
  title,
  confirmButtonTitle,
  cancelButtonTitle,
}) => (
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        {title}
      </h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
    </div>
    <div className="modal-body">...</div>
    <div className="modal-footer">
      {cancelButtonTitle && (
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          {cancelButtonTitle}
        </button>
      )}
      {cancelButtonTitle && (
        <button type="button" className="btn btn-primary">
          {cancelButtonTitle}
        </button>
      )}
    </div>
  </div>
);

export default FormLayout;
