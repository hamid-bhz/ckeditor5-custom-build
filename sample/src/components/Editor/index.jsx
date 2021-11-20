import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledDocumentEditor from "@ckeditor5-custom-build/decoupled-document-editor";

export const Editor = () => {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            console.log("file", file);
            // if you want to upload file to your server
            axios
              .post("YOUR_SERVER_ADDRESS")
              .then((res) => {
                resolve({
                  default: `FILE_ADDRESS`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <CKEditor
      name="editor"
      editor={DecoupledDocumentEditor}
      data=""
      onReady={(editor) => {
        editor.ui
          .getEditableElement()
          .parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
          );
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log(data);
      }}
      config={{
        extraPlugins: [uploadPlugin],
      }}
    />
  );
};
