import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./App.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
            {children}
          </div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <nav className="mt-10 flex items-center justify-between max-w-7xl mx-auto px-6">
        <div className="cursor-pointer">
          <img
            src="https://famous-pithivier-11c029.netlify.app/img/logo.svg"
            alt="Bookmark Logo"
          />
        </div>

        <ul className="hidden md:flex items-center text-[15px] uppercase tracking-widest text-slate-600">
          <li className="mx-6 hover:text-red-400 cursor-pointer">Features</li>
          <li className="mx-6 hover:text-red-400 cursor-pointer">Pricing</li>
          <li className="mx-6 hover:text-red-400 cursor-pointer">Contact</li>
          <li>
            <button className="bg-[#fa5959] text-white px-8 py-2 rounded-lg border-2 border-[#fa5959] hover:bg-white hover:text-[#fa5959] transition-all">
              Login
            </button>
          </li>
        </ul>
      </nav>

      <section className="relative mt-20 pb-20">
        <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-32">
          <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left mt-16">
            <h1 className="text-5xl font-medium mb-6">
              A Simple Bookmark <br /> Manager
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try itF
              for free.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-[#5267df] text-white px-6 py-3 rounded border-2 border-[#5267df] hover:bg-white hover:text-[#5267df]">
                Get it on Chrome
              </button>
              <button className="bg-gray-100 px-6 py-3 rounded hover:border-2 shadow-md">
                Get it on Firefox
              </button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end flex-1 w-full mt-10">
            <img
              src="https://famous-pithivier-11c029.netlify.app/img/tablet.svg"
              alt="Illustration"
              className="relative z-10 w-full"
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="text-gray-400 text-lg mt-5">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="bookmark features tabs"
                sx={{
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontWeight: "medium",
                    px: 4,
                  },
                  "& .Mui-selected": { color: "#fa5959 !important" },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#fa5959",
                    height: 4,
                  },
                }}
              >
                <Tab label="Simple Bookmarking" {...a11yProps(0)} />
                <Tab label="Speedy Searching" {...a11yProps(1)} />
                <Tab label="Easy Sharing" {...a11yProps(2)} />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://famous-pithivier-11c029.netlify.app/img/slide/simple-bokmarking.svg"
                  alt="Feature 1"
                  className="max-w-sm"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-4">
                  Bookmark in one click
                </h3>
                <p className="text-gray-400 mb-6">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <a href="#">
                  <button className="bg-[#5267df] text-white px-6 py-2 rounded cursor-pointer">
                    More Info
                  </button>
                </a>
              </div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://famous-pithivier-11c029.netlify.app/img/slide/speedy-searching.svg"
                  alt="Feature 2"
                  className="max-w-sm"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-4">
                  Intelligent search
                </h3>
                <p className="text-gray-400 mb-6">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <a href="#">
                  <button className="bg-[#5267df] text-white px-6 py-2 rounded cursor-pointer">
                    More Info
                  </button>
                </a>
              </div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://famous-pithivier-11c029.netlify.app/img/slide/easy-sharing.svg"
                  alt="Feature 3"
                  className="max-w-sm"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-4">
                  Share your bookmarks
                </h3>
                <p className="text-gray-400 mb-6">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
                <a href="#">
                  <button className="bg-[#5267df] text-white px-6 py-2 rounded cursor-pointer">
                    More Info
                  </button>
                </a>
              </div>
            </CustomTabPanel>
          </Box>
        </div>
      </section>
      <section>
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Download the extension</h2>
          <p className="text-gray-400 text-lg mt-5">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
