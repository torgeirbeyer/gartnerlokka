import React from "react";

export default function Form() {
  return (
    <form className="my-4" name="tilbakemelding" method="post">
      <input type="hidden" name="form-name" value="tilbakemelding" />
      <div className="">
        <label htmlFor="message">Tilbakemelding</label> <br />
        <textarea className="w-full p-2 my-2 border-2 rounded border-black" id="message" name="message" required rows="6"></textarea>
      </div>
      <div>
        <input className="p-2 border-2 rounded bg-white" type="submit" value="Send inn tilbakemelding" />
      </div>
    </form>
  );
}