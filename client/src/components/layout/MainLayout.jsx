import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import GlobalLoading from "../common/GlobalLoading";
import Footer from "../common/Footer"
import Topbar from "../common/Topbar"
import AuthModal from "../common/AuthModal";


const MainLayout = () => {
    return (
      <>
        {/* global loading */}
        {/* global loading */}
        <GlobalLoading />

        {/* login modal */}
        <AuthModal />
        {/* login modal */}
        <Box display="flex" minHeight="100vh">
          {/* header */}
          <Topbar />
          {/* header */}
  
          {/* main */}
          <Box
            component="main"
            flexGrow={1}
            overflow="hidden"
            minHeight="100vh"
          >
            <Outlet />
          </Box>
          {/* main */}
        </Box>
  
        {/* footer */}

        <Footer />
        {/* footer */}
      </>
    );
  };
  
  export default MainLayout;