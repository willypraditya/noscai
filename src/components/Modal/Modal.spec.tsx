import { fireEvent, render, screen } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  it('should not render when isOpen is false', () => {
    render(
      <Modal
        isOpen={false}
        onClose={() => {}}
        onOk={() => {}}
        okText="OK"
        title="Test Modal"
      >
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        onOk={() => {}}
        okText="OK"
        title="Test Modal"
      >
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent('Test Modal');
    expect(screen.getByTestId('modal-children')).toHaveTextContent(
      'Modal Content',
    );
  });

  it('should call onClose when close button is clicked', () => {
    const handleClose = vitest.fn();

    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
        onOk={() => {}}
        okText="OK"
        title="Test Modal"
      >
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByTestId('modal-close'));

    expect(handleClose).toHaveBeenCalled();
  });

  it('should call onOk when OK button is clicked', () => {
    const handleOk = vitest.fn();

    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        onOk={handleOk}
        okText="Confirm"
        title="Test Modal"
      >
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByTestId('modal-action-ok'));

    expect(handleOk).toHaveBeenCalled();
  });

  it('should render OK button with provided text', () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        onOk={() => {}}
        okText="Confirm"
        title="Test Modal"
      >
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.getByTestId('modal-action-ok')).toHaveTextContent('Confirm');
  });
});
