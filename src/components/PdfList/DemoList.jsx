import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import FilterComponent from "../Common/FilterComponent";
import Loader from "../Loader/index";
// import { useReactToPrint } from "react-to-print";

const DemoList = () => {
//   const { pdfuser, pdfuserIsLoading } = usePdfUserList();
const datapdf =[
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
