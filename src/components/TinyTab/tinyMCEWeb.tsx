import React, { useRef } from 'react';

const TinyMCEEditor: React.FC = () => {
  const [Editor, setEditor] = React.useState<any>(null);
  const editorRef = useRef<any>(null);

  React.useEffect(() => {
    import('@tinymce/tinymce-react').then(module => {
      setEditor(() => module.Editor);
    });
  }, []);

  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  if (!Editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <>
      <Editor
        apiKey='your-api-key'
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
};

export default TinyMCEEditor;

