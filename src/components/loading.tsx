import Loader from "@/components/ui/loader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 w-screen h-screen ">
      <Loader className="text-primary" size="xl" variant={"dots"} />
    </div>
  );
};

export default Loading;
