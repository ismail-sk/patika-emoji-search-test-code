import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
describe("Counter Tests", () => {

  let buttons,emo;

  beforeEach(() => {
    render(<App />);
    buttons = screen.getAllByTestId("emoji_row");
    emo = screen.getByText(/Joy/i)
  });
  
  test("(1) Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.", () => {
    expect(screen.getByText("Emoji Search")).toBeInTheDocument();
  });

  test("(2) Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.", () => {
    expect(buttons.length).toEqual(20);
  });
  
  test("(3) Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.", () => {
    userEvent.type(screen.getByPlaceholderText(/emojiSearchBox/i), "Confounded")
    expect(emo).not.toBeInTheDocument()
  });

  test("(4) Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.",()=>{
    userEvent.click(emo);
    expect(window.copyEmoji).toEqual(emo.parentElement.dataset.clipboardText);
  });
})
