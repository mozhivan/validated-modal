// @flow
import React from 'react';
import { Button, Modal } from 'semantic-ui-react'

import '@app/styles/form-modal.scss';

type ModalFromProps = {
  open?: boolean,
  header?: string,
  submitText?: string,
  children?: React.Node,

  onSubmit: () => void,
}

const ModalForm = ({
  open,
  header,
  children,
  submitText = 'Save',

  onSubmit,
}: ModalFromProps) => {

  return (
    <Modal open={open} trigger={<Button primary>Show Modal</Button>}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        {children}
      </Modal.Content>
      <Modal.Actions>
            <Button
              primary
              content={submitText}
              onClick={onSubmit}
            />
        </Modal.Actions>
    </Modal>
  );
};

export default ModalForm;
