import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();
  return <footer>© {date} blog All rights reserved.</footer>;
}
