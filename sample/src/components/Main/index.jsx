import React from "react";
import { Editor } from "../Editor";

export const Main = () => {
  return (
    <main>
      <div className="message">
        <div className="centered">
          <h2>
            CKEditor 5 online builder demo - DecoupledDocumentEditor build
          </h2>
        </div>
      </div>
      <div className="centered">
        <div className="row">
          <div className="document-editor__toolbar"></div>
        </div>
        <div className="row row-editor">
          <div className="editor-container">
            <div className="editor">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
