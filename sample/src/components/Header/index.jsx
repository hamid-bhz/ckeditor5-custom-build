import React from "react";

export const Header = () => (
  <header>
    <div className="centered">
      <h1>
        <a
          href="https://ckeditor.com/ckeditor-5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://c.cksource.com/a/1/logos/ckeditor5.svg"
            alt="CKEditor 5 logo"
          />
          CKEditor 5
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a
              href="https://ckeditor.com/docs/ckeditor5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://ckeditor.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
