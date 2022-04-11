import React, { useState } from "react";
import { useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect(props) {
  const [selected, setSelected] = useState(10);

  const { editFeedbackItem } = useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedbackItem.edit === true) {
      setSelected(+editFeedbackItem.item.rating);
    }
  }, [editFeedbackItem]);

  const handleSelect = (e) => {
    setSelected(+e.currentTarget.value);
    props.select(+e.target.value);
  };

  return (
    <div>
      <ul className="rating">
        <li>
          <input
            type="radio"
            name="Rating"
            id="num1"
            value={1}
            checked={selected === 1}
            onChange={handleSelect}
          />
          <label htmlFor="num1">1</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num2"
            value={2}
            checked={selected === 2}
            onChange={handleSelect}
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num3"
            value={3}
            checked={selected === 3}
            onChange={handleSelect}
          />
          <label htmlFor="num3">3</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num4"
            value={4}
            checked={selected === 4}
            onChange={handleSelect}
          />
          <label htmlFor="num4">4</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num5"
            value={5}
            checked={selected === 5}
            onChange={handleSelect}
          />
          <label htmlFor="num5">5</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num6"
            value={6}
            checked={selected === 6}
            onChange={handleSelect}
          />
          <label htmlFor="num6">6</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num7"
            value={7}
            checked={selected === 7}
            onChange={handleSelect}
          />
          <label htmlFor="num7">7</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num8"
            value={8}
            checked={selected === 8}
            onChange={handleSelect}
          />
          <label htmlFor="num8">8</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num9"
            value={9}
            checked={selected === 9}
            onChange={handleSelect}
          />
          <label htmlFor="num9">9</label>
        </li>
        <li>
          <input
            type="radio"
            name="Rating"
            id="num10"
            value={10}
            checked={selected === 10}
            onChange={handleSelect}
          />
          <label htmlFor="num10">10</label>
        </li>
      </ul>
    </div>
  );
}

export default RatingSelect;
