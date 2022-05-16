import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";


export default function AppTodo({onSubmit, }) {
  return (
      <form onSubmit={onSubmit}>
        <label><b>userid</b></label>
        <input type="text" name='todoItem' value={text} onChange={handleChange} /><br />
        <label><b>task</b></label>
        <input type="text" name='task' onChange={handleChange} /><br />
        <label><b>completed</b></label>
        <input type="text" name='completed' onChange={handleChange} /><br />

          <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
      </form>
  );
}
