import Chat from "@/app/components/Chat";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Room({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[70%]">
        <div className="md:w-[85%] w-full m-3">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className=" h-full w-full"></video>
              <span className="absolute bottom-3">João Pedro</span>
            </div>
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className=" h-full w-full"></video>
              <span className="absolute bottom-3">João Pedro</span>
            </div>
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className=" h-full w-full"></video>
              <span className="absolute bottom-3">João Pedro</span>
            </div>
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className=" h-full w-full"></video>
              <span className="absolute bottom-3">João Pedro</span>
            </div>
          </div>
        </div>
        <Chat />
      </div>
      <Footer />
    </div>
  );
}
