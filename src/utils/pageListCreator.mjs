import fs from "node:fs";

const pages = fs
    .readdirSync("src/app", { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => folder.name)
    .filter(
        (folder) =>
            !folder.startsWith("(") &&
            !folder.startsWith("_") &&
            folder !== "og",
    );

const pageMapString =
    "const pageList = " +
    JSON.stringify(pages) +
    " as const;\nexport default pageList;\n";

fs.writeFileSync("src/utils/pageList.ts", pageMapString);
