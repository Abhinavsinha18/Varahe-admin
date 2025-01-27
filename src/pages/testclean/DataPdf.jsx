import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Sidenav from "../../components/Sidenav/Sidenav";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "./pdf2.css";

const DataPff = () => {
  const [state, setState] = useState([]);
  const licenceCertificateref = useRef();
  const { id } = useParams();

  const pdfuser = [
    {
      "Project Name": "TN-ASE-02",
      "Team Code": "TNF024",
      "Employee Code": "KAF-2319",
      "Employee name": "Sandhiya R",
      "Designation": "Field Associate",
      "Blood Group": "A+",
      "Image Link": "https://drive.google.com/file/d/1aGP0EruKEfuEGe1bT5gtIuA-H79q4oqT/view?usp=drive_link"
    },
    {
      "Project Name": "TN-ASE-02",
      "Team Code": "TNF024",
      "Employee Code": "KAF-3197",
      "Employee name": "Kathavarayan.M",
      "Designation": "Team Leader",
      "Blood Group": "B+",
      "Image Link": "https://drive.google.com/open?id=1iI2NmZtOXaZY5Q4qKvdfevp1vz50YzjF"
    },
    {
      "Project Name": "TN-ASE-02",
      "Team Code": "TNF024",
      "Employee Code": "KAF-6292",
      "Employee name": "E. Gayathiri",
      "Designation": "Field Associate",
      "Blood Group": "B+",
      "Image Link": "https://drive.google.com/open?id=1LJsNJeRPR0HlCD7WWW1ygj7H-c8wgaN9"
    },
    {
      "Project Name": "TN-ASE-02",
      "Team Code": "TNF024",
      "Employee Code": "KAF-6293",
      "Employee name": "Mansooraligan",
      "Designation": "Field Associate",
      "Blood Group": "AB+",
      "Image Link": "https://drive.google.com/open?id=1qJcFG6RV17D_OyEAq_CF1GhSVVLXQnvX"
    },
    {
      "Project Name": "TN-ASE-02",
      "Team Code": "TNF024",
      "Employee Code": "KAF-6294",
      "Employee name": "Vinothkumar.K",
      "Designation": "Field Associate",
      "Blood Group": "B+",
      "Image Link": "https://drive.google.com/file/d/1YFvLl2qpJ4oxEMJlEBVjtacXKZ8Gyh3m/view?usp=drive_link"
    }
  ]

  useEffect(() => {
    // Filter the pdfuser array to find the correct user by Employee Code
    const filteredData = pdfuser.filter((e) => e["Employee Code"] === id);
    setState(filteredData);
  }, [id]);

  const handlePrint = useReactToPrint({
    content: () => licenceCertificateref.current,
    documentTitle: state.length > 0 ? state[0]["Employee name"] : "Employee", // Dynamically set the document title
  });

  // Function to extract image ID from the Google Drive URL
  const getImageId = (url) => {
    const match = url.match(/(?:id=|\/d\/)([^\/?]+)/);
    return match ? match[1] : null;
  };

  return (
    <div>
      <Header />
      <Sidenav />
      <div className="content-wrapper">
        {state.length > 0 ? (
          <div ref={licenceCertificateref}>
            <div className="cardtwo">
              <div className="imgPdf">
                <img
                  src={
                    state[0]["Image Link"]
                      ? `https://drive.google.com/thumbnail?id=${getImageId(state[0]["Image Link"])}` // Extract image ID and generate thumbnail URL
                      : "https://via.placeholder.com/100x80?text=No+Image" // Fallback image if no link
                  }
                  alt="Employee"
                  width="100px"
                  height="80px"
                />
              </div>
              <div className="namePdf">
                <h1
                  style={{
                    fontSize: state[0]["Employee name"].length < 14 ? "70px" : "60px",
                  }}
                >
                  <b>{state[0]["Employee name"]}</b>
                </h1>
              </div>
              <div className="designPdf">
                <b>
                  <p>{state[0]["Designation"]}</p>
                </b>
              </div>
              <div className="projectPdf">
                <p>Project ID: {state[0]["Project Name"]}</p>
              </div>
              <div className="employeidPdf">
                <p>Employee ID: {state[0]["Employee Code"]}</p>
              </div>
              <div className="bloodidPdf">
                <p>Blood Group : {state[0]["Blood Group"]}</p>
              </div>
            </div>

            <div className="cardthree"></div>
          </div>
        ) : (
          "Loading..."
        )}
      </div>

      <p>
        <button onClick={handlePrint} className="buttonpdf">
          Get Pdf
        </button>
      </p>
    </div>
  );
};

export default DataPff;