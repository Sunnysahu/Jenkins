import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const w = 500;

  return (
    <>
      <div class="color">Hello Sunny</div>
      <div class="color">Hello Sunny</div>
      <div class="color">Hello Sunny</div>
      <h1>Hello Worl...</h1>
      <h1>Hello Sanjana Baby</h1>
      <h1>Hello Sunny</h1>
      <h1>Hello Minor Change</h1>
      <h1>Hello from Docker...</h1>

      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EZNefY1fRsA4qVFTBviWyj-5KHY6U8LG0g&s"
        }
        alt="Nice"
        loading="lazy"
      />
      <br />
      <img
        src={
          "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        width={w - 20}
        alt="Nice"
        loading="lazy"
      />

      <hr />
      <br />
      <img
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
        }
        width={w - 20}
        alt="Phone"
        loading="lazy"
      />
    </>
  );
}

export default App;
