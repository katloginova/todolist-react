import { FC } from 'react';
import { Button } from 'antd';
import typesProps from './typesProps';
import './style.css';

const DefaultButton: FC<typesProps> = ({classBtn, title, click}) => {
  return (
    <Button
      className={`btn ${classBtn}`}
      type="primary"
      onClick={click}>
      
      {title}
    </Button>
  );
}

export default DefaultButton;