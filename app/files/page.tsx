export default function FilesPage() {
  const files = [
    "soccerway-2024-11-13-cd69b6a8-ddea-4080-91c6-7be78a8b2c17.xls",
    "soccerway-2024-11-14-23882947-d325-4567-adc7-35dac5b8b3fd.xls",
    "soccerway-2024-11-18-a944d540-f0fd-4ea7-a6ff-731d0f57f4eb.xls",
    "soccerway-2024-11-20-d3d8a611-1ba2-4889-a5c3-8fef8cbff469.xls",
    "soccerway-2024-11-23-cfb372a8-d7bc-4fea-ae1e-7f2d74eb8ab2.xls",
    "soccerway-2024-11-25-b5358800-bc39-4a4e-8020-10cfda73aea3.xls",
    "soccerway-2024-11-26-97d6e239-526b-46a7-bd4f-709e8e26928d.xls",
    "soccerway-2024-01-01-cef9c00a-b17a-410a-a97a-375fe12b2f01.xls",
    "soccerway-2024-01-02-a9054c27-7f03-4b17-83b3-748e78d391bf.xls",
    "soccerway-2024-01-03-c6aa963c-a744-451e-9173-0071eefdcbc5.xls",
  ];

  return (
    <div className="flex flex-col">
      {files.map((file) => (
        <a href={"https://storage.yandexcloud.net/esmeralda/" + file}>{file}</a>
      ))}
    </div>
  );
}
