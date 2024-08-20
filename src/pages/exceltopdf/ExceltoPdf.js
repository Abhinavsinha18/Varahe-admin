import React from 'react'
// import { useUser } from '../../components/hooks/user';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import PdfList from '../../components/PdfList/Pdflist';

function ExcelToPdf() {
  // const { user} = useUser();
  return (
    <div>
      {" "}
      <Header />
      <Sidenav />
      <div className="content-wrapper">
        <PdfList />
      </div>
    </div>
  );
}

export default ExcelToPdf