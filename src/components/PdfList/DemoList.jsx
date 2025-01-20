import React, { useMemo, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import FilterComponent from "../Common/FilterComponent";
import Loader from "../Loader/index";
// import { useReactToPrint } from "react-to-print";

const DemoList = () => {
//   const { pdfuser, pdfuserIsLoading } = usePdfUserList();
const datapdf = [
  {
    "Project Name": "TN-ASE-02",
    "Team Code": "TNF020",
    "Employee Code": "KAF-2405",
    "Employee name": "Rameshwar Prasath K",
    "Proper Name": "Rameshwar Prasath K",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/file/d/1-sJ2iTLjHxPc1eCzwPUoGaGvMaJM9m-C/view?usp=share_link",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "TN-ASE-02",
    "Team Code": "TNF020",
    "Employee Code": "KAF-2405",
    "Employee name": "Rameshwar Prasath K",
    "Proper Name": "Rameshwar Prasath K",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/open?id=1-gVQCZEnLQ1l3Vbe9Z4dLJhuyUt57ARM",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "TN-ASE-02",
    "Team Code": "TNF020",
    "Employee Code": "KAF-2797",
    "Employee name": "Vanitha S",
    "Proper Name": "Vanitha S",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "AB+",
    "Image Link": "https://drive.google.com/open?id=10HvI10jdRNPD4ylz2d2AdnpbKRbsj_NR",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "TN-ASE-02",
    "Team Code": "TNF020",
    "Employee Code": "KAF-3289",
    "Employee name": "Panneerselvam.S",
    "Proper Name": "Panneerselvam.S",
    "Designation": "Team Leader",
    "ID Card Validity": "April 2026",
    "Blood Group": "A+",
    "Image Link": "https://drive.google.com/open?id=1F7u2YyeYICL19ylOhQgaWIa__nEGkouh",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "TN-ASE-02",
    "Team Code": "TNF020",
    "Employee Code": "KAF-3528",
    "Employee name": "Nandhini Devi S",
    "Proper Name": "Nandhini Devi S",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "O+",
    "Image Link": "https://drive.google.com/open?id=1ofqjv1pW7ap8DHb_kvYuO7kuc9zIIQbe",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "TN-ASE-02",
    "Team Code": "TNF020",
    "Employee Code": "KAF-6273",
    "Employee name": "Gajendramurthi. R",
    "Proper Name": "Gajendramurthi. R",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "O-",
    "Image Link": "https://drive.google.com/open?id=1VF_GtcdGtZTuU-5iLZ0NYlbcmbZUcY1H",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "TN-ASE-02",
    "Team Code": "TNF020",
    "Employee Code": "KAF-6274",
    "Employee name": "Sivitha M",
    "Proper Name": "Sivitha M",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "A+",
    "Image Link": "https://drive.google.com/open?id=11d9JCALeUF5_jPUzJmVMXIS1TxCkY9up",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF022",
    "Employee Code": "KAF-2445",
    "Employee name": "Ankit Singh",
    "Proper Name": "Ankit Singh",
    "Designation": "Team Leader",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/open?id=18lPjXVYaan2QrZTArQ3Ro5-ZwkxNWHVG",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF022",
    "Employee Code": "KAF-2446",
    "Employee name": "Sunita Devi",
    "Proper Name": "Sunita Devi",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/open?id=1-gZy3EoJukR_IaUTDvf2UqKYLqgiUWnn",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF022",
    "Employee Code": "KAF-3550",
    "Employee name": "Jitin Shukla",
    "Proper Name": "Jitin Shukla",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/open?id=1Zo_LFQEO_fyqhv4YqqT-tiJkLVCl9emS",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF022",
    "Employee Code": "KAF-3553",
    "Employee name": "Shivangni",
    "Proper Name": "Shivangni",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "Don't remember",
    "Image Link": "https://drive.google.com/open?id=1HAn0SsOMXE6i2EIyu0R7-tBUHf4uJOqC",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF022",
    "Employee Code": "KAF-3554",
    "Employee name": "Laxmi",
    "Proper Name": "Laxmi",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "Don't remember",
    "Image Link": "https://drive.google.com/open?id=1e4YsFdliiGP7r6MmUwqaij-1sNZ0x6E-",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF022",
    "Employee Code": "KAF-6278",
    "Employee name": "Pradeep Singh",
    "Proper Name": "Pradeep Singh",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/open?id=1zy_xH5OYlkBH5Q49Lb4rA12mQTCac5Wi",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF023",
    "Employee Code": "KAF-4180",
    "Employee name": "Ujala Kumari",
    "Proper Name": "Ujala Kumari",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "AB+",
    "Image Link": "https://drive.google.com/open?id=1WvWe6lrR61hOJ4m7xmPXY703AFWUDHIi",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF023",
    "Employee Code": "KAF-4182",
    "Employee name": "Ankul saini",
    "Proper Name": "Ankul Saini",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "AB+",
    "Image Link": "https://drive.google.com/open?id=1ShEQDSIQS8k1_PaYGSaK5vV0E-yFtM01",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF023",
    "Employee Code": "KAF-4184",
    "Employee name": "Atish Kumar",
    "Proper Name": "Atish Kumar",
    "Designation": "Team Leader",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/open?id=1GFTVZtSupHRYq3x1ioo_fQByNOqQ77q1",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF023",
    "Employee Code": "KAF-5146",
    "Employee name": "Lakshmi Kumari",
    "Proper Name": "Lakshmi Kumari",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "A+",
    "Image Link": "https://drive.google.com/open?id=1PnTI90q2F6Kr0ns86YPQ9XTS6iB_DbDo",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF023",
    "Employee Code": "KAF-5211",
    "Employee name": "Anshi",
    "Proper Name": "Anshi",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "AB+",
    "Image Link": "https://drive.google.com/open?id=1j5-S71dx9MUBVG3kGO6p8RbDf5vMG_QY",
    "Remarks": "",
    "@dropdown": ""
  },
  {
    "Project Name": "DL-ASE-02",
    "Team Code": "DLF023",
    "Employee Code": "KAF-5043",
    "Employee name": "Purnima Tiwari",
    "Proper Name": "Purnima Tiwari",
    "Designation": "Field Associate",
    "ID Card Validity": "April 2026",
    "Blood Group": "B+",
    "Image Link": "https://drive.google.com/open?id=16yIauZWI6-RGN6hU55UP3MsYo6kcOMM2",
    "Remarks": "",
    "@dropdown": ""
  }
]

  // const { blogData, blogIsLoading } = useBlogList();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
// console.log(blogData);
  console.log(datapdf)




  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  // console.log(blogData ? blogData: "")

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <div>
          <img
            src={row["Image Link"].match(/(?:id=|\/d\/)([^\/?]+)/)?.[1]
              ? `https://drive.google.com/thumbnail?id=${
                  row["Image Link"].match(/(?:id=|\/d\/)([^\/?]+)/)?.[1]
                }`
              : "https://via.placeholder.com/100"} // Placeholder if ID extraction fails
            alt="Employee"
            width="100px"
            height="80px"
          />
        </div>
      ),
      sortable: true,
    },
    {
      name: "Employee name",
      selector: (row) => row["Employee name"],
      sortable: true,
    },
    {
      name: "Employee code",
      selector: (row) => row["Employee Code"],
      sortable: true,
    },
    {
      name: "Project Name",
      selector: (row) => row["Project Name"],
      sortable: true,
    },
    {
      name: "Designation",
      selector: (row) => row.Designation,
      sortable: true,
    },
    {
      name: "Blood Group",
      selector: (row) => row["Blood Group"],
      sortable: true,
    },
    {
      name: "Make pdf",
      selector: (row) => (
        <Link
          to={`/view-pdf/${row["Employee Code"]}`}
          className="btn btn-primary"
        >
          pdf
        </Link>
      ),
    },
  ];
  

  if (false) {
    return <Loader />;
  }

  const filteredItems =
  datapdf && datapdf.length > 0
      ? datapdf.filter(
          (item) =>
            JSON.stringify(item)
              .toLowerCase()
              .indexOf(filterText.toLowerCase()) !== -1
        )
      : [];

  return (
    <>
      {/* <ViewBlogModel
            id="exampleModalview2"
      
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            blog={blog}
          /> */}
      <div className="container" style={{ padding: "20px" }}>
        {/* <div className="text-right">
   
   <Link  to={"/addblog"}  className="btn btn-dark">Add Blog <i className="fa fa-plus"></i></Link>  
              </div> */}
        <div className="table-wrapper">
          <h3 className="text-center" style={{ padding: "5px" }}>
            Data List
          </h3>
          {
            <DataTable
              columns={columns}
              data={filteredItems}
              direction="auto"
              fixedHeaderScrollHeight="300px"
              pagination
              responsive
              progressPending={false}
              // conditionalRowStyles={conditionalRowStyles}

              subHeaderAlign="right"
              subHeaderWrap
              subHeaderComponent={subHeaderComponent}
              subHeader
            />
          }
        </div>
      </div>

      {/* <img src='https://drive.google.com/uc?id=111KXF6h1WG_dYzaHHJHXXDpyac4aV8SI' alt='img' crossOrigin='anonymous'/> */}
    </>
  );
};

export default DemoList;
