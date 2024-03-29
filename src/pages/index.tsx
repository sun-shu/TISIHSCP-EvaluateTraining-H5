import yayJpg from '../assets/yay.jpg';
import { Button } from 'antd-mobile'

export default function HomePage() {
  return (
    <div>
        <Button>start</Button>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
