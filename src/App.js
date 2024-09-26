import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <Item title={el.title} i={i} key={i} open={open} setOpen={setOpen}>
          {el.text}
        </Item>
      ))}
      <Item
        title="Vuk Stankovic"
        i={22}
        key="Vuk Stankovic"
        open={open}
        setOpen={setOpen}
      >
        <p>Bicu milioner jednoga dana u to sam siguran!</p>
      </Item>
    </div>
  );
}

function Item({ title, i, open, setOpen, children }) {
  const isOpened = i === open;
  function handleClick() {
    setOpen(isOpened ? null : i);
  }

  return (
    <div className={`item ${isOpened ? "open" : ""}`} onClick={handleClick}>
      <span className="number">{i < 9 ? `0${i + 1}` : i + 1}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">{isOpened ? "-" : "+"}</span>
      {isOpened ? <div className="content-box">{children}</div> : ""}
    </div>
  );
}
