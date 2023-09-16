export const mapToLines = (lines: string[]) => {
    return lines.map((line) => <p key={line}>{line}</p>);
};
