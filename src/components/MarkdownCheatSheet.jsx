import ReactMarkdown from "react-markdown";

// Markdown cheat sheet component. Just has some tables with basic markdown syntax.
// Could improve it by using components possibly but not really that serious
function MarkdownCheatSheet({ setCheatSheetVisible }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/40 z-15 flex justify-center items-center dark:text-white"
      onClick={() => setCheatSheetVisible(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col z-25 rounded-lg p-6 gap-6 w-[90%] max-w-xl max-h-[90%] overflow-y-auto dark:bg-primary-black-navigation bg-primary-white-smoke"
      >
        <h2 className="text-xl font-bold text-center">
          Markdown Cheat Sheet (Supported Features)
        </h2>

        <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border border-gray-400 px-4 py-2 text-left">
                Feature
              </th>
              <th className="border border-gray-400 px-4 py-2 text-left">
                Syntax
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Headings
              </td>
              <td className="border border-gray-400 px-4 py-2">
                # Header 1 <br /> ## Header 2 <br /> ### Header 3
              </td>
            </tr>

            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Bold
              </td>
              <td className="border border-gray-400 px-4 py-2">
                **bold text**
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Italic
              </td>
              <td className="border border-gray-400 px-4 py-2">
                *italic text*
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Block quote
              </td>
              <td className="border border-gray-400 px-4 py-2">
                &gt; This is a block quote
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Ordered lists
              </td>
              <td className="border border-gray-400 px-4 py-2">
                1. Item one
                <br />
                2. Item two
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Unordered lists
              </td>
              <td className="border border-gray-400 px-4 py-2">
                - Item one
                <br />- Item two
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Horizontal rule
              </td>
              <td className="border border-gray-400 px-4 py-2">---</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Link
              </td>
              <td className="border border-gray-400 px-4 py-2">
                [title](https://example.com)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Image
              </td>
              <td className="border border-gray-400 px-4 py-2">
                ![alt](image.jpg)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Code
              </td>
              <td className="border border-gray-400 px-4 py-2">
                `inline code`
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2 font-bold">
                Code Block
              </td>
              <td className="border border-gray-400 px-4 py-2">
                ```
                <br />
                multi-line code
                <br />
                ```
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarkdownCheatSheet;
