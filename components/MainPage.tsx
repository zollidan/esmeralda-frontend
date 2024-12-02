type Status = {
  data?: number;
};

export const MainPage = ({ data }: Status) => {
  let bgColorClass = "";
  let textColorClass = "";
  let message = "";

  if (data === 200) {
    bgColorClass = "bg-green-800";
    textColorClass = "text-white";
    message = "Services are available";
  } else {
    bgColorClass = "bg-red-800";
    textColorClass = "text-white";
    message = "Services are not available";
  }

  return (
    <div
      className={`mt-8 ${bgColorClass} ${textColorClass} text-center p-4 rounded-lg`}
    >
      {message}
    </div>
  );
};
