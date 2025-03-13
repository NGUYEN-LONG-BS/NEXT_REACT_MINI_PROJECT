import React from "react";
import Footer from "./footer";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nội dung trang của bạn */}
      <main className="flex-grow">
        <h1 className="text-4xl text-center py-20">Chào mừng đến với trang web của tôi!</h1>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
