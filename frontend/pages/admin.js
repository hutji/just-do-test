
import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'shadcn-ui';

const AdminPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleSendMessage = () => {
    console.log('Sending message:', message);
    handleCloseModal();
  };

  return (
    <div>
      <h1>Дэшборд админа</h1>
      <Button onClick={handleOpenModal}>Send Message</Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Отправить сообщение</h2>
        <Form>
          <Input type="text" placeholder="Message" value={message} onChange={handleMessageChange} />
          <Button onClick={handleSendMessage}>Отправить</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminPage;