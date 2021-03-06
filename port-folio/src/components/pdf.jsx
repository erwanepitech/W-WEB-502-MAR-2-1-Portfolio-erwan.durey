import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import cv from '../assets/cv.pdf'

//PDFjs worker from an external cdn
const url = cv;

function App() {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <>
            <div>
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}
                    // className="w-full h-full xs:w-96 xs:h-96 mx-1 items-center"
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </>
    );
}

export default App