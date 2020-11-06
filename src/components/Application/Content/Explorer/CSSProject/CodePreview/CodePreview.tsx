import React from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import pug from 'react-syntax-highlighter/dist/esm/languages/prism/pug';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';

import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface Props {
    content: string;
    language: string;
}

const CodePreview: React.FC<Props> = ({ language, content }) => {

    SyntaxHighlighter.registerLanguage('pug', pug);
    SyntaxHighlighter.registerLanguage('scss', scss);

    return (
        <SyntaxHighlighter language={language} style={materialDark} wrapLongLines>
            {content}
        </SyntaxHighlighter>
    );
}

export default CodePreview;