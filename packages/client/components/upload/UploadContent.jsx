import Button from "../header/Button";
import { Switch } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, useEffect, Fragment } from "react";
import { useDropzone } from "react-dropzone";

// use npm published version
const UploadContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [thumbnail, setThumbnail] = useState({});
  const [files, setFiles] = useState([]);
  const [isNft, setIsNft] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "video/*",
    onDrop: (acceptedFiles) => {
      setFiles([]);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("owner", "0x23423");
    formData.append("desc", description);
    console.log(title, description, tags);
    console.log(files);
    console.log(isNft);
    // "title":"string","owner":"string","thumbnail":"image","desc":"string","link":"string"
    // fetch("https://video-api-08tf.onrender.com/api/v1/videos", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // });
  };

  return (
    <div className="mt-4 flex gap-6 flex-col justify-between lg:flex-row px-4">
      <div className="w-full ">
        <div>
          <h4 className="text-lg">Details</h4>
          <p>Provide the following information below to upload video</p>
        </div>
        <div className="mt-4">
          <label>Title (required) *</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full mt-2 outline-none border-[1px] p-2 bg-transparent border-[#2E2E2E] rounded"
          />
        </div>
        <div className="mt-4">
          <label>Description </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={4}
            placeholder="Tell your viewers everything about this video"
            className="w-full mt-2 outline-none border-[1px] p-2 bg-transparent border-[#2E2E2E] rounded"
          />
        </div>

        <div className="mt-4">
          <label>Tags </label>
          <input
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            className="w-full mt-2 outline-none border-[1px] p-2 bg-transparent border-[#2E2E2E] rounded"
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <h4 className="text-lg font-space">Create NFT</h4>
            <p className="text-sm">List this video for sale as an NFT</p>
          </div>
          <div>
            <Switch
              checked={isNft}
              onChange={setIsNft}
              className={`${isNft ? "bg-[#6624FF]" : "bg-gray-600"}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${isNft ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>

            <Transition appear show={isNft} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsNft(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-white"
                        >
                          List Nft
                        </Dialog.Title>
                        <div className="mt-4">
                          <label>Price (required) *</label>
                          <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="w-full mt-2 outline-none border-[1px] p-2 bg-transparent border-[#2E2E2E] rounded"
                          />
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-[#6624FF] p-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => setIsNft(false)}
                          >
                            List
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-lg">Thumbnail</h4>
          <p>Select and upload apicture that shows what’s in your video</p>
        </div>
      </div>
      <div className="w-[679px] px-2">
        <div>
          <p>Upload your video</p>
          <div
            {...getRootProps({ className: "dropzone" })}
            className="w-full mt-2 flex justify-center items-center border-[1px] border-[#2E2E2E] min-h-[317px]"
          >
            {files.length > 0 ? (
              <video
                className="w-full rounded-[5px]"
                height="100%"
                width="100%"
                id="video"
                src={files[0].preview.split("blob:")[1]}
                type="video/mp4"
                controls
              />
            ) : (
              <>
                <input {...getInputProps()} />
                <div className="text-center">
                  <p>Drag 'n' drop some files here</p>
                  <Button text="Select file" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="text-sm mt-3">
          <p className="">
            By submitting your videos to Metacreate, you acknowledge that you
            agree to Metacreate's{" "}
            <a className="text-[#6EF6C6]">Terms of Service</a> and{" "}
            <a className="text-[#6EF6C6]">Community Guidelines.</a>
          </p>
          <p className="mt-2">
            {" "}
            Please be sure not to violate others' copyright or privacy rights.
          </p>
        </div>
        <Button
          style="w-full mt-4"
          onClickHandle={() => {
            handleSubmit();
          }}
          text="Publish"
        />
      </div>
    </div>
  );
};

export default UploadContent;
