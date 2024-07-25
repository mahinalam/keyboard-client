/* eslint-disable @typescript-eslint/no-explicit-any */
import ResponsiveNavbar from "../../pages/home/sharred/navbar/Navbar";
import ResponsiveFooter from "../../pages/home/sharred/footer/Footer";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

const MainLayout = () => {
  const cartTotalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      if (cartTotalQuantity > 0) {
        const message =
          "You have items in your cart. Reloading the page will lose your cart data.";
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartTotalQuantity]);
  return (
    <div>
      <ResponsiveNavbar />
      <Outlet />
      <ResponsiveFooter />
    </div>
  );
};

export default MainLayout;
